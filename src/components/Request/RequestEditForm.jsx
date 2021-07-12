import React, { useState } from "react";
import classes from "./Modal.module.css";

function ModalEditForm({ request, editRequest, setModalVariant }) {
  const [companyName, setCompanyName] = useState(request.company_name);
  const [fullName, setFullName] = useState(request.fullName);
  const [phone, setPhone] = useState(request.phone);
  const [ATICode, setATICode] = useState(request.ATI_code);

  const onEditRequest = () => {
    editRequest(request.id, companyName, fullName, phone, ATICode);
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
        </div>

        <div className={classes.request_options}>
          <button onClick={() => onEditRequest()}>Изменить</button>
          <button onClick={() => setModalVariant(null)}>Назад</button>
        </div>
      </div>
    </>
  );
}

export default ModalEditForm;
