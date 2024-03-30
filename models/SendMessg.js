const mongoose = require("mongoose");

// create our model
const SendMessageModel = mongoose.Schema(
  {
    lecture: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// create and export the model
const SendMssg = mongoose.model("messg4students" , SendMessageModel)
module.exports = { SendMssg };
