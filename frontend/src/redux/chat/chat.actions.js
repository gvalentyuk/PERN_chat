import chatTypes from "./chat.types";

// Set current chat

export const setCurrentChat = (chatId) => ({
  type: chatTypes.SET_CURRENT_CHAT,
  payload: chatId,
});

// Fetching chat
const startFetchChat = () => ({
  type: chatTypes.CHAT_FETCH_START,
});

const failureFetchChat = (error) => ({
  type: chatTypes.CHAT_FETCH_FAILURE,
  payload: error,
});

const successFetchChat = (chats) => ({
  type: chatTypes.CHAT_FETCH_SUCCESS,
  payload: chats,
});

export const fetchChatsAsyns = () => {
  return async (dispatch) => {
    dispatch(startFetchChat());
    await fetch("/api/chats", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          dispatch(failureFetchChat(res.msg));
        } else {
          dispatch(successFetchChat(res));
        }
      });
  };
};
