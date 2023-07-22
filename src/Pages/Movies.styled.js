import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  gap: 5px;
  padding: 35px 50px;
`;
export const Input = styled.input`
  border-radius: 4px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover, 
  &:focus {
    outline: none;
    border: none;
  }
`;
export const Button = styled.button`
  padding: 4px;
  min-width: 50px;
  min-height: 32px;
  border-radius: 4px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(197, 219, 241);
  }
`;
