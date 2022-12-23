function isAdmin(req, res, next) {
  if (req.session.user?.isAdmin === true) {
    return next();
  }
  return res.redirect('/');
}

export default isAdmin;
