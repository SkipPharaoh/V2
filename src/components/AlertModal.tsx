import React, { forwardRef, ReactNode } from "react";
import Modal from "./Modal";

interface AlertModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const AlertModal = forwardRef<HTMLDivElement, AlertModalProps>(
  ({ isVisible, onClose, children }, ref) => {
    return (
      <Modal ref={ref} isVisible={isVisible}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          {children}
          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    );
  }
);

AlertModal.displayName = "AlertModal";

export default AlertModal;
