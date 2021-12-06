const Router = require('koa-router');
const productController = require('../controllers/productController');
const bucketController = require('../controllers/bucketController');
const orderController = require('../controllers/orderController');

const router = new Router();

router.get('/products', productController.show);

router.get('/get-bucket-items', bucketController.getBucketItems);
router.post('/add-to-bucket', bucketController.addToBucket);
router.del('/delete-from-bucket', bucketController.deleteFromBucket);

router.post('/save-order', orderController.saveOrder);

module.exports = router;