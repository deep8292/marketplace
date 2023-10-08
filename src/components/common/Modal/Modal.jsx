import classes from "./Modal.module.css";
import { forwardRef } from "react";

const Modal = forwardRef((props, ref) => {
  return (
    <>
    <div className={classes.backdrop} onClick={props.onClose}></div>
    <div>
        <dialog open className={classes.modal} ref={ref}>
          {props.children}
        </dialog>
      </div>
    </>
  );
});

export default Modal;
