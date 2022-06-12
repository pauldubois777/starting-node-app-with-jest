'use strict';

const main = (args) => {
  console.log({args: [...args]});
}

main(process.argv.slice(2));

module.exports = main