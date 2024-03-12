const express = require("express");
const router = express.Router();

// Require controller modules.
const item_controller = require("../controllers/itemController");
const category_controller = require("../controllers/categoryController");

/// CATEGORY ROUTES ///

// GET catalog home page.
router.get("/", category_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/category/create", category_controller.categoryCreateGet);

// POST request for creating Book.
router.post("/category/post", category_controller.categoryCreatePost);

// GET request to delete Book.
router.get("/category/:id/delete", category_controller.categoryDeleteGet);

// POST request to delete Book.
router.post("/category/:id/delete", category_controller.categoryDeletePost);

// GET request to update Book.
router.get("/category/:id/update", category_controller.categoryUpdateGet);

// POST request to update Book.
router.post("/category/:id/update", category_controller.categoryUpdatePost);

// GET request for one Book.
router.get("/category/:id", category_controller.categoryDetail);

// GET request for list of all Book items.
router.get("/category", category_controller.categoryList);

/// ITEM ROUTES ///

// GET request for creating item. NOTE This must come before route for id (i.e. display item).
router.get("/item/create", item_controller.itemCreateGet);

// POST request for creating item.
router.post("/item/create", item_controller.itemCreatePost);

// GET request to delete item.
router.get("/item/:id/delete", item_controller.itemDeleteGet);

// POST request to delete item.
router.post("/item/:id/delete", item_controller.itemDeletePost);

// GET request to update item.
router.get("/item/:id/update", item_controller.itemUpdateGet);

// POST request to update item.
router.post("/item/:id/update", item_controller.itemUpdatePost);

// GET request for one item.
router.get("/item/:id", item_controller.itemDetail);

// GET request for list of all items.
router.get("/items", item_controller.itemList);

module.exports = router;
