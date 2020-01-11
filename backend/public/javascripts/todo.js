const fs = require("fs");
var todo = {};

var done = {
  status: "List Edited",
  statusCode: 0
};

todo.printData = function() {
  return new Promise(function(resolve, reject) {
    fs.exists("public/javascripts/list.json", exists => {
      if (exists) {
        resolve(
          new Promise(function(resolve, reject) {
            fs.readFile("public/javascripts/list.json", "utf8", (err, data) => {
              err ? reject(err) : resolve(JSON.parse(data));
            });
          })
        );
      }
      reject("Error");
    });
  });
};

todo.editData = function(jsondata) {
  return new Promise(function(resolve, reject) {
    fs.exists("public/javascripts/list.json", exists => {
      if (exists) {
        resolve(
          new Promise(function(resolve, reject) {
            fs.writeFile(
              "public/javascripts/list.json",
              JSON.stringify(jsondata),
              err => {
                err ? reject(err) : resolve(done);
              }
            );
          })
        );
      }
      reject("Error");
    });
  });
};

module.exports = todo;
