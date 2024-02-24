const express = require("express");
const postRouter = express.Router();
const UserModel = require("../models/Users");
const EmployeeModel = require("../models/Employee");

postRouter.get("/getUsers", async (req, res) => {
  try {
    const result = await UserModel.find();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

postRouter.post("/ceateUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(newUser);
});
postRouter.post("/register", async (req, res) => {
  const employ = req.body;
  const newEmploy = new EmployeeModel(employ);
  await newEmploy.save();

  res.json(newEmploy);
});
postRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
        
      }
    } else {
      res.json("No record existed");
    }
  });
});
postRouter.get("/login", async (req, res) => {
  try {
    const result = await EmployeeModel.find();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

postRouter.get("/register", async (req, res) => {
  try {
    const result = await EmployeeModel.find();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});
postRouter.patch("/update/:id", async (req, res) => {
  {
    const id = req.params.id;
    const post = req.body;
    const updatepost = await UserModel.findByIdAndUpdate(id, post, {
      new: true,
    });

    res.json(updatepost);
  }
});
postRouter.delete("/delete/:id", async (req, res) => {
  {
    const id = req.params.id;
    const deletepost = await UserModel.findByIdAndDelete(id);

    res.json(deletepost);
  }
});

module.exports = postRouter;
