const express = require("express");
const router = express.Router();
const is_user_login = require("../middleware/login_middleware")
const User = require("../model/schema/User");

router.get("/individual", (req, res) => {
  res.render("individual");
});

router.get("/offset", is_user_login.check_user_login, async (req, res) => {
  let user = await User.findOne({ 'email': req.session.re_usr_email, '_id': req.session.re_us_id });
  res.render("offset-option", { user: user, email: req.session.re_usr_email });
});

router.get("/user-dashboard", is_user_login.check_user_login, async (req, res) => {
  err_msg = 'err_msg';
  success_msg = 'success_msg';
  let user = await User.findOne({ 'email': req.session.re_usr_email, '_id': req.session.re_us_id });
  res.render("user-dashboard", { err_msg: err_msg, success_msg: success_msg, user: user, email: req.session.re_usr_email });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/calculate", (req, res) => {
  res.render("calculate");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/faq", (req, res) => {
  res.render("faq");
});

router.get("/", async (req, res) => {
  let user = await User.findOne({ 'email': req.session.re_usr_email, '_id': req.session.re_us_id });
  res.render("index", { user: user, email: req.session.re_usr_email });
});

module.exports = router;
