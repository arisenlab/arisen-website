const Wordpress = require("wpapi");
const backendURL = "http://samahan-api.addu.edu.ph";

const wp = new Wordpress({ endpoint: `${backendURL}/wp-json` });

module.exports = wp;
