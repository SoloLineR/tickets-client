import { Button } from "./ui/button";
import { createPortal } from "react-dom";
export default function Modal({
  open,
  children,
  onClose,
}: {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0  right-0 bottom-0 w-full h-full bg-black/50 z-[1000] "
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-16 z-[1000] bg-white">
        {children}
        <Button className="mt-4" onClick={onClose}>
          Close
        </Button>
      </div>
    </>,
    document.getElementById("modal")!
  );
}
