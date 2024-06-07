const express = require("express");
const router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { upload, uploadProfile } = require("./multer");

// Configure Passport Local Strategy
passport.use(new localStrategy(userModel.authenticate()));

router.get("/", (req, res) => {
  res.render("home");
});

/* GET home page. */
router.get("/", function (req, res, next) {
  const successMsg = req.flash("success");
  const errorMsg = req.flash("error");
  res.render("index", {
    title: "Express",
    success: successMsg,
    error: errorMsg,
  });
});

router.get("/feed", function (req, res, next) {
  res.render("feed");
});

router.post(
  "/upload",
  isLoggedIn,
  upload.single("file"),
  async function (req, res, next) {
    if (!req.file) {
      return res.status(400).send("No files were uploaded");
    }

    const user = await userModel.findOne({
      username: req.session.passport.user,
    });

    const postData = await postModel.create({
      image: req.file.filename,
      imgText: req.body.imgcaption,
      user: user._id,
    });
    user.posts.push(postData._id);
    await user.save();
    console.log(postData);
    res.redirect("/profile");
  }
);

// for upload profile image
router.post(
  "/uploadProfile",
  isLoggedIn,
  uploadProfile.single("profile_img"), // Use uploadProfile middleware
  async function (req, res, next) {
    if (!req.file) {
      return res.status(400).send("No profile image was uploaded");
    }

    const user = await userModel.findOne({
      username: req.session.passport.user,
    });

    user.dp = req.file.filename;
    await user.save();
    console.log(user);
    res.redirect("/profile");
  }
);

/* GET profile page. */
router.get("/profile", isLoggedIn, async function (req, res, next) {
  // Access the authenticated user from the session using req.user
  const user = await userModel
    .findOne({
      username: req.session.passport.user,
    })
    .populate("posts");

  // Get the success flash message, if any
  const successMsg = req.flash("success");

  // Render the profile page with user data and success message
  res.render("profile", { user: user, success: successMsg });
});

/* POST register user. */
router.post("/register", async function (req, res, next) {
  const { username, email, fullname, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      req.flash("error", "User already exists");
      return res.redirect("/register");
    }

    // Create new user
    const userdata = new userModel({ username, email, fullname });
    await userModel.register(userdata, password);

    // Authenticate and redirect with success message
    passport.authenticate("local")(req, res, function () {
      req.flash("success", "Registered successfully");
      res.redirect("/register");
    });
  } catch (error) {
    next(error);
  }
});

/* GET register page */
router.get("/register", function (req, res, next) {
  const successMsg = req.flash("success");
  const errorMsg = req.flash("error");
  res.render("register", { success: successMsg, error: errorMsg });
});

router.get("/login", function (req, res, next) {
  const errorMsg = req.flash("error");
  const logoutMsg = req.flash("success"); // Modified to get the success flash message
  console.log(logoutMsg);
  res.render("login", { error: errorMsg, logoutMsg: logoutMsg }); // Passed the logoutMsg to the login template
});

router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("error", "Invalid username or password.");
      return res.redirect("/login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      req.flash("success", "Login successful!");
      return res.redirect("/profile");
    });
  })(req, res, next);
});

/* POST logout user. */
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "Successfully logged out"); // Added flash message for successful logout
    res.redirect("/login");
  });
});

/* Middleware to check if user is authenticated. */
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

module.exports = router;
