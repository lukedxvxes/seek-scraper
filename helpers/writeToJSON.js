const fs = require("fs");

async function writeToJson({ jobsListingArr, type, city }) {
  const content = JSON.stringify(jobsListingArr);
  const date = new Date().toISOString().split("T")[0];
  fs.writeFile(
    `./data-json/${city}/${type}_${city}_${date}.json`,
    content,
    (err) => {
      if (err) {
        return console.log("there has been a problem... ", err);
      }
      return console.log(
        `success! ${type}_${city}_${date}.json has been added `
      );
    }
  );
}

module.exports = writeToJson;
