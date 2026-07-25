# Interface design system

## Direction

Portfolio técnico-editorial para un frontend developer que conecta producto, interfaz y código. Debe sentirse preciso, construido y direccional. La identidad nace del isotipo de Kendall: una K formada por los ángulos de `/` y `<`. Esa idea se traduce a geometría y espacio negativo, nunca a caracteres ASCII usados como decoración.

## Domain exploration

- Producto digital: decisiones, contexto, usuario, resultado.
- Frontend craft: componentes, estados, accesibilidad, responsive, mantenibilidad.
- Sistemas: tokens, grids, specs, trazabilidad.
- Implementación real: web, mobile, backend, deployment.
- Trabajo seleccionado: cada proyecto se presenta como caso, no como thumbnail.

## Color world

- Pantalla oscura / IDE: `--ink`, `--ink-soft`, `--ink-panel`.
- Papel frío de documentación: `--paper`, `--paper-bright`.
- Azul eléctrico como foco y acción: `--accent`, `--accent-hover`.
- Azul suave de blueprint/spec: `--blue`, `--blue-paper`.
- Líneas técnicas: `--line`, `--line-soft`, `--line-dark-soft`.

## Signature

Lenguaje **K-Cut**: dos cortes angulares convergentes, marcos abiertos y contenido revelado mediante espacio negativo. Debe reconocerse en hero, navegación, transiciones de sección, cards de proyecto, formulario, modal y footer.

- Construir la firma con `clip-path`, máscaras, pseudo-elementos y bordes; no con texto `</>` decorativo.
- Los cortes principales usan `--cut-sm`, `--cut-md` y `--cut-lg`.
- El azul aparece en el borde de corte, el estado activo, la acción principal o el contenido revelado.
- En títulos de sección, la frase clave puede ir en azul; el casing se escribe de forma intencional en el contenido y no se fuerza con CSS.
- La firma es estructural. Evitar repetirla como ornamento pequeño sin función.

## Depth and surfaces

- Estrategia: borders sutiles + cambios mínimos de superficie; sombras sólidas desplazadas solo cuando una superficie se eleva.
- Dark surfaces: base `--ink`, cards `--ink-soft`, hover/elevated `--ink-panel`.
- Light surfaces: base `--paper`, elevated `--paper-bright`.
- Borders deben ser de baja opacidad; evitar contornos fuertes.

## Typography and hierarchy

- Fuente principal: Inter / system sans.
- Código y datos técnicos reales: SFMono/Consolas/Liberation Mono.
- Display: grande, peso alto, tracking negativo.
- Body: 0.9–1rem con line-height amplio.
- Labels/specs: 0.62–0.78rem, uppercase, tracking moderado, peso 800+.
- Jerarquía por peso + color + espacio, no solo tamaño.

## Spacing and radius

- Base visual: múltiplos de 4px/8px.
- Cards de producto: 24–32px de padding.
- Secciones: 88–148px vertical según viewport.
- Radius scale: small 8px, medium 12px, large 16px.
- Superficies expresivas K-Cut: radio óptico de 2px + esquina recortada; los pills se reservan para estados o tags que realmente lo necesiten.
- Cut scale: small 12px, medium 24px, large 52px.

## Component patterns

- Button primary: 52px min-height, corte K-Cut small, 22px horizontal padding, 0.9rem/800.
- Project card: button real, dark surface K-Cut, media sin grid ni círculo decorativo, specs grid, stack tags y CTA case file.
- Tech section desktop: tablero continuo 2×2 con borde sutil; tecnologías en una grilla dominante de dos columnas, iconos de 1.25rem y líneas ligeras con guía angular azul.
- Tech card: título y descripción compactos; la lista de tecnologías debe ocupar el mayor peso visual del bloque. Hover sin desplazar layout.
- Contact: dos columnas de igual ancho en desktop —mensaje y formulario—, apiladas en tablet/mobile. El formulario es el canal principal; no repetir correo ni teléfono como datos públicos dentro de la sección.
- Contact form: paper surface K-Cut, inputs inset con fondo muy suave, focus visible por borde + sombra inset, estado de envío bloqueado.
- WhatsApp: acción flotante K-Cut verde con texto en desktop y formato compacto de 52px en mobile; debe respetar safe areas y mantener una etiqueta accesible.
- About: superficie `--paper-bright`, composición editorial de texto + retrato y una franja compacta de enfoque, plataformas y objetivo. El posicionamiento profesional es fullstack y de producto, no exclusivamente frontend.
- About portrait: usar el PNG transparente `about_me.png` dentro de un marco K-Cut oscuro; dos columnas en desktop y texto antes del retrato al apilarse en tablet/mobile.
- Hero: composición centrada sin retrato. Nombre en una fila cuando exista ancho suficiente y máximo dos filas en tablet/mobile.
- Hero tech cloud: todas las tecnologías —incluyendo Next.js— son enlaces a `#tech`, con superficies K-Cut, icono + nombre, hover/focus/active claros y flotación individual solo por `transform`.
- Hero desktop: burbujas de aproximadamente 50px de alto, iconos de 1.35rem y cinco bandas periféricas que aprovechan el viewport sin invadir la zona central.
- Hero responsive: desktop distribuye tecnologías alrededor del contenido; tablet/mobile usa dos órbitas —superior e inferior— que dejan libre la zona central.
- Hero narrow (`≤420px`): seis filas escalonadas —tres superiores y tres inferiores—, burbujas visuales de 32px y hit area extendida a 44px; hero mínimo de 860px.
- Hero motion: pausar la flotación cuando el hero sale del viewport y desactivarla con `prefers-reduced-motion`.
- Hero: sin grid decorativo, glow difuso, retrato ni ventana de código flotante.
- Project modal: case file con resumen fuerte, ficha técnica + tecnologías al costado del resumen, galería y notas Challenge / Approach / Outcome. No duplicar una sección "El proyecto" si la historia ya está cubierta por resumen/notas. En desktop mantenerlo sin scroll interno en pantallas normales: max-height aprox. 760px, imagen de galería aprox. 220–280px.
- Iconografía: usar `lucide-react` para iconos funcionales de UI (acciones, contacto, estado, case files, navegación visual). Mantener `devicon` para tecnologías y para enlaces sociales de marca cuando se pida conservar el estilo original.
- Motion: el momento principal es el ecosistema de tecnologías flotantes del hero; el resto conserva microinteracciones de `180–280ms`. Respetar `prefers-reduced-motion`.

## Avoid

- Cards de portfolio genéricas sin rol/plataforma/contexto.
- Dark grids, glows, círculos decorativos, ventanas de código flotantes y fondos blueprint usados solo para comunicar “developer”.
- Combinar IDE, blueprint, editorial y SaaS como metáforas visuales independientes.
- Usar pills para todas las acciones o tags.
- Etiquetas triangulares azules superpuestas en esquinas de cards, formularios o modales; el corte debe existir en la silueta, no como sticker.
- Gradientes o azul decorativo sin función.
- Colores hardcodeados fuera de tokens cuando representen una decisión reusable.
- Hover que cambie layout.
- Remover outlines sin reemplazo visible.
- Usar símbolos ASCII o caracteres sueltos como iconos decorativos (`->`, flechas unicode, chevrons manuales, etc.). Si hace falta iconografía nueva, usar una librería de iconos adecuada para React y consistente con el proyecto; si no aporta función, omitir el icono.
