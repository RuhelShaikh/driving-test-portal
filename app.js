// This code will import all the modules.
require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

// Importing all the route handlers.
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const { isAuthenticated } = require("./middleware/auth");

// Creating an instance of an Express application
const app = express();

// Set the view engine to EJS, which is used to render HTML pages.
app.set("view engine", "ejs");

// Setting the directory where the EJS views are located.
app.set("views", path.join(__dirname, "views"));

// This below code will serve static files (like CSS, JavaScript, images) from the 'public' directory.
app.use(express.static(path.join(__dirname, "public")));

// Using built-in middleware functions to parse URL-encoded data and JSON data
// This urlencoded parses is in the form of key-value pairs.
app.use(express.urlencoded({ extended: true }));

// Parses JSON request bodies. (req.body)
app.use(express.json());

// Setting up the session middleware.
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// Middleware to set global variables for EJS templates.
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isAuthenticated || false;
  res.locals.user = req.session.user || null;
  next();
});

// Using Routes that are imported on the top.
app.use(authRoutes);
app.use(isAuthenticated);
app.use(userRoutes);

// Connecting to MongoDB using Mongoose package which is installed already using (npm i mongoose).
mongoose
  .connect(URI)
  .then((result) =>
    app.listen(PORT, (req, res) => {
      // The Server will only start if the database is connected.
      console.log(
        `DB is connected & Server is running on http://localhost:${PORT}.`
      );
    })
  )
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

// Route for the home page.
app.get("/", (req, res) => {
  res.render("pages/home", {
    title: "Home",
    body: '<%- include("pages/home") %>',
  });
  // This above line will render the 'home' page from the 'pages' directory, passing in a title and including the 'home' page content and same thing for all the routes as well.
});
