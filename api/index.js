const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const users = require("./users");

app.use(cors());
app.use(express.json());

app.use((request, response, next) => {
  if (
    request.headers?.accesstoken &&
    request.headers?.accesstoken === "Sinan"
  ) {
    next();
  } else {
    response.status(500).json({ message: "yetkisiz" });
  }
});

app.get("/users", (request, response) => {
  response.json(users);
});

app.post("/users", (request, response) => {
  console.log(request.body);
  response.json({ message: "success" });
});

app.listen(port, () => {
  console.log(`Example app listening on  ${port}`);
});
