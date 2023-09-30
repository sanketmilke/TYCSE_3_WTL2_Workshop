module.exports = app => {
    const books = require("../controllers/book.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", books.create);
  
    // Retrieve all Tutorials
    router.get("/", books.findAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", books.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", books.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", books.update);
    // Delete a Tutorial with id
    router.delete("/:id", books.delete);

  // Delete all Tutorials
  router.delete("/", books.deleteAll);

  app.use('/api/books', router);
};