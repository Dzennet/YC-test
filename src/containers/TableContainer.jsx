import React from "react";
import { connect } from "react-redux";
import Table from "../components/Table/Table";
import {
  getSelectedRequest,
  setModalVariant,
} from "../redux/Request/RequestActionCreators";
import {
  deleteRequest,
  addRequest,
  editRequest,
} from "../redux/Table/TableActionCreators";

function TableContainer(props) {
  return (
    <Table
      tableData={props.tableData}
      getSelectedRequest={props.getSelectedRequest}
      selectedRequest={props.selectedRequest}
      deleteRequest={props.deleteRequest}
      addRequest={props.addRequest}
      setModalVariant={props.setModalVariant}
      modalVariant={props.modalVariant}
      editRequest={props.editRequest}
    />
  );
}

let mapStateToProps = (state) => ({
  modalVariant: state.request.modalVariant,
  selectedRequest: state.request.selectedRequest,
  tableData: state.table.tableData.filter(
    (request) =>
      request.fullName.includes(state.table.search) ||
      request.company_name.includes(state.table.search) ||
      request.ATI_code.includes(state.table.search) ||
      request.phone.includes(state.table.search)
  ),
});

export default connect(mapStateToProps, {
  getSelectedRequest,
  deleteRequest,
  addRequest,
  setModalVariant,
  editRequest,
})(TableContainer);
