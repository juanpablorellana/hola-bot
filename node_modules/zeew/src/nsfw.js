const req = require("node-superfetch");
const { ZeewError } = require("../utils/ZeewError");
const { INT } = require("../utils/key");

/**
 * GIFs
 */
class sfw {
  /**
   * @param {string} token
   */
  constructor(token) {
    if (!token) throw new ZeewError("Debes Colocar un Token");
    this.token = token;
    this.uri = INT + "/gif/nsfw";
  }

  async maid() {
    let { body } = await req.get(this.uri + "/maid").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async boobs() {
    let { body } = await req.get(this.uri + "/boobs").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async furry() {
    let { body } = await req.get(this.uri + "/furry").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
}

module.exports = sfw
