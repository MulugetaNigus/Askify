const RegModel = require("../models/RegisterLecture");
const { SendMssg } = require("../models/SendMessg");
const { FetchLecMessage } = require("../models/getMessages");

// register a new lecture
const registerLecture = async (req, res) => {
  try {
    const { username, email, password, Skill } = req.body;
    if (!username || !email || !password || !Skill) {
      return res.status(400).send({ message: "all fileds are required !" });
    }

    // if everything works fine add the data to our db
    const addLectures = await RegModel.create(req.body);
    if (!addLectures) {
      return res.status(400).send({ message: "ca not add the lectures !" });
    }
    return res.status(200).json({
      message: "registraion complated !",
      addLectures,
    });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "error occured due to: " + error.message });
  }
};

// login sys
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // first get the user email
    const getEmail = await RegModel.findOne({ username });
    if (getEmail.username === username) {
      if (getEmail.password === password) {
        return res.status(200).send({ message: true });
      } else {
        return res.status(400).send({ message: "invalied password !" });
      }
    } else {
      return res.status(400).send({ message: "user not found !" });
    }
  } catch (error) {
    return res.status(400).send({ message: "can not login !" });
  }
};

// to send a message to a specific user
const sendMessage = async (req, res) => {
  try {
    // extract those values from our request
    const { lecture, message, user } = req.body;
    // check weather the values set or not
    if (!lecture || !message || !user) {
      return res.status(400).send({ message: "all fields are required !" });
    }
    // if everything works fine send the message
    const sendMessage = await SendMssg.create(req.body);
    if (!sendMessage) {
      return res.status(400).send({ message: "ca not send the message !" });
    }
    return res.status(200).json({
      message: "message sented !",
      sendMessage,
    });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "can not send the message , " + error.message });
  }
};

// retrive a message
const getMessage = async (req, res) => {
  // const { name, availableTime, Skill } = req.body;
  try {
    const getLec = await FetchLecMessage.find({}).sort({ createdAt: -1 });
    if (!getLec) {
      return res
        .status(400)
        .send({ message: "message not found in current user !" });
    }
    return res.status(200).json(getLec);
  } catch (error) {
    return res
      .status(400)
      .send({ message: "message not found in current user !" });
  }
};

// export the controllers
module.exports = {
  registerLecture,
  login,
  sendMessage,
  getMessage,
};
