import Modal from "@/components/Modal";
import QrReader from "@/components/QrScanner/QrReader";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AdminPage() {
  const [openQr, setOpenQr] = useState<boolean>(false);
  return (
    <div>
      <Button onClick={() => setOpenQr(true)}>
        {openQr ? "Close" : "Open"} QR Scanner
      </Button>
      <Modal open={openQr} onClose={() => setOpenQr(false)}>
        <QrReader />
      </Modal>
    </div>
  );
}
