module.exports = {
  name: 'csrf-app',
  script: './src/app.ts',
  interpreter: 'node_modules/.bin/ts-node',
  watch: true,
  ignore_watch: ['node_modules'],
  exp_backoff_restart_delay: 100,
  combine_logs: true,
  merge_logs: true,
  error_file: 'logs/err.log',
  out_file: 'logs/out.log',
  time: true
}
