import { PageContainer } from "../page-styles";
import { ChatElementsContainer } from "./chat-page.styles";
import Header from "../../components/header/Header.component";
import Messenger from "../../components/messenger/Messanger.component";
import ChatList from "../../components/chat-list/ChatList.component";

const ChatPage = () => {
  return (
    <PageContainer>
      <Header />
      <ChatElementsContainer>
        <ChatList />
        <Messenger />
      </ChatElementsContainer>
    </PageContainer>
  );
};

export default ChatPage;
