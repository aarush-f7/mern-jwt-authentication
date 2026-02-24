const express = require("express");
const authController = require("../controller/auth.controller");

const router = express.Router();


// POST API created here, API name - (register) :-
router.post("/register", authController.registerUser)


// router.get("/test", (req, res)=> {
//     console.log("Cookies:", req.cookies)
//     res.json(
//         {
//             message: "test route",
//             cookies: req.cookies
//         }
//     )
// })



module.exports = router;