import { useEffect, useRef, useState } from "react";

// Styles
import "./QrReader.css";

// Qr Scanner
import QrScanner from "qr-scanner";
import QrFrame from "../../assets/qr-frame.svg";
import { ticketsApi } from "@/model/tickets/ticketsApi";
import { Button } from "../ui/button";

const QrReader = () => {
  // QR States
  const scanner = useRef<QrScanner>();
  const videoEl = useRef<HTMLVideoElement>(null);
  const qrBoxEl = useRef<HTMLDivElement>(null);
  const [qrOn, setQrOn] = useState<boolean>(true);

  const [validateTicket] = ticketsApi.useValidateTicketMutation();

  // Result
  const [scannedResult, setScannedResult] = useState<string | undefined>("");

  // Success
  const onScanSuccess = async (result: QrScanner.ScanResult) => {
    // 🖨 Print the "result" to browser console.
    console.log(result);
    // ✅ Handle success.
    scanner.current?.stop();
    console.log("pause");

    const response = await validateTicket(result?.data).unwrap();
    setScannedResult(response.message);

    // scanner.current?.start();
    // console.log("start");
  };

  // Fail
  const onScanFail = (err: string | Error) => {
    console.log(err);
  };

  async function continueScanning() {
    setScannedResult("");
    await scanner.current?.start();
  }

  useEffect(() => {
    let vidEL = null;
    if (videoEl?.current && !scanner.current) {
      // 👉 Instantiate the QR Scanner
      vidEL = videoEl.current;
      scanner.current = new QrScanner(vidEL, onScanSuccess, {
        onDecodeError: onScanFail,
        // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
        preferredCamera: "environment",
        // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
        highlightScanRegion: true,
        // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
        highlightCodeOutline: true,
        // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
        overlay: qrBoxEl?.current || undefined,
      });

      // 🚀 Start QR Scanner
      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    // 🧹 Clean up on unmount.
    // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
    return () => {
      if (!vidEL) {
        scanner?.current?.stop();
      }
    };
  }, []);

  // ❌ If "camera" is not allowed in browser permissions, show an alert.
  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
  }, [qrOn]);

  return (
    <div className="w-[300px] h-2/3 mx-auto relative  sm:w-full  ">
      {/* QR */}
      <video className="w-full h-2/3 object-cover" ref={videoEl}></video>
      <div ref={qrBoxEl} className=" w-full left-0">
        <img
          src={QrFrame}
          alt="Qr Frame"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w=[256px] h-[256px] "
        />
      </div>

      {/* Show Data Result if scan is success */}

      <>
        <p
          className=" absolute top-0 left-0 z-[99999] w-[300px] text-wrap   bg-white "
          // style={{
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   zIndex: 99999,
          //   color: "white",
          // }}
        >
          Scanned Result: {scannedResult}
        </p>
        <Button className="mt-4" onClick={continueScanning}>
          Start
        </Button>
      </>
    </div>
  );
};

export default QrReader;
