const User = require('../models/users');
const Meetup = require('../models/meetups');
const Thread = require('../models/threads');
const Post = require('../models/posts');
const Category = require('../models/categories');
const passport = require('passport');

exports.getUsers = function(req, res) {
  User.find({})
        .exec((errors, users) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(users);
  });
}

exports.getCurrentUser = function (req, res, next) {
  const user = req.user;

  if(!user) {
    return res.sendStatus(422);
  }

  return res.json(user.toAuthJSON());
};

exports.register = function(req, res) {
  const registerData = req.body

  if (!registerData.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
        message: 'Email is required'
      }
    })
  }

  if (!registerData.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
        message: 'Password is required'
      }
    })
  }

  if (registerData.password !== registerData.passwordConfirmation) {
    return res.status(422).json({
      errors: {
        password: 'is not the same as confirmation password',
        message: 'Password is not the same as confirmation password'
      }
    })
  }

  const user = new User(registerData);

  return user.save((errors, savedUser) => {
    if (errors) {
      return res.status(422).json({errors})
    }

    return res.json(savedUser)
  })
}

exports.login = function (req, res, next) {
  const { email, password } = req.body

  if (!email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
        message: 'Email is required'
      }
    })
  }

  if (!password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
        message: 'Password is required'
      }
    })
  }

  return passport.authenticate('local', (err, passportUser) => {
    if (err) {
      return next(err)
    }

    if (passportUser) {
      return res.json(passportUser.toAuthJSON())

    } else {
      return res.status(422).send({errors: {
        'message': 'Invalid password or email'
      }})
    }

  })(req, res, next)
}

exports.logout = function (req, res) {
  req.logout()
  return res.json({status: 'Session destroyed!'})
}

function fetchMeetupsByUserQuery (userId) {
  return Meetup.aggregate([
    { "$facet": {
      "meetups": [
        { "$match": {"meetupCreator": userId}},
        { "$limit": 5 },
        { "$sort": {"createdAt": -1} }
      ],
      "meetupsCount": [
        { "$match": {"meetupCreator": userId}},
        { "$count": "count" }
      ]
    }}
  ])
  .exec()
  .then(results => {
    return new Promise((resolve, reject) => {
      Category.populate(results[0].meetups, {path: 'category'})
      .then(pMeetups => {
        if (pMeetups && pMeetups.length > 0) {
          resolve({data: pMeetups, count: results[0].meetupsCount[0].count});
        } else {
          resolve({data: results[0].meetups, count: 0})
        }
      })
    })
  })
}

function fetchThreadsByUserQuery (userId) {
  return Thread.aggregate([
      { "$facet": {
        "threads": [
          { "$match": {"user": userId}},
          { "$limit": 5 },
          { "$sort": {"createdAt": -1} }
        ],
        "threadsCount": [
          { "$match": {"user": userId}},
          { "$count": "count" }
        ]
      }}
    ])
  .exec()
  .then(results => {
    const threads = results[0].threads;
    if (threads && threads.length > 0) {
      return {data: threads, count: results[0].threadsCount[0].count}
    }

    return {data: threads, count: 0}
  })
}

function fetchPostByUserQuery (userId) {
  return Post.aggregate([
      { "$facet": {
        "posts": [
          { "$match": {"user": userId}},
          { "$limit": 5 },
          { "$sort": {"createdAt": -1} }
        ],
        "postsCount": [
          { "$match": {"user": userId}},
          { "$count": "count" }
        ]
      }}
    ])
  .exec()
  .then(results => {
    const posts = results[0].posts;
    if (posts && posts.length > 0) {
      return {data: results[0].posts, count: results[0].postsCount[0].count}
    }

    return {data: results[0].posts, count: 0}
   }
)}

exports.getUserActivity = function (req, res) {
  const userId = req.user._id;

  Promise.all(
    [fetchMeetupsByUserQuery(userId),
     fetchThreadsByUserQuery(userId),
     fetchPostByUserQuery(userId)
    ])
    // Writing [] to get data from the array

    .then(([meetups, threads, posts]) => res.json({meetups, threads, posts}))
    .catch(err => {
      console.log(err)
      res.status(422).send({err})
      })
}

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const user = req.user;

  if (user.id === userId) {
    // new: bool - true to return the modified document rather than the original. defaults to false
    User.findByIdAndUpdate(userId, { $set: userData}, { new: true }, (errors, updatedUser) => {
      if (errors) return res.status(422).send({errors});

      return res.json(updatedUser);
    });
  } else {
    return res.status(422).send({errors: 'Authorization Error!'})
  }
}







