const passUserToView = (req, res, next) => {
    res.locals.user = req.session.user ? req.session: null
    next()
}

module.exports = passUserToView