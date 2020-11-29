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

            // get total documents in the Question collection 
            const count = await Question.countDocuments();
            
            const total = await Math.ceil(count / limit);
            if(page > total) return next({message: `Page ${page} is not available`});
            
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

    static async getDetailQuestion(req, res, next) {
        try {
            const { id } = req.params;
            const question = await Question.findById({_id: id});

            if(!question) return next({message: `Question with id: ${id} is not found!`});

            res.status(200).json({
                success: true,
                message: "Successfully showing detail question!",
                data: question
            });
        } catch (err) {
            next(err);
        }
    }

    static async editQuestion(req, res, next) {
        try {
            const { id } = req.params;

            if (!id) return next({ message: "Missing ID" });

            const updatedData = await Question.findByIdAndUpdate(
                id, { $set: req.body }, { new: true }
            );

            res.status(200).json({
                success: true,
                message: "Question has been Updated.",
                data: updatedData,
            });
        } catch (err) {
            next(err);
        }
    }

    static async deleteQuestion(req, res, next) {
        try {
            const { id } = req.params;

            if (!id) return next({ message: "ID params not found" });

            await Question.findByIdAndRemove(id, (error, doc, result) => {
                if (error) throw "Failed to delete";
                if (!doc)
                    return res.status(400).json({ success: false, err: "Data not found!" });

                res.status(200).json({
                    success: true,
                    message: "Question has been deleted.",
                    data: doc
                });
            });
        } catch (err) {
            next(err);
        }
    }
}


module.exports = questionController;