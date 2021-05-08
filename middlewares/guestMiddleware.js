function guestMiddleware(req, res, next) {
    // req.session;
    // res.send(req.session.userLogged);
    if (req.session.userLogged) {
        return res.redirect('/users/profile');
    }
    next();
}

module.exports = guestMiddleware;