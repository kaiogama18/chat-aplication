const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('server ip up and running')
});

module.exports = router;