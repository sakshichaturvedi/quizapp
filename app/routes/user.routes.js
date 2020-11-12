module.exports = app => {
   const users = require("../controllers/user.controller.js");
   
  
    app.post("/user", users.create);
  
    // Retrieve all Customers
    app.get("/user", users.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/user/:userId", users.findOne);
  
    // Update a Customer with customerId
    app.put("/user/:userId", users.update);
  
    // Delete a Customer with customerId
    app.delete("/user/:userId", users.delete);
  
    // Create a new Customer
    app.delete("/user", users.deleteAll);
  };