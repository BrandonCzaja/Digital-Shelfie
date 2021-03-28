//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Collection = require("../../models/collection");

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const collection = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// 3000/collection
// router.get('/', (req, res) => {
// 	res.render('auth/login.jsx')
// })
// Index Route '3000/collection' - when user logged in it shows their games
collection.get("/", auth, async (req, res) => {
	try {
		console.log('Hello from collection')
		const games = await Collection.find({ username: req.session.username });
		res.render("collection/Index.jsx", { games });
	} catch (err) {
		console.log(err);
	}
});

// New Route
collection.get("/new", auth, (req, res) => {
	try {
		res.render("collection/New.jsx");
	} catch (error) {
		console.log(error);
	}
});

//Create
collection.post("/", auth, async (req, res) => {
	try {
		req.body.username = req.session.username;
		const newGame = await Collection.create(req.body);
		res.redirect("/collection");
	} catch (err) {
		console.log(err);
	}
});

//Delete
collection.delete("/:id", auth, async (req, res) => {
	try {
		await Collection.findByIdAndDelete(req.params.id);
		res.redirect("/collection");
	} catch (error) {
		console.log(error);
	}
});

//Edit
collection.get("/edit/:id", auth, async (req, res) => {
	try {
		const game = await Collection.findById(req.params.id);
		res.render("collection/edit.jsx", { game });
	} catch (error) {
		console.log(error);
	}
});

//Update
collection.put("/edit/:id", auth, async (req, res) => {
	try {
		req.body.username = req.session.username;
		await Collection.findByIdAndUpdate(req.params.id, req.body);
		res.redirect("/collection");
	} catch (err) {
		console.log(err);
	}
});

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

// collection.get("/", auth, (req, res) => {
// 	res.send("if you see this you are logged in");
// });

///////////////////////////////////////
// Export collection
///////////////////////////////////////
module.exports = collection;
