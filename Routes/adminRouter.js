const express = require('express');
const libraryHandler = require('../Controller/admin-library');


const router = express.Router();

router.post('/savebookinlibrary',libraryHandler.savebook);
router.post('/removebookfromlibrary', libraryHandler.removeBook);
router.post('/getmebook',libraryHandler.getBook);
router.post('/returnbook',libraryHandler.returnBook);




module.exports = router;