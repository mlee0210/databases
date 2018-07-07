var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('inside controller.messages.get');
      models.messages.get((err, data) => {
        if (err) {
          throw (err);
        } else {
          res.send(JSON.stringify(data));
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let messageData = req.body;
      models.messages.post(messageData, (err, result) => {
        if (err) {
          throw (err);
        } else {
          res.send(result);
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          throw (err);
        } else {
          res.send(JSON.stringify(data));
        }
      })
    },
    post: function (req, res) {
      console.log(req.body);
      let messageData = req.body;
      models.users.post(messageData, (err, result) => {
        if (err) {
          throw (err);
        } else {
          res.send(result);
        }
      })
    }
  }
};

