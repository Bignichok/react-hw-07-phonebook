import { contactsAPI } from "../api/api";

const FETCH_CONTACTS = "FETCH_CONTACTS";
const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const CHANGE_FILTER = "CHANGE_FILTER";
const TOGGLE_ERROR = "TOGGLE_ERROR";
const TOGGLE_LOADING = "TOGGLE_LOADING";
const FETCH_FAILURE = "FETCH_FAILURE";
const initialState = {
  contacts: [],
  filter: "",
  showError: false,
  loading: false,
  error: {},
};

const phoneBookReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, ...payload.contacts],
      };

    case FETCH_FAILURE:
      return {
        ...state,
        error: payload.error,
      };

    case ADD_CONTACT:
      const newContact = {
        id: payload.contact.id,
        name: payload.contact.name,
        number: payload.contact.number,
      };
      return {
        ...state,
        contacts: [...state.contacts, newContact],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload.id),
      };

    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload.filter,
      };

    case TOGGLE_ERROR:
      return {
        ...state,
        showError: payload.showError,
      };

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };

    default:
      return state;
  }
};

const fetchContactsSuccess = (contacts) => {
  return {
    type: FETCH_CONTACTS,
    payload: {
      contacts,
    },
  };
};

const failureRequest = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: {
      error,
    },
  };
};

const addContactSuccess = ({ id, name, number }) => {
  return {
    type: ADD_CONTACT,
    payload: {
      contact: { id, name, number },
      showError: false,
    },
  };
};

const deleteContactSuccess = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: {
      id,
    },
  };
};

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: {
      filter,
    },
  };
};

export const toggleError = (showError) => {
  return {
    type: TOGGLE_ERROR,
    payload: {
      showError,
    },
  };
};

const toggleLoading = (loading) => ({
  type: TOGGLE_LOADING,
  payload: {
    loading,
  },
});

export const fetchContacts = () => (dispatch) => {
  dispatch(toggleLoading(true));
  contactsAPI
    .getContacts()
    .then((data) => {
      dispatch(fetchContactsSuccess(data));
      dispatch(toggleLoading(false));
    })
    .catch((error) => dispatch(failureRequest(error)));
};

export const addContact = (name, number) => (dispatch) => {
  dispatch(toggleLoading(true));
  contactsAPI
    .addContact(name, number)
    .then((data) => {
      dispatch(addContactSuccess(data));
      dispatch(toggleLoading(false));
    })
    .catch((error) => dispatch(failureRequest(error)));
};

export const deleteContact = (id) => (dispatch) => {
  contactsAPI
    .deleteContact(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(failureRequest(error)));
};

export default phoneBookReducers;
