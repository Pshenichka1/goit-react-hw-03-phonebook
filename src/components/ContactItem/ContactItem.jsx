import PropTypes from 'prop-types';
import { Item, ButtonDel } from '../ContactItem/styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
    return (
            <Item key={id}>
                <span>{name}:</span>
                <span>{number}</span>
                <ButtonDel type='button' onClick={() => onDelete(id)}>Delete</ButtonDel>
            </Item>
    )

}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};