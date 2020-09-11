const fs = require("fs");
const utils = require("util");

const readFile = utils.promisify(fs.readFile);

function getDogs() {
  var myData = [
    { name: "Fido", breed: "Border Terrier", childFriendly: true },
    { name: "Butch", breed: "Poodle", childFriendly: true },
    { name: "Patch", breed: "Poodle", childFriendly: false }
  ];
  return myData;
}

async function getStaff() {
  const data = await readFile("./data/staff.json", "utf-8");
  if (!data) return [];
  return JSON.parse(data);
}

module.exports = { getStaff, getDogs };
