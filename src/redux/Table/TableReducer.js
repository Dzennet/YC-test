import {
  ADD_REQUEST,
  DELETE_REQUEST,
  EDIT_REQUEST,
  SET_SEARCH,
} from "./TableConstants";

let initialState = {
  tableData: [
    {
      id: 1,
      date: 1,
      company_name: "Company1",
      fullName: "Ян",
      phone: "89076500958",
      comments: ["comment1", "comment2"],
      ATI_code: "1234",
    },
    {
      id: 2,
      date: 3,
      company_name: "Company2",
      fullName: "Сергей",
      phone: "89765432456",
      comments: ["comment1", "comment2", "comment2"],
      ATI_code: "76830",
    },
    {
      id: 3,
      date: 4,
      company_name: "Company2",
      fullName: "Мария",
      phone: "89456541322",
      comments: ["comment1", "comment2", "comment2"],
      ATI_code: "76830",
    },
  ],
  search: "",
};

const TableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        tableData: [
          ...state.tableData,
          {
            id: action.id,
            date: action.date,
            company_name: action.company_name,
            fullName: action.fullName,
            phone: action.phone,
            comments: [action.comment],
            ATI_code: action.ATI_code,
          },
        ],
      };
    case DELETE_REQUEST:
      return {
        ...state,
        tableData: state.tableData.filter(
          (request) => request.id !== action.id
        ),
      };
    case EDIT_REQUEST:
      return {
        ...state,
        tableData: state.tableData.map((request) => {
          if (request.id === action.id) {
            return {
              ...request,
              company_name: action.company_name,
              fullName: action.fullName,
              phone: action.phone,
              ATI_code: action.ATI_code,
            };
          }
          return request;
        }),
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
};

export default TableReducer;
