const mongoose = require("mongoose");

const FetchLectures = mongoose.Schema (
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
    },
  },
  {
    timestamps: true,
  }
);

const FetchLecMessage = mongoose.model( "messg4lectures", FetchLectures )
module.exports = { FetchLecMessage };