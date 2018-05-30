'use strict';

const fs = require('fs');
const csv = require('csvtojson');
const path = require('path');

const convertFile = (filename = 'customer-data.csv') => {
  console.log('converting', filename);

  csv()
  .fromFile('customer-data.csv')
  .then((jsonObj) => {
    try {
      let basename = path.basename(filename, '.csv');
      fs.writeFileSync(basename + '.json', JSON.stringify(jsonObj));
      console.log('conversion is done');
    } catch(error) {
      console.error(error);
    }
  }).catch((error) => {
    console.error(error);
  });
};

convertFile(process.argv[2]);