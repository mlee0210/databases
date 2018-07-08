var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (callback) {            // a function which produces all the messages
      // console.log('inside models.messages.get');
      db.query('SELECT * FROM messages', (err, result) => {  // results will contain the results of the query
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    
    }, 
    post: function (messageData, callback) {
      db.query(`INSERT INTO messages(text, username, roomname) 
        VALUES('${messageData.message}', '${messageData.username}', '${messageData.roomname}')`, 
        (result) => {
          callback(null, result);
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM usernames', (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      })
    },
    post: function (messageData, callback) {
      db.query(`INSERT INTO usernames(username) VALUES('${messageData.username}')`,
      (result) => {
        callback(null, result);
      });
    }
  }
};

