const { asyncHandler } = require("../utils/asyncHandler");
const models = require("../models");
const User = models.User;
const Chat = models.Chat;
const ChatUser = models.ChatUser;
const Message = models.Message;
const { Op } = require("sequelize");
const { sequelize } = require("../models");

exports.index = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.user.id,
    },
    include: [
      {
        model: Chat,
        include: [
          {
            model: User,
            where: {
              [Op.not]: {
                id: req.user.id,
              },
            },
          },
          {
            model: Message,
            limit: 20,
            order: [["id", "DESC"]],
          },
        ],
      },
    ],
  });
  return res.status(200).json(user.Chats);
});

exports.create = asyncHandler(async (req, res, next) => {
  const { partnerId } = req.body;

  const t = await sequelize.transaction();

  const user = await User.findOne({
    where: {
      id: req.user.id,
    },
    include: [
      {
        model: Chat,
        where: {
          type: "dual",
        },
        include: [
          {
            model: ChatUser,
            where: {
              userId: partnerId,
            },
          },
        ],
      },
    ],
  });

  if (user && user.Chats.length > 0) {
    return res.status(403).json({ message: "Chat already exist" });
  }

  const chat = await Chat.create({ type: "dual" }, { transaction: t });

  await ChatUser.bulkCreate(
    [
      {
        chatId: chat.id,
        userId: req.user.id,
      },
      {
        chatId: chat.id,
        userId: partnerId,
      },
    ],
    { transaction: t }
  );

  await t.commit();

  const newChat = await Chat.findOne({
    where: {
      id: chat.id,
    },
    include: [
      {
        model: User,
        where: {
          [Op.not]: {
            id: req.user.id,
          },
        },
      },
      {
        model: Message,
      },
    ],
  });

  return res.status(200).json(newChat);
});

exports.messages = asyncHandler(async (req, res, next) => {
  const limit = 20;
  const page = req.query.page || 1;
  const offset = page > 1 ? page * limit : 0;

  const messages = await Message.findAndCountAll({
    where: {
      chatId: req.query.id,
    },
    limit,
    offset,
  });

  const totalPages = Math.ceil(messages.count / limit);

  if (page > totalPages) return res.json({ data: { messages: [] } });

  const result = {
    messages: messages.rows,
    pagination: {
      page,
      totalPages,
    },
  };

  return res.json(result);
});

exports.deleteChat = asyncHandler(async (req, res, next) => {
  const chatId = req.params.id;

  await Chat.destroy({
    where: {
      id: chatId,
    },
  });

  return res.json({ message: "Success" });
});
