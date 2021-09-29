const express = require("express");
const app = express();

app.use(express.json());

// importing connect from config
const connect = require("./src/config/dbconfig");

// controllers
const smallCaseController = require("./src/controllers/landingPage.controller");
const allSmallcasesController = require("./src/controllers/allSmallcases.controller");
const smallcaseDetailController = require("./src/controllers/smallcaseDetail.controller");

app.use("/", smallCaseController);
app.use("/discover/all", allSmallcasesController);
app.use("/smallcase/", smallcaseDetailController);

// public 
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// collection page api
app.get("/discover/explore", async (req, res) => {
  res.render("collection");
})

// login page api
app.get("/login", async (req, res) => {
  res.render("login");
})

// signup page api
app.get("/signup", async (req, res) => {
  res.render("signup");
})

// orders page api
app.get("/orders", async (req, res) => {
  res.render("orders")
})

// server
app.listen(2930, async () => {
    await connect();
    console.log("listening to port 2930");
})