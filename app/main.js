'use strict';

require('reflect-metadata');
require('zone.js/dist/zone');
var bootstrap = require('angular2/platform/browser').bootstrap;
var com = require('./component/com');

document.addEventListener('DOMContentLoaded', function(){
  bootstrap(com);
});
