import chatTypes from "./chat.types";

const INITIAL_STATE = {
  chats: [],
  currentChatId: null,
  currentChat: null,
  isLoading: false,
  error: null,
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chatTypes.CHAT_FETCH_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case chatTypes.CHAT_FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        chats: action.payload,
      };
    }
    case chatTypes.CHAT_FETCH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case chatTypes.SET_CURRENT_CHAT: {
      return {
        ...state,
        currentChatId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default chatReducer;
