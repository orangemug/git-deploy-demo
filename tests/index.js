const assert = require("assert");
const main = require("../");
const pkgJson = require("../package.json");

assert.equal(main, pkgJson.version);
