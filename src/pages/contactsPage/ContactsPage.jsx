import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/contact-list/ContactList";
import { selectContacts, selectIsLoading, selectIsError } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
import ContactForm from "../../components/contact-form/ContactForm";
import SearchBox from "../../components/search-box/SearchBox";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Your Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}