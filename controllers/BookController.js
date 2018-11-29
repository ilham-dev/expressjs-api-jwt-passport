var mongoose = require("mongoose");
var Book = require("../models/book");
var cektoken = require("../config/token");

var BookController = {};

// Show List View
BookController.list = function(req, res) {
    var token = cektoken(req.headers);
    if (token) {
        Book.find(function (err, books) {
          if (err) return next(err);
          res.json(books);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

BookController.add = function(req, res) {
    var token = cektoken(req.headers);
    if (token) {
      console.log(req.body);
      var newBook = new Book({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher
      });
  
      newBook.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Save book failed.'});
        }
        res.json({success: true, msg: 'Successful created new book.'});
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};



module.exports = BookController;