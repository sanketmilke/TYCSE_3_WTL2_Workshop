const sql = require("./db.js");
// constructor
const Book = function(book) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};

//creating book
Book.create = (newBook, result) => {
    sql.query("INSERT INTO books SET ?", newBook, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created book: ", { id: res.insertId, ...newBook });
      result(null, { id: res.insertId, ...newBook });
    });
  };

  Book.findById = (id, result) => {
    sql.query(`SELECT * FROM books WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found book: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Book with the id
    result({ kind: "not_found" }, null);
    });
};

Book.getAll = (title, result) => {
    let query = "SELECT * FROM books";
  
    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("books: ", res);
      result(null, res);
    });
  };

  //Remove book of the given id
  Book.remove = (id, result) => {
    sql.query("DELETE FROM books WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found book with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted book with id: ", id);
      result(null, res);
    });
  };
//Remove all the books
Book.removeAll = result => {
    sql.query("DELETE FROM books", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} books`);
      result(null, res);
    });
  };
  
module.exports=Book


