# Zeew

![npm](https://i.imgur.com/MP2bABn.png)

- [Zeew](#zeew)
  - [Informacion](#informacion)
  - [Instalacion y uso](#instalacion-y-uso)
  - [Mas contenido](#mas-contenido)
- [Contenido](#contenido)
  - [Gif](#gif)
  - [IMG](#img)

## Informacion

Zeew.dev tiene una api que ayuda a muchas personas y proyectos.

Wrapper para usar la api de interaccion, perfiles, proyectos y la botlist.

La api de interaccion ayuda a tener imagenes editadas, gifs de interaccion y mas importante
olvidate de estar sufriendo por aprender canvas, jimp u otros modulos parecidos, usar otros modulos que hacen lo mismo y que pensan demaciado o no funcionan correctamente. Por que curiosamente no te dicen que instales o configures tu sistema operativo para manejar formatos de imagenes y archivos.

• Documentacion: https://docs.zeew.dev <br>
• Web: https://zeew.dev <br>
• Discord: https://zeew.dev/discord

## Instalacion y uso

La mayoria de las funciones son asyncronas eso quiere decir que tendras que usar <br>
`async / await` o `then / catch`

## Mas contenido 
Revisa la [documentación](https://docs.zeew.dev) donde te mostrara todo lo que tiene
el módulo (NPM), para que no te quedes con la información que se muestra aquí,
ya que se muestra está resumida y no muestra todo lo que contiene el módulo.

# Contenido

## Gif

```javascript
const Zeew = require("zeew");
const gif = new zeew.gif("TOKEN");

// -= Estructura =-
gif.sfw.<contenido>
gif.nsfw.<contenido>

// -= Ejemplo =-
gif.sfw.dance()
gif.nsfw.maid()
```

- **Contenido SFW**

| Funcion | Descripcion |
| ------- | :---------: |
| neko    | Chicas gato |
| kiss    |    beso     |
| slap    |  bofetada   |
| wink    |    giño     |
| run     |   correr    |

- **Contenido NSFW**

| Funcion  | Descripcion  |
| -------- | :----------: |
| maid     |  sirvientas  |
| boobs    | pechonalidad |
| hentai   |    hentai    |
| futunari |     7w7      |
| pussy    |     7w7      |

## IMG

```javascript
const Zeew = require("zeew");
const img = new Zeew.img("TOKEN");

// -= Estructura =-
img.<categoria>.<funcion>

// -= Ejemplo =-
// Filtros
img.filter.circulo("URL DE UNA IMAGEN")
// Bienvenida
const card = new img.card
      .bienvenida()
      .token(key)
      .estilo("classic") // mas estilos en la doc
      .avatar("URL DEL AVATAR")
      .fondo("URL DEL FONDO")
      .colorTit("#FF3DB0")
      .titulo("Bienvenido")
      .colorDesc("#fff")
      .descripcion("Tenemos un nuevo usuario");
const render = await img.card.render(card);
```

- **categoria**

| Funcion    |       Descripcion       |
| ---------- | :---------------------: |
| bienvenida | Tarjetas de bienvenidas |
| filter     |   filtros para fotos    |

- **funcion filter**

| Funcion    |            Descripcion             |             Valor |
| ---------- | :--------------------------------: | ----------------: |
| triggered  |             triggered              |            imagen |
| sepia      | tonos naranjas con poco saturacion |            imagen |
| invertir   | Invierte los colores de la imagen  |            imagen |
| gris       |      converte a tonos grises       |            imagen |
| desenfoque |        desenfoca una imagen        | imagen & cantidad |