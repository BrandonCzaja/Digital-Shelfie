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
  req.body.username = req.session.username;
  console.log(`Create Route Req.Body : ${req.body}`)
  const newGame = await Collection.create(req.body);
  console.log(`Create Route req.body: ${req.body}`)
  res.redirect('/collection');
  } catch(err) {
    console.log(err);
  }
})

//Delete
router.delete('/:id', auth, async (req, res) => {
  await Collection.findByIdAndDelete(req.params.id);
  res.redirect('/collection')
})







//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
