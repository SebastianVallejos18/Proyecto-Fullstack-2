# **Estudiantes:**

## **`SEBASTIAN ANDRES VALLEJOS RIOS`**
## **`DIEGO ALONSO ALVEAR MARTINEZ`**

# **Profesor:**
## **`MICHAEL BYRON CATALAN TEJO`**

>

## *Asignatura*
`DESARROLLO FULLSTACK II`
## *Seccion*
`003D`

---

# Sonido Vivo - Tienda de Instrumentos Musicales

Sitio web para **Sonido Vivo**, un catálogo en línea de instrumentos musicales y equipos de audio. Permite a los usuarios navegar por diferentes categorías de productos y agregarlos a un carrito de compras.

---

## Características

* **Catálogo Organizado:** Navegación por categorías como Guitarras, Bajos, Baterías, Teclados, Micrófonos, Accesorios y más.
* **Diseño Adaptable (Responsive):** Menú de navegación tipo *hamburger* optimizado para dispositivos móviles y escritorio.
* **Rutas Relativas:** Configuración optimizada de imágenes y assets para un despliegue sin problemas en cualquier servidor web o GitHub Pages.

---

## Lenguajes usados

* **HTML5:** Estructura semántica del sitio.
* **CSS3:** Estilos visuales y diseño responsivo (`style.css`).
* **JavaScript:** Lógica de interacción para los botones y formularios (`funcionBotonProducto.js`).

---

## Estructura del Proyecto

```text
.
├── index.html                  # Página principal / Catálogo
├── login.html                  # Página de inicio de sesión
├── registrarse.html            # Página de registro de usuario
├── contacto.html               # Formulario de contacto
├── productos.html              # Catalogo de productos                
├── image/                      ## Imágenes de productos y favicon
│   ├── favicon-32x32.png
│   ├── guitarra.jpeg
│   ├── bajo.jpeg
│   └── ...
├── js/                         ## Scripts JS
│   └── funcionBotonProducto.js
│   └── validarContacto.js
│   └── validarLogin.js
│   └── validarSignin.js
└── style/                      ## Archivos STYLE.CSS
    └── style.css
