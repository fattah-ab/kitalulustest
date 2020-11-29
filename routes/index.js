const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    res.json("kitalulus test API");
});



module.exports = router;