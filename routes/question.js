const { Router } = require("express");
const router = Router();

const QuestionController = require('../controllers/Question');

router.get('/', QuestionController.getQuestion)
router.post('/create', QuestionController.createQuestion)
router.get('/:id', QuestionController.getDetailQuestion)
router.put('/edit/:id', QuestionController.editQuestion)
router.delete('/delete/:id', QuestionController.deleteQuestion)

module.exports = router