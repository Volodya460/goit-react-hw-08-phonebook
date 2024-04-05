import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { FormDesk, LableForm, ButtonForm, FieldForm } from './form.styled';

const initialValues = {
  name: '',
  number: '',
};
const schema = yup.object().shape({
  name: yup.string().required(),
  // number: yup.number().required().integer(),
});

export default function ContactForm({ hendleSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hendleSubmit}
      validationSchema={schema}
    >
      <FormDesk>
        <LableForm>
          Name
          <FieldForm
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LableForm>
        <LableForm>
          Number
          <FieldForm
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LableForm>
        <ButtonForm type="submit">Add Contact</ButtonForm>
      </FormDesk>
    </Formik>
  );
}

ContactForm.propTypes = {
  hendleSubmit: PropTypes.func.isRequired,
};
