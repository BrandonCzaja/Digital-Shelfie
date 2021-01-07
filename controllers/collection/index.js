//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Collection = require("../../models/collection");

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// Index Route
router.get("/", auth, async (req, res) => {
  try {
    const games = await Collection.find({ username: req.session.username });
    res.render("collection/index.jsx", { games });
  } catch (err) {
    console.log(err);
  }
});

// New Route
router.get("/new", auth, (req, res) => {
  try {
    res.render("collection/new.jsx");
  } catch (error) {
    console.log(error);
  }
});

//Create
router.post("/", auth, async (req, res) => {
  try {
    req.body.username = req.session.username;
    const newGame = await Collection.create(req.body);
    res.redirect("/collection");
  } catch (err) {
    console.log(err);
  }
});

//Delete
router.delete("/:id", auth, async (req, res) => {
  try {
    await Collection.findByIdAndDelete(req.params.id);
    res.redirect("/collection");
  } catch (error) {
    console.log(error);
  }
});

//Edit
router.get("/edit/:id", auth, async (req, res) => {
  try {
    const game = await Collection.findById(req.params.id);
    res.render("collection/edit.jsx", { game });
  } catch (error) {
    console.log(error);
  }
});

//Update
router.put("/edit/:id", auth, async (req, res) => {
  try {
    req.body.username = req.session.username;
    await Collection.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/collection");
  } catch (err) {
    console.log(err);
  }
});

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
