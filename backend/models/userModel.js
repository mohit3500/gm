const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 5,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    email: {
      type: String,
      required: true,
      min: 5,
      unique: true,
    },
    firstname: { type: String, min: 2, required: true },
    lastname: { type: String, min: 2, required: true },
    pic: {
      type: String,
      default:
        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
