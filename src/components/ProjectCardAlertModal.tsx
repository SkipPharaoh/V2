import { forwardRef } from "react";
import AlertModal from "./AlertModal";

interface ProjectCardAlertModalProps {
  isAlertVisible: boolean;
  handleAlertClose: () => void;
}

const ProjectCardAlertModal = forwardRef<
  HTMLDivElement,
  ProjectCardAlertModalProps
>(({ isAlertVisible, handleAlertClose, ...props }, ref) => {
  return (
    <AlertModal
      ref={ref}
      isVisible={isAlertVisible}
      onClose={handleAlertClose}
      {...props}
    >
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3
              className="text-base font-semibold leading-6 text-gray-900"
              id="modal-title"
            >
              Hold up!
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                You are already on this site! 🤩
              </p>
            </div>
          </div>
        </div>
      </div>
    </AlertModal>
  );
});

ProjectCardAlertModal.displayName = "ProjectCardAlertModal";

export default ProjectCardAlertModal;
