const path = require('path');

const ISDEV = process.env.NODE_ENV !== 'production';
const ISANALYZE = process.env.npm_config_report === 'true';

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_DIRNAME = path.parse(PROJECT_PATH).name;

const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 3000;

module.exports = {
  PROJECT_DIRNAME,
  PROJECT_PATH,
  ISDEV,
  ISANALYZE,
  SERVER_HOST,
  SERVER_PORT,
};
