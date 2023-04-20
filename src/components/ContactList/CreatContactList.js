import { IconButton } from '@mui/material';
import { LiList, UlContacts } from './ContactList.styled';
import { useDispatch } from 'react-redux';

import { DisplayedContacts } from 'redux/filterDisplay';

import { deleteUser } from 'redux/operations';

import DeleteIcon from '@mui/icons-material/Delete';

export default function CreatContactList() {
  const dispatch = useDispatch();
  const displayedContacts = DisplayedContacts();
  return (
    <UlContacts>
      {displayedContacts.map(arr => (
        <LiList key={arr.id}>
          {arr.name}:{arr.number || arr.phone}
          <IconButton
            type="button"
            onClick={() => dispatch(deleteUser(arr.id))}
          >
            <DeleteIcon />
          </IconButton>
        </LiList>
      ))}
    </UlContacts>
  );
}
