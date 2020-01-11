const fs = require("fs");
var user = {};

user.getUser = () => {
  return new Promise((res, rej) => {
    fs.exists("public/javascripts/user.json", exists => {
      if (exists) {
        res(
          new Promise(function(resolve, reject) {
            fs.readFile("public/javascripts/user.json", "utf8", (err, data) => {
              err ? reject(err) : resolve(JSON.parse(data));
            });
          })
        );
      }
      rej("Error");
    });
  });
};

module.exports = user;
