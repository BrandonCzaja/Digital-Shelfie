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
  } catch(err) {
    console.log(err);
  }
})

// New Route
router.get('/new', auth, (req, res) => {
  res.render('collection/new.jsx')
})

//Create Route: I think I need a try/catch
router.post('/', auth, async (req, res) => {
  try{
    // I don't get any errors with this but nothing renders
    // Collection.create(req.body, (error, games) => {
    //   res.redirect('/collection');
    // })
    //I always get a Mongo Error 11000 with this
  req.body.username = req.session.username;
  console.log(`Create Route Req.Body : ${req.body}`)
  const newGame = await Collection.create(req.body);
  res.redirect('/collection');
  } catch(err) {
    console.log(err);
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
