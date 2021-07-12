import { GET_SELECTED_REQUEST, SET_MODAL_VARIANT } from "./RequestConstants";

let initialState = {
  selectedRequest: [],
  modalVariant: null,
};

const RequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_REQUEST:
      return {
        ...state,
        selectedRequest: action.selectedRequest,
      };

    case SET_MODAL_VARIANT:
      return {
        ...state,
        modalVariant: action.modalVariant,
      };
    default:
      return state;
  }
};

export default RequestReducer;
