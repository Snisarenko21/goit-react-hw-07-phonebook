import { useState } from 'react';
import { ToastContainer, toast } from 'react-toast'
import { nanoid } from 'nanoid';
import { SearchForm, Input, Button, Label } from './Form.styled';
import { addContact, getContacts } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputIdGenerate = nanoid();
  const numberInputIdGenerate = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`Contact ${name} is already exist`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
    toast.success(`Contact ${name} has been added`);
    setName('');
    setNumber('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Label>
        <label htmlFor={nameInputIdGenerate}>Name:</label>
      </Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        id={nameInputIdGenerate}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        
      />
      <Label>
        <label htmlFor={numberInputIdGenerate}>Number:</label>
      </Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        id={numberInputIdGenerate}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">
        <span>add contact</span>
      </Button>
      <ToastContainer />
    </SearchForm>
  );
}
