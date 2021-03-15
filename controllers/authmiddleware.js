///////////////////////////////
// Auth Middleware
///////////////////////////////
// ADD TO ROUTES THAT SHOULD ONLY BE ACCESSED IF LOGGED IN

const auth = (req, res, next, error) => {
    if (req.session.login) {
        next();
    } else {
        res.status(400).send("NOT LOGGED IN");
        console.log(error);
    }
};

module.exports = auth;
