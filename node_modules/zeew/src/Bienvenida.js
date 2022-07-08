class Bienvenida {

    constructor(datos = {}) {
        let keys = Object.keys(datos)
        if (keys.length > 0) {
            for (var i in keys) this[keys[i]] = datos[keys[i]]
        }
    }
    token(token) {
        this.token = token
        return this;
    }
    titulo(tit) {
        this.tit = tit;
        return this;
    }
    colorTit(ctit) {
        this.colortit = ctit
        return this
    }
    colorDesc(cdesc) {
        this.colordesc = cdesc

        return this;
    }
    descripcion(desc) {
        this.desc = desc

        return this;
    }
    avatar(avatar) {
        this.avatar = avatar;
        return this;
    }
    fondo(fondo) {
        this.fondo = fondo;
        return this;
    }
    estilo(estilo) {
        this.estilo = estilo;
        return this;
    }
    colorCirculo(colorC) {
        this.colorCircle = colorC;
        return this; 
    }
    font(font) {
        this.font = font;
        return this;
    }
}
module.exports = Bienvenida;
