import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchChatsAsyns} from "../../redux/chat/chat.actions";
import {selectChats} from "../../redux/chat/chat.selectors";

import ChatItem from "../chat-item/ChatItem.component";
import {ChatListContainer} from "./chat-list.styles";

const ChatList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(selectChats);

    useEffect(() => {
        dispatch(fetchChatsAsyns());
    }, [dispatch]);

    return (
        <ChatListContainer>
            {chats.map((chat) => {
                return (
                    <ChatItem
                        key={chat.id}
                        id={chat.id}
                        Users={chat.Users}
                        Messages={chat.Messages}
                    />
                );
            })}
        </ChatListContainer>
    );
};

export default ChatList;
