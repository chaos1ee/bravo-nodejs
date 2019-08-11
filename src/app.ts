import * as Koa from 'koa';

const registerRouter = require('./routes');

const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(registerRouter());

app.listen(PORT, () => {
  console.log(`Koa is listening on ${PORT}`);
});

module.exports = app;
