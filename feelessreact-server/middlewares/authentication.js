const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models').Users;

function passwordsMatch(passwordSubmitted, storedPassword) {
  console.log('In Middleware/auth, passmatch');
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  (email, password, done) => {
    console.log('In Middleware/auth, top');
    Users.findOne({
      where: { email },
    }).then((user) => {
      // debugger;
      console.log('In Middleware/auth, then');

      
      if(!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      if (passwordsMatch(password, user.password_hash) === false) {
        console.log('\n\nerror match\n\n')
        return done(null, false, { message: 'Incorrect password.' });
      }

      console.log('\n\ncorrect login!!\n\n')
      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id).then((user) => {
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;
