import classes from "../styles/Modal.module.css";
import { forwardRef } from "react";

const Modal = forwardRef((props, ref) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      <dialog open className={classes.modal} ref={ref}>
        {props.children}
      </dialog>
    </div>
  );
});

export default Modal;
