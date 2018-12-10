const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  res.render("form", {
    pageTitle: "New User",
    path: "/"
  });
});

router.post("/users", (req, res, next) => {
  users.push({ name: req.body.name });
  res.redirect("/users");
});

exports.routes = router;
exports.users = users;