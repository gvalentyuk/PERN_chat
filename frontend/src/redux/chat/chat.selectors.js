import { createSelector } from "reselect";

const selectChat = (state) => state.chat;

export const selectChats = createSelector(selectChat, (chat) => chat.chats);

export const selectSelectedChatId = createSelector(
  selectChat,
  (chat) => chat.currentChatId
);

export const selectSelectedChat = createSelector(selectChat, (chat) =>
  chat.chats.find((c) => chat.currentChatId === c.id)
);
