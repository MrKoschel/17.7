"use strict";
process.stdin.setEncoding('utf-8');

var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
fs.readdir('./', 'utf-8', function (err, files) {
    console.log("Odczytano zawartość folderu!".blue);
    console.log(files);
    fs.writeFile('./content.txt', files, function (err) {
        if (err) throw err;
        console.log('Zapisano zawartość folderu do pliku content.txt!'.blue);
    });
});
