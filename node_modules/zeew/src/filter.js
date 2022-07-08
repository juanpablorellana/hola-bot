const req = require("node-superfetch");
const { ZeewError } = require("../utils/ZeewError");
const { INT } = require("../utils/key");

class Filter {
  constructor(token) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.uri = INT + "/img";
  }

  /**
   * @param {img} img URL de una imagen
   * @returns {img} <Buffer>
   */
  async triggered(img) {
    if(!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/triggered")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async sepia(img) {
    if(!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/sepia")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async invertir(img) {
    if(!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/invertir")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async gris(img) {
    if(!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/gris")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @param {pixels} pixels Cantidad de desenfoque
   * @returns {img} <Buffer>
   */
  async desenfoque(img, pixel = 5) {
    if(!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/desenfoque")
      .set("token", this.token)
      .query({
        avatar: img,
        pixel,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @param {size} size Tamaño del pixel
   * @returns {img} <Buffer>
   */
  async pixel(img, pixel = 10) {
    if(!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/pixel")
      .set("token", this.token)
      .query({
        avatar: img,
        pixel,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async gay(img) {
    if(!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/gay")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URL de una imagen
   * @returns {img} <Buffer>
   */
  async circulo(img) {
    if(!img) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/circulo")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  async shipeo(img1, img2, ship) {
    if(!img1) throw new ZeewError("Debes colocar una imagen");
    if(!img2) throw new ZeewError("Debes colocar una imagen");
    if(!ship) throw new ZeewError("Debes colocar una imagen");
    let { body } = await req
      .get(this.uri + "/shipeo")
      .set("token", this.token)
      .query({
        avatar: img1,
        avatar2: img2,
        ship: ship,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
}

module.exports = Filter;
