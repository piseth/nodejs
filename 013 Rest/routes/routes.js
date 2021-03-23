module.exports = (app) => {
  //Call Controller
  const customers = require("../controllers/customers.js");

  //Call Validator
  const {_user} = require("../requests/_user.js");

  // Customer API
  app.get("/customers", customers.findAll);
  app.get("/customers/:id", customers.findOne);
  app.post("/customers", _user, customers.create);
  app.put("/customers/:id", customers.update);
  app.delete("/customers/:id", customers.delete);
  app.delete("/customers", customers.deleteAll);

  //Other
};
