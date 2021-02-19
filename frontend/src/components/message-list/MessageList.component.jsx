import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { MessageListContainer, ChatItem } from "./message-list.styles";

const MessageList = ({ messages }) => {
  const user = useSelector(selectCurrentUser);
  return (
    <MessageListContainer>
      {messages.reverse().map((message) => {
        return (
          <ChatItem
            owner={message.fromUserId === user.id ? true : false}
            key={message.id}
          >
            <p>{message.message}</p>
          </ChatItem>
        );
      })}
    </MessageListContainer>
  );
};

export default MessageList;
