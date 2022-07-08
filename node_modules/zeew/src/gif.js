const { ZeewError } = require("../utils/ZeewError");

const sfw = require("./sfw");
const nsfw = require("./nsfw");

class gif {
  constructor(token) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.sfw = new sfw(token);
    this.nsfw = new nsfw(token)
  }
}

module.exports = gif;
