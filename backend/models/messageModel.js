const { default: mongoose } = require('mongoose');

const messageSchema = mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    msg: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
