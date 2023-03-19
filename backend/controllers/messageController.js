const Message = require('../models/messageModel');

exports.addMessage = async (req, res) => {
  const { chatId, senderId, msg } = req.body;

  const newMessage = new Message({
    chatId,
    senderId,
    msg,
  });

  try {
    const response = await newMessage.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMessage = async (req, res) => {
  const { chatId } = req.params;

  try {
    const response = await Message.find({ chatId });
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
