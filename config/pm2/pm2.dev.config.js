module.exports = {
  apps: [
    {
      ...require('./pm2.config'),
      env: {
        NODE_ENV: 'development',
        PORT: 4000
      }
    }
  ]
}
