import Axios from "axios";

const BASE_URL = "http://localhost:2000/";

const instance = Axios.create({
  baseURL: BASE_URL,
});

export const contactsAPI = {
  getContacts() {
    return instance.get(`contacts`).then((resp) => resp.data);
  },
  addContact(name, number) {
    return instance
      .post(`contacts`, { name, number })
      .then((resp) => resp.data);
  },
  deleteContact(id) {
    return instance.delete(`contacts/${id}`).then((resp) => resp);
  },
};
