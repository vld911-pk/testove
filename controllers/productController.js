const query = require('mysql-query-promise');
const _ = require('lodash');
const { getAllBucketItems } = require('../models/bucketModel');

const show = async (ctx) => {
    const [products, productsInBucket] = await Promise.all(
        [query('SELECT * FROM products'), getAllBucketItems()]
    );

    for (const product of products) {
        product.photo = `photo${product.prod_id}.png`;
    }

    ctx.body = { products, productsInBucket: productsInBucket || {} };
}

module.exports = {
    show,
}