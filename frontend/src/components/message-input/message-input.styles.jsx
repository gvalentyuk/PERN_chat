import styled from 'styled-components';

export const MessageInputContainer = styled.div`
  border-top: 1px solid;
  margin-top: 1rem;
  width: 100%;
  height: 3rem;
  border-top: 2px solid #e8e3e3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    border: none;
    outline: none;
    width: 100%;
    margin-top: 0.4rem;
    padding-left: 1rem;
    font-family: Poppins, sans-serif;
  }

  i {
    margin: 0 1rem 0 1rem;
    font-size: 1.2rem;
    color: #5046b9;
    cursor: pointer;
  }
`;
