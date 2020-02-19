"use strict";

const file = require('../index');

process('C:\\alexey\\dev\\nodejs-file.js');
process('./alexey/dev/nodejs-file.js');

function process(path) {
    console.log('path =>', path);
    console.log('name =>', file.getName(path));
    console.log('name without extension =>', file.getNameWithoutExtension(path));
    console.log('info =>', file.getInfo(path));
    console.log('=======================');
}