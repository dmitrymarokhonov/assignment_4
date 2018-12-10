const path = require("path");
const express = require("express");
const router = express.Router();
const usersData = require("./form");

router.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "Users",
    users: usersData.users,
    path: "/users"
  });
});



module.exports = router;
