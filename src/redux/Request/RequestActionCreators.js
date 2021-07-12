import { GET_SELECTED_REQUEST, SET_MODAL_VARIANT } from "./RequestConstants";

export const getSelectedRequest = (selectedRequest) => ({
  type: GET_SELECTED_REQUEST,
  selectedRequest,
});

export const setModalVariant = (modalVariant) => ({
  type: SET_MODAL_VARIANT,
  modalVariant,
});
