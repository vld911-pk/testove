const query = require('mysql-query-promise');

const getProductsByIds = async (ids = []) => {
    const res = await query('SELECT * FROM products WHERE prod_id in (?)', [ids]);
    return res;
}

module.exports = {
    getProductsByIds,
}