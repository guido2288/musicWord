const express = require ("express");
const router = express.Router();

//Rutas del Login

router.get("/", (req, res) => {
    res.send("Hello World")
})

module.exports = router;