const express = require("express");

const router = express.Router();

// require controllers

const myControllers = require("../controllers/controllers.js");

var dogData = myControllers.getDogs();

// using a Promise
// var staffDataPromise = myControllers.getStaff();
// var staffData = [];
// staffDataPromise.then(function(data) {
//     staffData = data;
//   });

// using async/await
var staffData = [];
var staffDataPromise = async () => {
  staffData = await myControllers.getStaff();
};
staffDataPromise();
// console.dir(staffData);

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

// dogs route

// router.get("/dogs", (req, res) => {
//   return res.render("dogs-loop", {
//     title: "Looping Data with EJS",
//     dogs: dogData,
//   });
// });

// staff route

router.get("/staff", (req, res) => {
  return res.render("staff-loop", {
    title: "Staff Data",
    staffList: staffData,
  });
});

module.exports = router;
