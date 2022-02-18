//local auth session tracking
const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  if (!req.session.logged_in || !req.user) {
    res.redirect('/login');
  } else {
    next();
  }
};

//Google auth session tracking
// const isLoggedIn = (req, res, next) =>{
//       req.user ? next() : res.sendStatus(401);
// }

module.exports = withAuth;
