import {
  ADD_REQUEST,
  DELETE_REQUEST,
  EDIT_REQUEST,
  SET_SEARCH,
} from "./TableConstants";

export const addRequest = (
  id,
  date,
  company_name,
  fullName,
  phone,
  comment,
  ATI_code
) => ({
  type: ADD_REQUEST,
  id,
  date,
  company_name,
  fullName,
  phone,
  comment,
  ATI_code,
});

export const deleteRequest = (id) => ({ type: DELETE_REQUEST, id });

export const editRequest = (
  id,
  company_name,
  fullName,
  phone,
  ATI_code
) => ({
  type: EDIT_REQUEST,
  id,
  company_name,
  fullName,
  phone,
  ATI_code,
});

export const setSearch = (search) => ({ type: SET_SEARCH, search });
