import styled from 'styled-components'

export const GroupContainer = styled.div`
  position: relative;
  padding: 10px;
`;

export const FormInputContainer = styled.input`
  background-color: #e0e0e0;
  font-size: 18px;
  display: block;
  width: 100%;
  height: 40px;
  padding: 15px;
  border: none;
  outline: none;

  &[type='password'] {
    letter-spacing: 3px;
  }

  &[type='password']::placeholder {
    letter-spacing: normal;
  }
`;
