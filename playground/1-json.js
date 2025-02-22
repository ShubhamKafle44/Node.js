const fs = require("fs");
const { json } = require("stream/consumers");

readData = fs.readFileSync("1-json.json").toString();
parsed_readData = JSON.parse(readData);

parsed_readData["name"] = "Shubham";
parsed_readData["age"] = "21";

readData = JSON.stringify(parsed_readData);

fs.writeFileSync("1-json.json", readData);
