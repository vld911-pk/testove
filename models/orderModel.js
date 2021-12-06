const query = require('mysql-query-promise');
const _ = require('lodash');

const saveOrderToDB = async (orderData) => {
    const { name, lastName, address, phone, bucketItems, totalPrice } = orderData;
    const res = await query('INSERT INTO orders (name, lastname, address, phone, tottal_price) VALUES (?, ?, ?, ?, ?)', 
    [name, lastName, address, phone, totalPrice]);
    const { insertId } = res;
    const promiseArray = Object.values(bucketItems).map(({ id, count }) => {
        return query('INSERT INTO ordersPurchases (order_id, prod_id, count) VALUES (?, ?, ?)', [insertId, id, count]);
    }); 
    try {
        // deleting table after order
        await Promise.all([...promiseArray, query('TRUNCATE TABLE bucket')]);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    saveOrderToDB,
}