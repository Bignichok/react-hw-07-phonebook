import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { getContacts, getErrorState } from "./redux/phoneBookSelectors";
import { fetchContacts } from "./redux/phoneBookReducer";

import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import Error from "./components/Error/Error.jsx";

import fadeStyles from "./css/fade.module.css";
import errorFadeStyles from "./css/errorFadeStyles.module.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { showError, contacts, filter } = this.props;

    return (
      <div className="App">
        <CSSTransition
          in={showError}
          timeout={250}
          classNames={errorFadeStyles}
          unmountOnExit
        >
          <Error />
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={400}
          classNames={fadeStyles}
          unmountOnExit
        >
          <h1 className="main-title">PhoneBook</h1>
        </CSSTransition>
        <ContactForm />

        <CSSTransition
          in={contacts && contacts.length > 0}
          appear={true}
          timeout={400}
          classNames={fadeStyles}
          unmountOnExit
        >
          <section>
            <h2>Contacts</h2>

            <CSSTransition
              in={contacts && contacts.length > 1}
              appear={true}
              timeout={400}
              classNames={fadeStyles}
              unmountOnExit
            >
              <Filter value={filter} />
            </CSSTransition>

            <CSSTransition
              in={contacts.length === 0}
              appear={true}
              timeout={400}
              classNames={fadeStyles}
              unmountOnExit
            >
              <p>no results were found for your search</p>
            </CSSTransition>

            <ContactList contacts={contacts} />
          </section>
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  showError: getErrorState(state),
});

const mapDispatchToProps = {
  onFetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
