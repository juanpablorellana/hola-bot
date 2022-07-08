const req = require("node-superfetch");
const { ZeewError } = require("../utils/ZeewError");
const { INT } = require("../utils/key");
const request = require("node-superfetch");

class card {
  constructor(token) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.bienvenida = require("./Bienvenida");
  }

  async render(render) {
    try {
      if (!render) throw new ZeewError("Debes colocar el render");
      if (typeof render === "function")
        throw new ZeewError("Debes colocar el render");
      if (!render.estilo)
        throw new ZeewError("Esta propiedad hace render a la bienvenida");
      const jsonB = JSON.stringify(render);
      const jsonP = JSON.parse(jsonB);

      const { body } = await request
        .get(`${INT}/bw/${jsonP.estilo}`)
        .set("token", render.token)
        .query(jsonP);

      if (body.status == 404) throw new ZeewError(body.mensaje);

      return body;
    } catch (error) {
      console.log(`Zeew.API-Error: ${error.message}`);
    }
  }
}

module.exports = card;
