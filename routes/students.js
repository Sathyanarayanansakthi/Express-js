import express from "express";
const router = express.Router();

// CAUTION 
// Beaware when testing this code
// The route methods are totally different from one another
// Which means you'll have to either test it on Postman or Thunder Client

router.get("/all", (req, res) => {
  res.send("All Student");
});

router.post("/create", (req, res) => {
  res.send("create a account");
});

router.put("/update", (req, res) => {
  res.send("Student updated");
});

router.delete("/delete", (req, res) => {
  res.send("Student Deleted");
});

export default router;