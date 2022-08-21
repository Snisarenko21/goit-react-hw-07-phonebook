import PropTypes from 'prop-types';
import { ContactItem, ContactButton, ContactNumber } from './Contact.styled';
import { useContactActions } from 'hooks/useContactActions';

export const Contact = ({ options: { id, name, number } }) => {
  const { handleDelete, isLoading } = useContactActions(id, name);
  return (
    <ContactItem>
      <ContactNumber />
      <span>{name}:</span>
      <span>{number}</span>

      <ContactButton type="button" disabled={isLoading} onClick={handleDelete}>
        {' '}
        Delete
      </ContactButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  options: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
