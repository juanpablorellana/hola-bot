const { ZeewError } = require("../utils/ZeewError");

const cards = require("./cards");
const filter = require("./filter");

class img {
  constructor(token) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.card = new cards(token);
    this.filter = new filter(token);
  }
}

module.exports = img;
