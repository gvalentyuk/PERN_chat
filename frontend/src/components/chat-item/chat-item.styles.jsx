import styled from "styled-components";

export const ChatItemContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 4rem;
  background-color: ${(props) => (props.opened ? "#e8e3e3" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2.5rem;
    margin-left: 5px;
  }
`;

export const ChatItemInf = styled.div`
  width: 60%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 7px;

  h3 {
    width: 100%;
    text-align: left;
    font-family: Roboto;
    font-size: 1rem;
  }

  p {
    width: 100%;
    text-align: left;
    font-family: Poppins;
    font-size: 0.8em;
  }
`;

export const StatusContainer = styled.div`
  width: 7px;
  height: 7px;
  background-color: red;
  border-radius: 50%;
`;
