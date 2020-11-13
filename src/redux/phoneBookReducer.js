import { v4 as uuidv4 } from "uuid";

const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const CHANGE_FILTER = "CHANGE_FILTER";
const TOGGLE_ERROR = "TOGGLE_ERROR";

const initialState = {
  contacts: [],
  filter: "",
  showError: false,
  loading: false,
};

const phoneBookReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContact = {
        name: payload.contact.name,
        number: payload.contact.number,
        id: payload.contact.id,
      };
      if (
        state.contacts &&
        state.contacts.some((contact) => contact.name === payload.contact.name)
      ) {
        return {
          ...state,
          showError: !payload.showError,
        };
      } else {
        return {
          ...state,
          showError: payload.showError,
          contacts: [...state.contacts, newContact],
        };
      }

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

    default:
      return state;
  }
};

export const addContact = (name, number) => {
  return {
    type: ADD_CONTACT,
    payload: {
      contact: { name, number, id: uuidv4() },
      showError: false,
    },
  };
};

export const deleteContact = (id) => {
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

export default phoneBookReducers;
