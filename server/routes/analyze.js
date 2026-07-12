const express = require("express");

const router = express.Router();

const runInvestmentAgent = require("../graphs/investmentGraph");

router.post("/", async (req, res) => {

    try {

        const { company } = req.body;

        const analysis = await runInvestmentAgent(company);

        res.json({
            success: true,
            company,
            analysis
        });

    }
catch (error) {
    console.error("FULL ERROR:");
    console.error(error);

    res.status(500).json({
        success: false,
        message: error.message
    });
}
    }

);

module.exports = router;