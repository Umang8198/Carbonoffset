
const express = require("express")
const router = express.Router()
const User = require("../model/schema/User");
const session = require('express-session');
const bodyParser = require('body-parser');

var crypto = require('crypto');

//login routes
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.use(session({
    secret: 'userdetails',
    resave: false,
    saveUninitialized: true
}));

router.get("/login", function (req, res) {
    console.log("get login")
    //err_msg = req.flash('err_msg');
    // success_msg = req.flash('success_msg');
    var test = req.session.is_user_logged_in;
    if (test != undefined || test === true) {
        res.redirect('/');
    } else {
        console.log("dkjhasadk")
        res.render('user-login')
    }
})

//request to store user data from registration page 
router.post('/login', async function (req, res) {
    console.log(req.session)
    console.log("login post")
    const password = req.body.password;

    const iv = crypto.randomBytes(16)
    const mykey = crypto.createCipher('aes-128-cbc', 'key', iv)
    var mystr = mykey.update(password, 'utf8', 'hex')
    mystr += mykey.final('hex');
    //console.log(mystr)
    let user = await User.findOne({ 'email': req.body.email, 'password': mystr });

    //console.log("result", user);
    if (user == null) {
        console.log("user nahi mila");
        //req.flash('err_msg', 'Please enter valid Email address.');
        res.redirect('/login')
    } else {
        console.log(user.username)
        req.session.success = true;
        req.session.is_user_logged_in = true;
        req.session.re_us_id = user._id;
        req.session.re_usr_email = user.email;
        req.session.name = user.name;
        console.log(user);
        console.log(req.session)
        res.redirect('/')
    }

})

router.get("/logout", function (req, res) {


    req.session.destroy(function (err) {

        console.log("in_logout")
    });

    //req.flash('success_logout', 'You have logged out successfully.');

    res.redirect('/login');
    //res.render('user-login')
})

module.exports = router