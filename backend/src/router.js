/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const multer = require("multer");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const personnalRecipeControllers = require("./controllers/personnal_recipeControllers");
const authControllers = require("./controllers/authControllers");
const { hashPassword, verifyPassword } = require("./services/auth");

const fileControllers = require("./controllers/fileControllers");

const upload = multer({ dest: process.env.UPLOADS_FOLDER });
/// / login ////

router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

/// // GESTION DES USERS ////

router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.put("/api/users/:id", userControllers.edit);
router.post("/api/users", hashPassword, userControllers.add);
router.delete("/api/users/:id", userControllers.destroy);

/// // GESTION DES RECETTES PERSONNELLES /////

router.get("/api/my-recipes", personnalRecipeControllers.browse);
router.get("/api/my-recipes/:id", personnalRecipeControllers.read);
router.put("/api/my-recipes/:id", personnalRecipeControllers.edit);
router.post(
  "/api/my-recipes",
  upload.single("image"),
  fileControllers.fileRename,
  personnalRecipeControllers.add
);
router.delete("/api/my-recipes/:id", personnalRecipeControllers.destroy);

module.exports = router;
