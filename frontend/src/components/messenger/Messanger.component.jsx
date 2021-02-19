import {useState} from "react";
import {useSelector} from "react-redux";

import MessageInput from "../message-input/MessageInput.component";
import MessageList from "../message-list/MessageList.component";
import {
    selectSelectedChatId,
    selectSelectedChat,
} from "../../redux/chat/chat.selectors.js";
import {
    MessangerContainer,
    ProfileOptions,
    MenuBtn,
} from "./messanger.styles";

const Messenger = () => {
    const [showOptions, setShowOptions] = useState(false);
    const chat = useSelector(selectSelectedChat);
    const selectedChatId = useSelector(selectSelectedChatId);
    const showOptionsHandler = () => {
        setShowOptions((prevState) => !prevState);
    };
    return (
        <MessangerContainer>
            {!selectedChatId ? (
                <h3>No active chat.</h3>
            ) : (
                <header>
                    <h4>
                        {chat.Users[0].firstName} {chat.Users[0].lastName}
                    </h4>
                    <div className="options">
                        <MenuBtn onClick={showOptionsHandler}>
                            <span/>
                            <span/>
                            <span/>
                        </MenuBtn>
                        {showOptions && (
                            <ProfileOptions>
                                <p>
                                    <i className="fas fa-user-plus"/>
                                    Add member
                                </p>
                                {!chat.type === "dual" && (
                                    <p>
                                        {" "}
                                        <i className="fas fa-sign-out-alt"/>
                                        Leave from chat
                                    </p>
                                )}
                                <p>
                                    <i className="far fa-trash-alt"/>
                                    Delete chat
                                </p>
                            </ProfileOptions>
                        )}
                    </div>
                </header>
            )}
            {selectedChatId && <MessageList messages={chat.Messages}/>}
            {selectedChatId && <MessageInput chat={chat}/>}
        </MessangerContainer>
    );
};

export default Messenger;
