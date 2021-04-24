
const express = require("express")
const router = express.Router()
const User = require("../model/schema/User");
const crypto = require('crypto');



router.get("/signup", function (req, res) {
    console.log("eee")

    //err_msg = req.flash('err_msg');
    //success_msg = req.flash('success_msg');
    const test = req.session.is_user_logged_in;
    //var test = false;
    console.log("test", test)
    if (test == true) {
        res.redirect('/');
    } else {
        res.render('user-signup')
    }
    //res.render('user-signup')



})

//request to store user data from registration page 
router.post('/signup', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name
    const code = req.body.country_code
    const phone = req.body.phone
    // var mykey = crypto.createCipher('aes-128-cbc', 'mypass');
    const iv = crypto.randomBytes(16)
    const mykey = crypto.createCipher('aes-128-cbc', 'key', iv)
    var mystr = mykey.update(password, 'utf8', 'hex')
    mystr += mykey.final('hex');

    console.log(req.body)
    console.log(mystr)

    User.findOne({ email: email }).then(user => {
        if (user != null && user != "" && user != undefined) {
            // req.flash('err_msg', 'This email already registerd.');
            res.redirect("/signup");
        } else {
            us = {
                name: name,
                email: email,
                country_code: code,
                phone: phone,
                password: mystr,
            }
            User.create(us, (err, us1) => {
                if (err) {
                    console.log(err);
                    res.redirect('/signup');
                } else {
                    console.log(us1)
                    res.redirect('/login');
                }
            })
        }


    })
    // db.close()


})

module.exports = router