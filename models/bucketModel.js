const query = require('mysql-query-promise');
const _ = require('lodash');

const getAllBucketItems = async () => {
    const bucketData = await query('SELECT b.prod_id, p.product_name, p.price FROM bucket b join products p on p.prod_id = b.prod_id');
    const mapProdIdToProdList = _.mapValues(_.groupBy(bucketData, 'prod_id'), (arr) => {
        return { 
            id: arr[0].prod_id, 
            name: arr[0].product_name, 
            price: arr[0].price, 
            count: arr.length,
            photo: `photo${arr[0].prod_id}.png`, 
        };
    });
    return mapProdIdToProdList;
}

const addProductToBucket = async (prod_id) => {
    if (!prod_id) return null;
    await query('INSERT INTO bucket (prod_id) VALUES (?)', [prod_id]);
}

const deleteProductFromBucket = async (prod_id) => {
    if (!prod_id) return null;
    const rowsWithId = await query('SELECT id FROM bucket WHERE prod_id = ?', [prod_id]);
    await query('DELETE FROM bucket WHERE id = ?', [rowsWithId[0]?.id]);
}

module.exports = {
    getAllBucketItems,
    addProductToBucket,
    deleteProductFromBucket,
}