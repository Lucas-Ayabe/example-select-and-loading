const application = require("./app");
const { findById: findGameById } = require("./model");

application(3000, (app) => {
  app.post("/", (request, response) => {
    response.json({ game: findGameById(request.body.id) });
  });
});
