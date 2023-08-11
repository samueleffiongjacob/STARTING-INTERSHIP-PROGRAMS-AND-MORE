import { src, dest, series, parallel } from 'gulp'
import del from 'del';
import fs from 'fs';
import zip from 'gulp-zip';
import log from 'fancy-log';
import webpack_stream  from 'webpack-stream';
import webpack_config from './webpack.config.js';
var exec = require('child_process').exec;


const paths = {
  prod_build: '../prod-build',
  server_file_name: 'server.bundle.js',
  react_src: '../client/build/**/*',
  react_dist: '../prod-build/client/build',
  zipped_file_name: 'react-nodejs.zip'
};


export const clean = () => del([ '../prod-build/**', {force:true} ]);

export function createProdBuildFolder() {

  const dir = paths.prod_build;
  log(`Creating the folder if not exist  ${dir}`)
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    log('📁  folder created:', dir);
  }

  return Promise.resolve('the value is ignored');
}

export function buildReactCodeTask(cb) {
  log('building React code into the directory')
  return exec('cd ../client && yarn build', function (err, stdout, stderr) {
    log(stdout);
    log(stderr);
    cb(err);
  })
}

export function copyReactCodeTask() {
  log('copying React code into the directory')
  return src(`${paths.react_src}`)
        .pipe(dest(`${paths.react_dist}`));
}

export function copyNodeJSCodeTask() {
  log('building and copying server code into the directory')
  return webpack_stream(webpack_config)
        .pipe(dest(`${paths.prod_build}`))
}

export function zippingTask() {
  log('zipping the code ')
  return src(`${paths.prod_build}/**`)
      .pipe(zip(`${paths.zipped_file_name}`))
      .pipe(dest(`${paths.prod_build}`))
}

