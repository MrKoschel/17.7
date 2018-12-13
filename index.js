"use strict";
process.stdin.setEncoding('utf-8');

var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
var dirfiles;
fs.readdir('./', 'utf-8', function(err, files) {
    console.log("Odczytano!".blue);
    dirfiles = files;
    console.log(dirfiles);
    fs.writeFile('./content.txt', dirfiles, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
});
});
    
