const { Question } = require('../models/question');

class questionController {
    static async createQuestion(req, res, next) {
        try {
            let obj = {};
            const { question, createdBy } = req.body;

            if (question) obj.question = question;
            if (createdBy) obj.createdBy = createdBy;

            let result = await Question.create(obj);
            res.status(201).json({
                success: true,
                message: "Success creating Question!",
                data: result
            });
        } catch (err) {
            next(err);
        }
    }

    static async getQuestion(req, res, next) {
        const { page } = req.query;
        let limit = 2;

        try {
            let result = await Question
                .find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec();

            // get total documents in the Clinic collection 
            const count = await Question.countDocuments();
            // console.log(count)
            const total = await Math.ceil(count / limit)
            if(page > total) {
                throw(error.message)
            }

            res.status(200).json({
                success: true,
                message: "Successfully retrieve all Question!",
                data: result,
                totalPages: total,
                // totalPages: Math.ceil(count / limit),
                currentPage: page
            });
        } catch (err) {
            next(err);
        }
    }
}


module.exports = questionController;