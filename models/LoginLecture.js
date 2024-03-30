const mongoose = require("mongoose");

const RegisterModel = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RegModel = mongoose.model("lectureLogin", RegisterModel);
module.exports = RegModel;
