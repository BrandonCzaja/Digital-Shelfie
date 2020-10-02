//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Collection = require('../../models/collection');

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// Index Route
router.get('/', auth, async (req, res) => {
  try {
    const games = await Collection.find({username: req.session.username});
    res.render('collection/index.jsx', {games});
  }catch(error) {
    console.log(error);
  }
})

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
