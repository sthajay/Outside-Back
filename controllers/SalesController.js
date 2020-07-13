const Sales = require('./../models/Sales');

exports.store = (req, res, next) => {
    const sales = new Sales({
        category: req.body.category,
        product: req.body.product,
        quantity: req.body.quantity,
        price: req.body.price,
        payment: req.body.payment
    });
    sales.save().then(createdSales => {
        res.status(201).json({
            sales: createdSales,
            message: 'success'
        });
    });
};


