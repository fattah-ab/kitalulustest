const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    res.json("kitalulus test API");
});

const questionRoutes = require('./question');
router.use('/question', questionRoutes);



module.exports = router;