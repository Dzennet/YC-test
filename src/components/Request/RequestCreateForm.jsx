import React, { useState } from "react";
import classes from "./Modal.module.css";

function RequestCreateForm({ addRequest, setModalVariant }) {
  let id = Date.now();
  let date = `${new Date().toLocaleDateString()} ${new Date()
    .toLocaleTimeString()
    .slice(0, -3)}`;
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [ATICode, setATICode] = useState("");

  const addNewRequest = () => {
    addRequest(id, date, companyName, fullName, phone, comment, ATICode);
    setModalVariant(null);
  };

  return (
    <>
      <div className={classes.request}>
        <div className={classes.request_items}>
          <div className={classes.request_item}>
            <label htmlFor="companyName"> Название фирмы клиента:</label>
            <input
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              name="companyName"
              type="text"
            />
          </div>
          <div className={classes.request_item}>
            <label htmlFor="fullName"> ФИО перевозчика:</label>
            <input
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              name="fullName"
              type="text"
            />
          </div>
          <div className={classes.request_item}>
            <label htmlFor="phone"> Контактный телефон перевозчика:</label>
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              name="phone"
              type="text"
            />
          </div>
          <div className={classes.request_item}>
            <label htmlFor="ATICode"> ATI код сети перевозчика:</label>
            <input
              value={ATICode}
              onChange={(e) => {
                setATICode(e.target.value);
              }}
              name="ATICode"
              type="text"
            />
          </div>
          <div className={classes.request_item}>
            <label htmlFor="comment">Комментарий:</label>
            <textarea
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              name="comment"
            ></textarea>
          </div>
        </div>

        <div className={classes.request_options}>
          <button onClick={() => addNewRequest()}>Сохранить</button>
        </div>
      </div>
    </>
  );
}

export default RequestCreateForm;
