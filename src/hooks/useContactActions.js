import { useDeleteContactMutation } from 'redux/contactSlice';

export const useContactActions = id => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeletePromised = async () => {
    try {
      const data = await deleteContact(id);
      const innerError = await data.error;
      if (!innerError) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    } catch (error) {
      return Promise.reject();
    }
  };

  const handleDelete = () => {
    handleDeletePromised();
  };
  return { handleDelete, isLoading };
};
