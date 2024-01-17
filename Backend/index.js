const express = require("express");
const cors = require("cors");

require("./db/db.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const User = require("./db/User.js");
const Form = require("./db/formData.js");

//routs
app.post("/login", async (req, res) => {
  try {
    const isExist = await User.findOne({ email: req.body.email });
    // console.log(isExist)
    if (isExist) {
      if (req.body.password === isExist.password) {
        res.send({
          status: true,
          message: "Login Successful",
        });
      } else {
        res.send({
          status: false,
          message: "incorrect Password",
        });
      }
    } else {
      res.send({
        message: "User not found , please register before loging in",
      });
    }
  } catch (error) {
    res.send({ message: error });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const isExist = await User.findOne({ email: req.body.email });
    console.log(isExist);
    if (isExist) {
      res.send({
        message: "Already Exists",
      });
    }
    const USERDATA = await new User(req.body);
    const RESULT = await USERDATA.save();
    res.send({
      message: "success",
      user: RESULT,
    });
  } catch (error) {
    res.send({ message: error });
  }
});

app.post("/formSubmition", async (req, res) => {
  try {
    console.log(req.body);
    const formData = await new Form(req.body);
    const DATA = await formData.save();
    // console.log(DATA)
    res.send({
      status: true,
      message: "We have got your response",
      data: DATA,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "something went wrong",
    });
  }
});

app.get("/getFormData", async (req, res) => {
  let CONTACTS = await Form.find();
  res.send({
    CONTACTS,
  });
});
app.get("/getOneData/:id", async (req, res) => {
  let CONTACTS = await Form.findOne({ _id: req.params.id });
  res.send({
    CONTACTS,
  });
});

app.delete("/removeData/:id", async (req, res) => {
  const DELETE_USER = await Form.deleteOne({ _id: req.params.id });
  res.send({
    DELETE_USER,
  });
});

app.put("/editData/:id", async (req, res) => {
  const UPDATE_USER = await Form.updateOne(
    { _id: req.params.id },
    {
      $set: req.body
    }
    );
  res.send({
    UPDATE_USER,
  });
});

app.listen(80);
