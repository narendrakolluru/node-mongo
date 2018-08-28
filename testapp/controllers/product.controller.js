const Product = require('../models/products.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//create products
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_all = function (req, res) {
  Product.find( function (err, product) {
    if (err) return next(err);
      res.send(product);
  })
};

//read products
exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
      res.send(product);
  })
};

// Update

exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
    if(err) return next(err);
    res.send('database updated.')
  })
}

// delete
exports.product_delete= function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err, product) {
    if(err) return next(err);
    res.send('product Deleted successfully.')
  })
}
