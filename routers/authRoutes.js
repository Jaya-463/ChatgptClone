const express = require('express');
const { registerController, loginController, logoutController } = require('./controllers/authController');

//routerobj
const router = express.Router();

// Example route
router.get('/test', (req, res) => {
    res.send('Auth route working');
});

//register
router.post("/register", registerController);
//login
router.post("/login", loginController);
//logout
router.post("/logout", logoutController);

module.exports = router;
