const express = require("express");

const router = express.Router();

const fs = require("fs");

// require controllers

router.get("/example", (req, res) => {
  return res.render("example", {
    title: "EJS Example",
    message: "Hello Template",
  });
});

router.get("/main", (req, res) => {
  return res.render("main", {
    title: "EJS Example from Parts",
    message: "Hello Template built in parts",
    showMsg: true,
    headingOne: "Page made from parts",
  });
});

router.get("/search", (req, res) => {
  return res.render("search", {
    title: "Sample of Posting Data",
    msg: "Search the database",
  });
});

module.exports = router;
