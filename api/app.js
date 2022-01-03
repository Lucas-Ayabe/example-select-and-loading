const express = require("express");

function cors(_, response, next) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  next();
}

function app(port, configure) {
  const application = express();
  application.use(cors);
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());

  configure(application);

  application.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;
