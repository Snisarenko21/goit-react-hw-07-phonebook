import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 4px solid rgb(94, 94, 155);
  padding: 15px;
`;
export const Label = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: rgb(94, 94, 155);
`;
export const Input = styled.input`
  width: 70%;
  margin-left: 20px;
  height: 28px;
  font-size: 14px;
  color: rgb(94, 94, 155);
  border: 2px solid rgb(118, 148, 9);
`;
export const Button = styled.button`
  margin-top: 44px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  padding: 5px;
  color: rgb(118, 148, 9);
  background-color: rgb(228, 228, 216);
  border: 3px solid darkslateblue;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(232, 235, 300);
    outline: none;
  }
`;
