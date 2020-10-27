module.exports = {
  apps: [
    {
      ...require('./pm2.config'),
      register: '',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 443
      }
    }
  ]
}
