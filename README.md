# Night Sound — Bio Links

Landing page tipo "Link in Bio" para **Night Sound**.  
Alojada en GitHub Pages, 100% gratuita, sin backend.

**URL:** https://layonsoft.github.io/nightsound-biolinks/

---

## Instalación local

```bash
git clone https://github.com/layonsoft/nightsound-biolinks.git
cd nightsound-biolinks
npm install
npm run dev
```

Abre http://localhost:5173/nightsound-biolinks/ en el navegador.

---

## Cambiar los links de redes sociales

Edita únicamente `src/config/socialLinks.js`:

```js
links: [
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/TU_USUARIO',  // ← cambia aquí
    icon: 'instagram',
    type: 'social',
  },
  // ...
]
```

**Para cambiar el WhatsApp de contrataciones:**
```js
{
  id: 'whatsapp',
  url: 'https://wa.me/526441234567',  // 52 = código de México, luego el número sin guiones
  // ...
}
```

---

## Cambiar el logo

1. Coloca tu logo en: `public/assets/logo.png`
2. Tamaño recomendado: **400×400px**, PNG con fondo transparente.
3. El logo se muestra en un círculo de 100×100px.

> Si el archivo no existe, se muestra el placeholder "NS" automáticamente.

---

## Cambiar colores

Edita las variables al inicio de `src/styles/global.css`:

```css
:root {
  --color-background: #080808;   /* fondo general */
  --color-surface: #111111;      /* fondo de botones */
  --color-accent: #d4af37;       /* dorado — acento principal */
  --color-accent-light: #f0cc60; /* dorado claro */
  --color-purple: #7c3aed;       /* morado */
  --color-primary: #ffffff;      /* texto blanco */
  --color-secondary: #888888;    /* texto gris */
}
```

---

## Agregar un nuevo botón

En `src/config/socialLinks.js`, añade al array `links`:

```js
{
  id: 'soundcloud',
  name: 'SoundCloud',
  url: 'https://soundcloud.com/USUARIO',
  icon: 'soundcloud',  // debe existir en SocialIcons.jsx
  type: 'music',
}
```

Para agregar el ícono, edita `src/components/icons/SocialIcons.jsx` y agrega la clave al objeto `icons` con su SVG correspondiente.

**Tipos disponibles:**
- `social` — redes sociales (Instagram, Facebook, TikTok, YouTube)
- `music` — plataformas musicales (Spotify, Apple Music...)
- `contact` — se renderiza como botón CTA dorado (solo WhatsApp por ahora)

---

## Build para producción

```bash
npm run build
```

Genera `dist/` con la aplicación lista para publicar.

---

## Deployment en GitHub Pages

### 1. Subir el repositorio

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/layonsoft/nightsound-biolinks.git
git branch -M main
git push -u origin main
```

### 2. Activar GitHub Pages

1. Abre el repositorio en GitHub.
2. Ve a **Settings** → **Pages** (menú lateral izquierdo).
3. En **Build and deployment → Source**, selecciona: **GitHub Actions**.
4. Guarda.

### 3. Verificar el deployment

Cada `git push origin main` dispara automáticamente el workflow que:
1. Instala Node 20.
2. Instala dependencias (`npm ci`).
3. Hace build (`npm run build`).
4. Publica `dist/` en GitHub Pages.

Monitorea el progreso en la pestaña **Actions** del repositorio.

La página quedará disponible en:
```
https://layonsoft.github.io/nightsound-biolinks/
```

---

## Conectar un dominio personalizado (futuro)

### Paso 1 — Actualizar Vite

En `vite.config.js`, cambia:
```js
base: '/nightsound-biolinks/'
```
a:
```js
base: '/'
```

### Paso 2 — Archivo CNAME

Crea `public/CNAME` con solo el dominio adentro:
```
nightsound.com
```

### Paso 3 — Registros DNS

Con tu proveedor de dominio, agrega:

| Tipo  | Host | Valor               |
|-------|------|---------------------|
| A     | @    | 185.199.108.153     |
| A     | @    | 185.199.109.153     |
| A     | @    | 185.199.110.153     |
| A     | @    | 185.199.111.153     |
| CNAME | www  | layonsoft.github.io |

### Paso 4 — Configurar en GitHub

1. Ve a **Settings → Pages**.
2. En **Custom domain**, escribe tu dominio (ej. `nightsound.com`).
3. Activa **Enforce HTTPS** cuando esté disponible.

La propagación DNS puede tardar de 15 minutos a 48 horas.

---

## Agregar imagen OG (Open Graph)

Para que WhatsApp, Facebook e Instagram muestren preview al compartir el link:

1. Crea una imagen **1200×630px** en JPG.
2. Guárdala como `public/assets/og-image.jpg`.
3. Haz commit y push.

---

## Agregar Analytics (futuro)

Edita `index.html` y agrega antes del `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

© 2026 Night Sound — Nogales, Sonora 🇲🇽
