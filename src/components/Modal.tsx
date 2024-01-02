import { CSSProperties, forwardRef, ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isVisible, className, style, children }, ref) => {
    const modalClasses = `fixed inset-0 flex items-center justify-center z-50 ${
      className || ""
    }`;
    const modalStyle = { ...style, display: isVisible ? "block" : "none" };

    return (
      <div
        className={modalClasses}
        style={modalStyle}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              ref={ref}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
