import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormDesk = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid black;
  padding: 20px;
  width: 400px;
  height: 200px;
`;

export const LableForm = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ButtonForm = styled.button`
  padding: 10px 20px;

  border: 2px solid #000;
  background-color: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
  font-size: var(--normal-font-size);
  font-family: var(--body-font);

  :hover {
    border: 2px solid #2f4f4f;
  }
`;

export const FieldForm = styled(Field)`
  border-radius: 5px;
`;
