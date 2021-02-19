import {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {MessageInputContainer} from './message-input.styles';
import {selectCurrentUser} from "../../redux/user/user.selectors";
import useSocket from "../../hooks/useSocket";

const MessageInput = ({chat}) => {
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser)
    const [message, setMessage] = useState('');
    useSocket(user, dispatch)
    const handleInput = e => {
        setMessage(e.target.value)
    }
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            sendMessage(e)
        }
    }
    const sendMessage = () => {
        if (!message) return;

        const msg = {
            type: 'text',
            fromUserId: user.id,
            toUserId: chat.Users[0].id,
            chatId: chat.chatId,
            message
        }
        setMessage('')
    }
    return (
        <MessageInputContainer>
            <input type="text" placeholder={'Type something...'} value={message} onChange={handleInput}
                   onKeyDown={handleKeyDown}/>
            <i className="far fa-arrow-alt-circle-right" onClick={sendMessage}/>
        </MessageInputContainer>
    )
}

export default MessageInput;
