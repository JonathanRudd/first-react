import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        // can't refer to setAlertVisibility here because it's not in scope, so we need to pass it in as a prop
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
