import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInf } from 'redux/contactSlice';
import { addUser, fetchContacts } from 'redux/operations';

import ContactForm from 'components/Form/Form';
import Filter from 'components/FilterContacts/Filter';
import CreatContactList from 'components/ContactList/CreatContactList';
import { BoxContact, BoxContactH2, Section } from 'components/App.styled';
import { useEffect } from 'react';
import authSelectord from 'redux/auth/authSelectors';

export default function PageUser() {
  const state = useSelector(getUserInf);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectord.getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchContacts());
  }, [isLoggedIn, dispatch]);

  function hendleSubmit(values, { resetForm }) {
    const contact = {
      id: nanoid(),
      ...values,
    };
    const isAdded = checkContactIsAdded(contact);

    if (isAdded) {
      resetForm();
      return toast(`${contact.name} is already in contacts`);
    } else {
      dispatch(addUser({ id: nanoid(), ...values }));

      resetForm();
    }
  }

  function checkContactIsAdded({ name }) {
    const normalizedContactName = name.toLowerCase();

    return state.find(
      ({ name }) => name.toLowerCase() === normalizedContactName
    );
  }
  return (
    <Section>
      <ContactForm hendleSubmit={hendleSubmit} />
      {/* {isLoading && !error && <Loader />} */}
      <BoxContact>
        <BoxContactH2>Contacts</BoxContactH2>
        <Filter />
        <CreatContactList />
      </BoxContact>

      <ToastContainer />
    </Section>
  );
}
