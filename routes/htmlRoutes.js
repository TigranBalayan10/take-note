// Dependencies
import { join } from "path";
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.sendFile(join(__dirname, "../public/notes.html"));
});

router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../public/index.html"));
});

// If no matching route is found directing to home page
router.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../public/index.html"));
});

export default router;
