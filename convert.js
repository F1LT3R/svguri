#!/usr/bin/env node
(function () {

  'use strict';

  var fs = require('fs');
  var program = require('commander');

  program
    .arguments('<file>')
    .action(function (file) {
      fs.readFile(file, {encoding: 'utf-8'}, function(err, data){
        if (err){
          console.error(err);
          return;
        }

        //var enc = Base64.encode(data);
        var enc = encodeURIComponent(data).replace(/'/g,"%27").replace(/"/g,"%22");
        console.log('background-image:url("data:image/svg+xml,'+enc+'")');
      });
    });

  program.parse(process.argv);

})();
