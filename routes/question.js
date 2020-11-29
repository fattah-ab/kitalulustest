const { Router } = require("express");
const router = Router();

const QuestionController = require('../controllers/Question');

router.get('/', QuestionController.getQuestion)
router.post('/create', QuestionController.createQuestion)
// router.get('/edit/:id', VeterinaryController.editFormVeterinary)
// router.put('/edit/:id', VeterinaryController.findVeterinaryById)
// router.delete('/delete/:id', VeterinaryController.deleteVeterinary)
// router.put('/online/:id', Authentication, VeterinaryController.online)

module.exports = router