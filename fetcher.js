const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
if (args.length < 3) {

  let site = args[0];
  let dl = args[1];

  request(site, (error, response, body) => {
    const content = body;
    fs.writeFile(dl, content, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Downloaded and saved ${content.length} bytes to ${dl}`); 
      }
    });
  });
} else {
  console.log("too many inputs, must only be a site address and a download path");
}