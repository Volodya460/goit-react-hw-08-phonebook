import styled from '@emotion/styled';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 0 1.5rem;
  padding-bottom: 50px;

  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  background-color: #a9a9a9;
`;

export const FormContent = styled.form`
  display: grid;
  place-items: center;
  row-gap: 1.5rem;
  padding: 2rem;
  border-radius: 0.25rem;
  border: 2.5px solid #000;
`;

export const LoginH1 = styled.h1`
  display: grid;
  place-items: center;
  place-content: center;
`;

export const BoxLogin = styled.label`
  display: flex;
  flex-direction: column;
  width: 19.5rem;
  height: 3.75rem;
  position: relative;
`;

export const InputLogin = styled.input`
 
  border: 2.5px solid #000;
  background-color: #fff;
  border-radius: 0.25rem;

 
 
  
  }
`;

export const LableLogin = styled.label`
  font-size: 0.6rem;
  font-weight: 600;
  transition: 0.2s;
  pointer-events: none;

  border: 0;
  outline: none;
`;

export const ButtonLogin = styled.button`
  justify-self: center;
  border-radius: 0.25rem;
  :hover {
    border: 2px solid #2f4f4f;
  }
`;

export const SubmitLogin = styled.button`
  padding: 0.875rem 2.5rem;
  display: flex;
  align-items: center;
  border: 2.5px solid #000;
  background-color: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
  outline: none;
  font-size: var(--normal-font-size);
  font-family: var(--body-font);
  :hover {
    border: 2px solid red;
  }
`;
