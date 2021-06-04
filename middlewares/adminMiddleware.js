function adminMiddleware(req, res, next){

    let userLogged = req.session.userLogged

    if(!userLogged){
        return res.redirect('/users/login')

    }else if(userLogged && userLogged.isAdmin == 0){
        return res.redirect('/')
    }
        return next();
}

module.exports = adminMiddleware;