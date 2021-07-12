import React from "react";
import classes from "./Modal.module.css";
import RequestData from "./RequestData";
import RequestCreateForm from "./RequestCreateForm";
import RequestEditForm from "./RequestEditForm";

function Modal(props) {
  const getModal = () => {
    switch (props.modalVariant) {
      case "showModal":
        return (
          <RequestData
            deleteRequest={props.deleteRequest}
            request={props.request}
            setModalVariant={props.setModalVariant}
          />
        );

      case "createModal":
        return (
          <RequestCreateForm
            addRequest={props.addRequest}
            setModalVariant={props.setModalVariant}
          />
        );

      case "editModal":
        return (
          <RequestEditForm
            editRequest={props.editRequest}
            request={props.request}
            setModalVariant={props.setModalVariant}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modal_inner}>
        <div
          onClick={() => props.setModalVariant(null)}
          className={classes.modal_close}
        >
          &times;
        </div>
        {getModal()}
      </div>
    </div>
  );
}

export default Modal;
