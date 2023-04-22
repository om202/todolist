const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();
const db = require("./models");
const Role = db.role;

const dbConfig = {
  PORT: 27017,
  HOST: "localhost",
  DB: "todo_db",
};

async function initial() {
  try {
    let count = await Role.find({}).count();
    if (count === 0) {
      new Role({ name: "user" }).save();
      new Role({ name: "moderator" }).save();
      new Role({ name: "admin" }).save();
    }
  } catch (error) {
    console.log(error);
  }
}

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "todo-session",
    secret: "COOKIE_SECRET",
    httpOnly: true,
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to todo application." });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
