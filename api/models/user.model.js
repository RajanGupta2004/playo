import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    image: {
      type: String, // URL to the user's profile image
      // required: true,
    },

    skill: {
      type: String,
    },

    otp: {
      type: String,
    },

    noOfGames: {
      type: Number,
      default: 0,
    },
    playpals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming playpals are other users
      },
    ],
    sports: [
      {
        type: String, // Array of sports the user plays
      },
    ],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

export default User;
