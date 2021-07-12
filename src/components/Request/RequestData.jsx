import React from "react";
import classes from "./Modal.module.css";

function RequestData({ request, deleteRequest, setModalVariant }) {
  const onDelete = () => {
    deleteRequest(request.id);
    setModalVariant(null);
  };

  return (
    <div className={classes.request}>
      <div className={classes.request_items}>
        <div className={classes.request_item}>
          Дата и время получения заявки: {request.date}
        </div>
        <div className={classes.request_item}>
          Название фирмы клиента: {request.company_name}
        </div>
        <div className={classes.request_item}>
          ФИО перевозчика: {request.fullName}
        </div>
        <div className={classes.request_item}>
          Контактный телефон перевозчика: {request.phone}
        </div>
        <div className={classes.request_item}>
          Комментарии:
          <ul className={classes.request_item_list}>
            {request.comments.map((comment, index) => {
              return <li key={index}>{comment}</li>;
            })}
          </ul>
        </div>
        <div className={classes.request_item}>
          ATI код сети перевозчика:
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://ati.su/firms/${request.ATI_code}/info`}
          >
            {request.ATI_code}
          </a>
        </div>
      </div>

      <div className={classes.request_options}>
        <button
          className={classes.edit_btn}
          onClick={() => setModalVariant("editModal")}
        >
          Редактировать
        </button>
        <button className={classes.delete_btn} onClick={() => onDelete()}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default RequestData;
