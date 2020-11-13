import { createSelector } from "reselect";

export const getErrorState = (state) => {
  return state.phoneBook.showError;
};

export const getContacts = (state) => {
  return state.phoneBook.contacts;
};

export const getVisibilityFilter = (state) => {
  return state.phoneBook.filter;
};

export const getFilteredContacts = createSelector(
  [getContacts, getVisibilityFilter],
  (contacts, visibilityFilter) => ({
    contacts: contacts.filter((contact) =>
      contact.name.toLowerCase().includes(visibilityFilter.toLowerCase())
    ),
  })
);

export const getContactById = (state, id) => {
  const contact = getContacts(state).find((contact) => contact.id === id);
  return { ...contact };
};
