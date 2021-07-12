import React from "react";
import classes from "./Table.module.css";
import Modal from "../Request/Modal";

function Table(props) {
  const onRequestClick = (request) => {
    props.setModalVariant("showModal");
    props.getSelectedRequest(request);
  };

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>№</th>
              <th>
                Дата и время
                <i className="fas fa-sort"></i>
              </th>
              <th>
                Фирма
                <i className="fas fa-sort"></i>
              </th>
              <th>
                ФИО перевозчика
                <i className="fas fa-sort"></i>
              </th>
              <th>Номер телефона</th>
              <th>Комментарии</th>
              <th>ATI код сети </th>
            </tr>
          </thead>
          <tbody>
            {props.tableData.map((request, index) => {
              return (
                <tr onClick={() => onRequestClick(request)} key={request.id}>
                  <td>{index + 1}</td>
                  <td>{request.date}</td>
                  <td>{request.company_name}</td>
                  <td>{request.fullName}</td>
                  <td>{request.phone}</td>
                  <td>{request.comments.length}</td>
                  <td>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://ati.su/firms/${request.ATI_code}/info`}
                    >
                      {request.ATI_code}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {props.modalVariant && (
        <Modal
          modalVariant={props.modalVariant}
          setModalVariant={props.setModalVariant}
          addRequest={props.addRequest}
          deleteRequest={props.deleteRequest}
          request={props.selectedRequest}
          editRequest={props.editRequest}
        />
      )}
    </>
  );
}

export default Table;
