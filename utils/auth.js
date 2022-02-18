
const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};


const isLoggedIn = (req, res, next) =>{
      req.user ? next() : res.sendStatus(401);
}

module.exports = withAuth, isLoggedIn;
