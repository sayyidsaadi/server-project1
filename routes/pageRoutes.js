const express = require('express');
const { homepageControllers, blogpageControllers, shoppageControllers, singleblogpageControllers } = require('../controllers/pagecontrollers')

// Router Init
const router = express.Router();

// Routing
router.get('/', homepageControllers)

router.get('/blog', blogpageControllers)

router.get('/shop', shoppageControllers)

router.get('/singleblog', singleblogpageControllers)

// Export Router
module.exports = router;