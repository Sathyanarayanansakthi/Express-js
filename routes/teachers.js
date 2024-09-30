import express from "express";
const router = express.Router();

// CAUTION 
// Beaware when testing this code
// The route methods are totally different from one another
// Which means you'll have to either test it on Postman or Thunder Client

router.get("/all/department", (req, res) => {
  res.send("All Staffs");
});

router.post("/create", (req, res) => {
  res.send("new staff");
});

router.put("/update", (req, res) => {
  res.send("updated staff");
});

router.delete("/delete", (req, res) => {
  res.send("Staff Deleted");
});

export default router;