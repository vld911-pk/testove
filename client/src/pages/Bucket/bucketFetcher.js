

const addItemToBucket = async (prod_id) => {
    await fetch('http://localhost:3001/add-to-bucket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ prod_id }),
    });
};

const deleteItemFromBucket = async (prod_id) => {
    console.log({ prod_id });
    await fetch(`http://localhost:3001/delete-from-bucket?id=${prod_id}`, {
        method: 'DELETE',
    });
};

module.exports = {
    addItemToBucket,
    deleteItemFromBucket,
}