import { useSelector, useDispatch } from "react-redux";

import { setCurrentChat } from "../../redux/chat/chat.actions";
import { selectSelectedChatId } from "../../redux/chat/chat.selectors";
import {
  ChatItemContainer,
  ChatItemInf,
  StatusContainer,
} from "./chat-item.styles";

const ChatItem = ({ Users, id, Messages }) => {
  const dispatch = useDispatch();
  const selectedChatId = useSelector(selectSelectedChatId);

  const selectChat = () => {
    dispatch(setCurrentChat(id));
  };
  return (
    <ChatItemContainer
      onClick={selectChat}
      opened={selectedChatId === id ? true : false}
    >
      <img src="/images/male.svg" alt="avatar" />

      <ChatItemInf>
        <h3>
          {Users[0].firstName} {Users[0].lastName}
        </h3>
        {Messages.length > 0 ? <p>{Messages[Messages.length - 1].message}</p> : ""}
      </ChatItemInf>
      <StatusContainer />
    </ChatItemContainer>
  );
};

export default ChatItem;
