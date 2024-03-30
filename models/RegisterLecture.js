const mongoose = require("mongoose");

const RegisterModel = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    Skill: {
      type: String,
      required: true,
      },
  },
  {
    timestamps: true,
  }
);

const RegModel = mongoose.model("lectureRegistration", RegisterModel);
module.exports = RegModel;
