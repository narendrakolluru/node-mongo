const User = require('../models/user.model');


exports.user_create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            age: req.body.age,
            contact: req.body.contact
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.all_users = function (req, res) {
  User.find(function (err, user) {
    if (err) return next(err);
      res.send(user);
  })
};
