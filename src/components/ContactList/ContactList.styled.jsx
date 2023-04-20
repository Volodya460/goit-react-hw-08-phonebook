import styled from '@emotion/styled';

export const LiList = styled.li`
  display: flex;
  align-items: center;
`;

export const ButtonContacts = styled.button`
  margin-left: 10px;
  border-radius: 10px;
  font-size: var(--normal-font-size);
  font-family: var(--body-font);

  :hover {
    border: 2px solid #2f4f4f;
  }
`;
export const UlContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
