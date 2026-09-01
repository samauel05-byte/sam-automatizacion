# Sam Automatización

Sitio web de **Sam Automatización**, empresa de tecnología y automatización para negocios en República Dominicana.

🔗 **Sitio en vivo:** [sam-automatizacion.vercel.app](https://sam-automatizacion.vercel.app)

## Servicios

- **Facturador Electrónico** — Emisión y gestión de comprobantes fiscales electrónicos (e-CF).
- **NALA — Chatbot 606, 607 e IR-17** — Asistente conversacional vía web que genera los reportes de Compras (606), Ventas (607) e IR-17 para la DGII.
- **Servidor de Dominio** — Registro, configuración y administración de dominios.
- **Servidor de Correo** — Correos profesionales con dominio propio.
- **Creación de Páginas Web** — Diseño y desarrollo de sitios funcionales a la medida.

## Stack técnico

Sitio estático, sin backend ni build step:

- HTML5 + CSS puro (`css/style.css`)
- JavaScript vanilla (`js/main.js`, `js/footer.js`)
- Fuentes: Google Fonts (Poppins, JetBrains Mono)

## Estructura

```
index.html                  Página de inicio
servicios.html               Servicios y planes de precios
nosotros.html                Quiénes somos
preguntas-frecuentes.html    FAQ
contacto.html                Formulario de contacto
css/style.css                Estilos del sitio
js/main.js                   Menú, FAQ, animaciones, formulario
js/footer.js                 Footer compartido entre páginas
assets/                      Favicon e íconos
```

## Despliegue

El repositorio está conectado a Vercel: cada push a `main` se publica automáticamente en producción, y cada Pull Request genera un deploy de vista previa.
