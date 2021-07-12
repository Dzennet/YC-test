import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import { setSearch } from "../redux/Table/TableActionCreators";
import { setModalVariant } from "../redux/Request/RequestActionCreators";

function NavbarContainer({ setSearch, setModalVariant }) {
  return <Navbar setSearch={setSearch} setModalVariant={setModalVariant} />;
}

export default connect(null, { setSearch, setModalVariant })(NavbarContainer);
