"use strict";

// fs.writeFile('./data/data.json', txt, function (err) {
//     if (err)
//         return console.log(err);
//     console.log('Hello World > helloworld.txt');
// });

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect("/login");
}




module.exports = function(app, passport) {

    //get requests
    app.get('/', function(req, res) {
      res.render("index.ejs");
    });
    app.get('/index.ejs', function(req, res) {
      res.render("index.ejs");
    });
    app.get('/services.ejs', function(req, res) {
      res.render("services.ejs");
    });
    app.get('/projects.ejs', function(req, res) {
      res.render("projects.ejs");
    });
    app.get('/contact.ejs', function(req, res) {
      res.render("contact.ejs");
    });


    // LOGIN =============================
    // show the login form
    app.get("/login", function(req, res) {
        res.render("login.ejs", {
            message: req.flash("loginMessage")
        });
    });
    app.get("/profile", isLoggedIn, function(req, res) {
      res.render("profile.ejs", {
          message: "you are logged in now"
      });
    });

    // process the login form
    app.post("/login", passport.authenticate("local-login", {
        successRedirect: "/profile", // redirect to the secure profile section
        failureRedirect: "/login", // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


    // SIGNUP ================================
    // show the signup form
    app.get("/signup", function(req, res) {
        res.render("signup.ejs", {
            message: req.flash("signupMessage")
        });
    });

    // process the signup form
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/profile", // redirect to the secure profile section
        failureRedirect: "/signup", // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


}
