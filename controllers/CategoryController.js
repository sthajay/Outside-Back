const Category = require('./../models/Category');

exports.index = (req, res, next) => {
    Category.findAll().
        then(categories => {
            res.status(200).json({
                categories: categories
            });
        });
};


exports.store = (req, res, next) => {
    Category.findOne({
        where: { name: req.body.name }
    })
        .then(category => {
            if (!category) {
                const category = new Category({
                    name: req.body.name
                });
                category.save().
                    then(createdCategory => {
                        return res.status(201).json({
                            message: 'Category Created Successfully!!'
                        });
                    });

            } else {
                res.json({
                    message: 'error'
                })
            }

        })


};



