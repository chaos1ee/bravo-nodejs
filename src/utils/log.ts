const chalk = require('chalk');

const log = console.log;
export default log;

const SUCCESS = chalk.white.bgGreen.bold(' Success ');
const FAILED = chalk.yellow.bgRed.bold(' Failed ');

const success = (str: string) => {
  log(`${SUCCESS} ${chalk.green(str)}`);
};

const failed = (str: string) => {
  log(`${FAILED} ${chalk.red(str)}`);
};

export const sunLog = { success, failed };
