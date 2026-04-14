# Síbarys Paraguay - Website Proyecto

## Descripción
Website profesional para Síbarys Paraguay / Síbarys Traslados - servicio de transporte corporativo y traslados ejecutivos en Asunción, Paraguay.

## Estructura del Proyecto
```
Sibarys_Web_Site/
├── index.html          # Página principal (HTML completo semántico)
├── css/
│   └── styles.css      # Estilos CSS custom (diseño premium, mobile-first)
├── js/
│   └── main.js        # JavaScript vanilla (sin dependencias)
├── assets/
│   └── images/         # Carpeta para imágenes (placeholder)
└── README.md           # Este archivo
```

## Características Implementadas

### SEO & Structured Data
- Meta tags completos (title, description, keywords, robots)
- Open Graph tags para Facebook
- Twitter Card tags
- Schema.org JSON-LD (TransportationService, LocalBusiness, FAQPage)
- Canonical URL
- Semántica HTML5 correcta (H1/H2/H3, landmarks, ARIA)

### Diseño & UX
- Diseño premium dark theme alineado a cliente ejecutivo/corporativo
- Mobile-first responsive
- Sistema de diseño con CSS Custom Properties
- Animaciones de scroll (Intersection Observer)
- Navegación accesible con ARIA
- Botón flotante de WhatsApp
- Formulario de cotización con validación

### Secciones Incluidas
1. Hero con estadísticas y CTAs
2. Clients logos (placeholder)
3. Servicios (6 cards con features)
4. Cobertura geográfica
5. Flota (tabs: Sedán, SUV, Vans)
6. ¿Por qué Síbarys? (diferenciadores)
7. Testimonios (3 cards)
8. FAQ (accordion accessible)
9. Contacto / Formulario de cotización
10. Footer completo con navegación

### Accesibilidad
- Skip to main content link
- ARIA labels y roles
- Keyboard navigation
- prefers-reduced-motion support
- Color contrast ratios AA

## Próximos Pasos (antes de deploy)
1. **Imágenes reales** - Reemplazar placeholders con fotos de:
   - Flota (vehículos reales)
   - Equipo/choferes
   - Operaciones
   - OG Image (1200x630px)

2. **Datos reales** - Actualizar:
   - Teléfono: +595-21-123-4567 (ejemplo)
   - Email: contacto@sibarys.com.py (ejemplo)
   - Dirección: Av. España y Juan de Ayolas, Asunción
   - Coordenadas GPS reales

3. **Integraciones** - Agregar:
   - Google Analytics 4 o GTM
   - Meta Pixel (para remarketing)
   - WhatsApp Business API real
   - Form endpoint (Formspree, Netlify Forms, o backend)

4. **Contenido** - Ajustar:
   - Testimonios con nombres/cargos reales
   - Nombres de empresas cliente
   - Logos reales de clientes

## deployment
Para hacer deploy estático en Vercel o Netlify:
```bash
# Vercel
cd Sibarys_Web_Site && npx vercel

# Netlify
cd Sibarys_Web_Site && npx netlify deploy --prod
```

## Tech Stack
- HTML5 semántico
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript vanilla ES6+ (sin frameworks)
- Google Fonts (Inter, Space Grotesk)
- SVG icons inline

## Licencia
Proyecto para presentación a cliente Síbarys Paraguay.
