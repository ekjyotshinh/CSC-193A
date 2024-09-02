"use strict";
const express = require("express");
const app = express();

// Endpoint to hello.js
app.get("/hello", function (req, res) {
  res.type("text");
  res.send("Hello World!");
});

// Exercise 1: Splendid Circles
app.get("/math/circle/:r", function (req, res) {
  const r = req.params.r;
  const area = Math.PI * r * r;
  const circumference = Math.PI * 2 * r;
  res.type("text");
  res.send(`Area: ${area}, Circumference: ${circumference}`);
});

// define endpoint for exercise 2 here
// Use to test: http://localhost:8000/hello/name?firstName=Ekjyot&lastName=Shinh
app.get("/hello/name", function (req, res) {
  const firstName = req.query["firstName"];
  const lastName = req.query["lastName"];

  if (firstName && lastName) {
    res.type("text");
    res.send(`Hello ${req.query["firstName"]} ${req.query["lastName"]}`);
  }
  else{
    res.status(400).send("Missing Required GET parameters: first, last");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
module.exports = app;