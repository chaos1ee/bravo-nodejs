const express = require('express');
const os = require('os');
const app = express();

const ARTICLES = [{ name: '鲁宾逊漂流记' }, { name: '上下五千年' }];

// 端口
app.set('port', process.env.PORT || 8080);

app.get('/articles', (req, res, next) => {
  res.send(ARTICLES);
});

app.post('/articles', (req, res, next) => {
  res.send('ok');
});

app.get('/article/:id', (req, res, next) => {
  const id = req.params.id;
  console.log('Fetching: ' + id);
  res.send(ARTICLES[id]);
});

app.delete('/article/:id', (req, res, next) => {
  const id = req.params.id;
  console.log('Deleting: ' + id);
  delete ARTICLES[id];
  res.send("{message: 'Deleted'}");
});

app.listen(app.get('port'), () => {
  console.log(`Express is listening on ${app.get('port')}`);
});

module.exports = app;
