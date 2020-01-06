// app
const TOGGLE_MENU = "TOGGLE_MENU";

// auth
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// expense
const EXPENSES_REQUEST = "EXPENSES_REQUEST";
const EXPENSES_SUCCESS = "EXPENSES_SUCCESS";
const EXPENSES_FAILURE = "EXPENSES_FAILURE";

const EXPENSE_DETAILS_REQUEST = "EXPENSE_DETAILS_REQUEST";
const EXPENSE_DETAILS_SUCCESS = "EXPENSE_DETAILS_SUCCESS";
const EXPENSE_DETAILS_FAILURE = "EXPENSE_DETAILS_FAILURE";

const EXPENSE_DELETE_REQUEST = "EXPENSE_DELETE_REQUEST";
const EXPENSE_DELETE_SUCCESS = "EXPENSE_DELETE_SUCCESS";
const EXPENSE_DELETE_FAILURE = "EXPENSE_DELETE_FAILURE";

const EXPENSE_UPDATE_REQUEST = "EXPENSE_UPDATE_REQUEST";
const EXPENSE_UPDATE_SUCCESS = "EXPENSE_UPDATE_SUCCESS";
const EXPENSE_UPDATE_FAILURE = "EXPENSE_UPDATE_FAILURE";

const actionsTypes = {
  TOGGLE_MENU,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  EXPENSES_REQUEST,
  EXPENSES_SUCCESS,
  EXPENSES_FAILURE,
  EXPENSE_DETAILS_REQUEST,
  EXPENSE_DETAILS_SUCCESS,
  EXPENSE_DETAILS_FAILURE,
  EXPENSE_DELETE_REQUEST,
  EXPENSE_DELETE_SUCCESS,
  EXPENSE_DELETE_FAILURE,
  EXPENSE_UPDATE_REQUEST,
  EXPENSE_UPDATE_SUCCESS,
  EXPENSE_UPDATE_FAILURE
};

export default actionsTypes;
