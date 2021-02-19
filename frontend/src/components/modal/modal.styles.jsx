import styled from 'styled-components';

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  
`;

export const ModalContainer = styled.div`
  margin-top: 10vh;
  width: 30%;
  height: 60vh;
  border-radius: 5px;
  background: white;
`;

export const ModalHeader = styled.div`
  height: 10vh;
  background: #5046b9;
  border-radius: 5px 5px 0 0;

  h3 {
    color: white;
    font-family: Roboto, sans-serif;
    padding-top: 15px;
    text-align: center;
    font-size: 1.8em;
  }
`

export const ModalForm = styled.div`
  display: flex;
  justify-content: center;

  form {
    margin-top: 15px;
    width: 85%;
  }
`

export const ModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

export const ButtonContainer = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 25%;
  height: 35px;
  border-radius: 5px;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: white;
  font-weight: 600;
  background: ${props => props.color};

  &:hover {
    filter: brightness(110%);
  }
`;
