const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const form = require("./routes/form");
const users = require("./routes/users");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(form.routes);
app.use(users);


app.use((req, res, next) => {
    res.status(404).render("404", {pageTitle: "Page not found."})
});

app.listen(3000);