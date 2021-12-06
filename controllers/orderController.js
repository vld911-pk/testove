const _ = require('lodash');
const { saveOrderToDB } = require('../models/orderModel');

const saveOrder = async (ctx) => {
    const data = ctx.request.body;
    try {
        await saveOrderToDB(_.pick(data, ['name', 'lastName', 'address', 'phone', 'bucketItems', 'totalPrice']));
    } catch (error) {
        ctx.status = 500;
        ctx.body = 'what a hell';    
    }

    ctx.status = 200;
    ctx.body = 'order saved';
}

module.exports = {
    saveOrder,
}