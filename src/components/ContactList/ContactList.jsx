import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { ListContact } from '../ContactList/styled';

export const ContactList = ({ filterContacts, onDelete }) => {
    return (
        <ListContact>
        {filterContacts().map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            id={id}
            number={number}
            onDelete={onDelete}
          />))}
        </ListContact>
    )
}

ContactList.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};