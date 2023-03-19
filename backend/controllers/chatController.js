const Chat = require('../models/chatModel');

exports.createChat = async (req, res) => {
  const newChat = new Chat({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const response = await newChat.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.userChats = async (req, res) => {
  try {
    const chat = await Chat.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).send(chat);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.findChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(201).send(chat);
  } catch (error) {
    res.status(400).send(error);
  }
};
