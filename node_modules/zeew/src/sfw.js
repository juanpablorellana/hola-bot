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
    this.uri = INT + "/gif/sfw";
  }

  async neko() {
    let { body } = await req.get(this.uri + "/neko").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async kiss() {
    let { body } = await req.get(this.uri + "/kiss").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async slap() {
    let { body } = await req.get(this.uri + "/slap").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async wink() {
    let { body } = await req.get(this.uri + "/wink").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async run() {
    let { body } = await req.get(this.uri + "/run").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async dance() {
    let { body } = await req.get(this.uri + "/dance").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async hug() {
    let { body } = await req.get(this.uri + "/hug").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async cry() {
    let { body } = await req.get(this.uri + "/cry").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async punch() {
    let { body } = await req.get(this.uri + "/punch").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async wasted() {
    let { body } = await req.get(this.uri + "/wasted").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
  async waifus() {
    let { body } = await req.get(this.uri + "/waifus").set("token", this.token);
    if (body.status) throw new ZeewError(body.message);
    return body.url;
  }
}

module.exports = sfw
