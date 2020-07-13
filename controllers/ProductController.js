const Product = require('../models/Product');
const Category = require('../models/Category');


exports.all = (req, res, next) => {
    Category.findAll({
        include: Product
    }).then(data => {
        return res.json(data);
    })
};

exports.store = (req, res, next) => {
    Category.findByPk(req.body.categoryId)
        .then(category => {
            Product.findOne({
                where: {
                    name: req.body.name
                }
            }).then(product => {
                if (!product) {
                    category.createProduct({
                        name: req.body.name,
                        price: req.body.price
                    }).then(() => {
                        res.status(201).json({
                            message: 'Product Inserted Successfully!!'
                        });
                    });
                }
                else {
                    res.json({
                        message: 'error'
                    })
                }
            })
        });
};

exports.getProductByCatId = (req, res, next) => {
    if (req.params.id) {
        Product.findAll({
            where: {
                categoryId: req.params.id
            }
        }).then(products => {
            res.status(200).json({
                products: products
            });
        });
    }

};


exports.getPriceByProduct = (req, res, next) => {
    Product.findOne({
        where: {
            name: req.params.productName
        }
    }).
        then(product => {
            res.status(200).json({
                product: product
            });
        });
};