const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const analyzeRoute = require("./routes/analyze");

app.use(cors());
app.use(express.json());

app.use("/analyze", analyzeRoute);

app.get("/", (req, res) => {
    res.send("Backend is Running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});