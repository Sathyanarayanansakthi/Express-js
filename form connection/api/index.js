import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/app", (req, res) => {
    const { Name, Email, Password } = req.body;
    res.json({ requestData: { Name, Email, Password } });
});

app.listen(3000, () => {
    console.log("The server is running on http://localhost:3000");
});
