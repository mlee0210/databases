var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (response) {            // a function which produces all the messages
      connection.query('SELECT * FROM messages', (err,result) => {  // results will contain the results of the query
        if (err) {
          throw (err);
        } else {
          response.send({results: [{text_messages: result}]});
        }
      });
    
    }, 
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

