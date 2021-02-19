import styled from "styled-components";

export const MessageListContainer = styled.div`
  width: 100%;
  height: 53vh;
  display: flex;
  flex-direction: column-reverse;
`;

export const ChatItem = styled.div`
  display: flex;
  padding: 0 5px;
  justify-content: ${(props) => (props.owner ? "flex-end" : "flex-start")};
  margin: 0.6rem 1rem 0 1rem;

  p {
    word-wrap: break-word;
    word-break: break-word;
    font-family: Poppins;
    font-size: 1rem;
    padding: 0.4em;
    background-color: ${(props) => (props.owner ? "#5046b9" : "#f5f6f8")};
    color: ${(props) => (props.owner ? "white" : "black")};
    border-radius: 0.7em;
  }
`;
