const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const productRouter = require('./routes/productRouter');

const app = new Koa();
require('dotenv').config();

app.use(cors());
app.use(static(__dirname + '/public/photos'));
app.use(bodyParser({
  extendTypes: {
    json: ['application/x-javascript']
  }
}));

app.use(productRouter.routes());

app.listen(process.env.APP_PORT || 3001, () => console.log(`server has been started at ${process.env.APP_PORT} port`));