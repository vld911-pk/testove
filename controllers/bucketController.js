const _ = require('lodash');
const { getAllBucketItems, addProductToBucket, deleteProductFromBucket } = require('../models/bucketModel');

const addToBucket = async (ctx) => {
    const { prod_id } = ctx.request.body;
    try {
        await addProductToBucket(prod_id);
    } catch (error) {
        ctx.status = 500;
        ctx.body = 'what a hell';
    }
    ctx.status = 200;
    ctx.body = 'added';
}

const deleteFromBucket = async (ctx) => {
    const { id } = ctx.query;
    try {
        await deleteProductFromBucket(id);
    } catch (error) {
        ctx.status = 500;
        ctx.body = 'what a hell';
    }
    ctx.status = 200;
    ctx.body = 'deleted';
}

const getBucketItems = async (ctx) => {
   
    try {
        const res = await getAllBucketItems();
        ctx.status = 200;
        ctx.body = res;
    } catch (error) {
        ctx.status = 500;
        ctx.body = 'what a hell';
    }
    ctx.status = 200;
}   

module.exports = {
    addToBucket,
    getBucketItems,
    deleteFromBucket,
}