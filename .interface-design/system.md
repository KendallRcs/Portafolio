# Interface design system

## Direction

Portfolio técnico-editorial para un frontend developer que conecta producto, interfaz y código. Debe sentirse preciso, oscuro, estructurado y con craft visible: más cercano a un case file de producto que a una galería genérica de cards.

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

Lenguaje de “product spec / case file”: bloques de código, labels monoespaciados, numeración, micro-specs por proyecto y trazas técnicas. La firma debe aparecer en hero, capacidades, cards de proyecto, modal y contacto.

## Depth and surfaces

- Estrategia: borders sutiles + cambios mínimos de superficie; sombras solo para elementos que se elevan.
- Dark surfaces: base `--ink`, cards `--ink-soft`, hover/elevated `--ink-panel`.
- Light surfaces: base `--paper`, elevated `--paper-bright`.
- Borders deben ser de baja opacidad; evitar contornos fuertes.

## Typography and hierarchy

- Fuente principal: Inter / system sans.
- Código y specs: SFMono/Consolas/Liberation Mono.
- Display: grande, peso alto, tracking negativo.
- Body: 0.9–1rem con line-height amplio.
- Labels/specs: 0.62–0.78rem, uppercase, tracking alto, peso 800+.
- Jerarquía por peso + color + espacio, no solo tamaño.

## Spacing and radius

- Base visual: múltiplos de 4px/8px.
- Cards de producto: 24–32px de padding.
- Secciones: 88–148px vertical según viewport.
- Radius scale: small 14px, medium 24px, large 36px; hero visual puede usar radio expresivo asimétrico.

## Component patterns

- Button primary: 52px min-height, pill, 22px horizontal padding, 0.9rem/800.
- Project card: button real, dark surface, media blueprint, specs grid, stack chips, CTA con label tipo case file.
- Tech section desktop: capability board oscuro en 6 pasos + 4 tarjetas visibles con superficie clara, borde sutil y chips de tecnología.
- Tech card: number label, trace monoespaciada y chips de tecnología.
- Contact form: paper surface, inputs inset con fondo muy suave, focus visible por borde + sombra inset.
- Hero visual: portrait + grid + code card; no ocultarlo por completo en mobile, usar variante compacta.
- Project modal: case file con resumen fuerte, ficha técnica + tecnologías al costado del resumen, galería y notas Challenge / Approach / Outcome. No duplicar una sección "El proyecto" si la historia ya está cubierta por resumen/notas. En desktop mantenerlo sin scroll interno en pantallas normales: max-height aprox. 760px, imagen de galería aprox. 220–280px.
- Iconografía: usar `lucide-react` para iconos funcionales de UI (acciones, contacto, estado, case files, navegación visual). Mantener `devicon` para tecnologías y para enlaces sociales de marca cuando se pida conservar el estilo original.

## Avoid

- Cards de portfolio genéricas sin rol/plataforma/contexto.
- Gradientes o azul decorativo sin función.
- Colores hardcodeados fuera de tokens cuando representen una decisión reusable.
- Hover que cambie layout.
- Remover outlines sin reemplazo visible.
- Usar símbolos ASCII o caracteres sueltos como iconos decorativos (`->`, flechas unicode, chevrons manuales, etc.). Si hace falta iconografía nueva, usar una librería de iconos adecuada para React y consistente con el proyecto; si no aporta función, omitir el icono.
