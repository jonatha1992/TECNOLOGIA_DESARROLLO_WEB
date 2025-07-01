# Global Consultoría IT - Página Web

## Descripción
Página web corporativa para Global Consultoría IT, desarrollada con HTML5, CSS3 y JavaScript vanilla. El sitio es completamente responsivo y cuenta con formulario de contacto validado.

## Estructura del Proyecto
```
proyecto_web/
├── index.html          # Página principal
├── contacto.html       # Formulario de contacto
├── nosotros.html       # Página sobre la empresa
├── servicios.html      # Página de servicios
├── sectores.html       # Página de mercados verticales
├── styles.css          # Estilos CSS principales
├── script.js           # JavaScript para interactividad
└── README.md           # Este archivo
```

## Características

### ✅ Diseño Responsivo
- Adaptable a dispositivos móviles, tablets y desktop
- Menú hamburguesa para móviles
- Grid layouts flexibles

### ✅ Navegación
- Menú principal con 5 secciones
- Efectos hover en los enlaces
- Indicador de página activa

### ✅ Formulario de Contacto
- Validación HTML5 y JavaScript
- Validación en tiempo real
- Mensajes de error personalizados
- Campos obligatorios marcados
- Contador de caracteres para textarea
- Simulación de envío exitoso

### ✅ Interactividad JavaScript
- Menú responsive con hamburguesa
- Validación completa del formulario
- Efectos de scroll suave
- Animaciones de aparición
- Manejo de errores y éxito

### ✅ Páginas Incluidas
1. **Inicio**: Hero section con presentación de la empresa
2. **Nosotros**: Historia, misión y visión
3. **Servicios**: Detalle de servicios ofrecidos
4. **Sectores**: Mercados verticales especializados
5. **Contacto**: Formulario completo con validación

## Tecnologías Utilizadas
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con flexbox y grid
- **JavaScript ES6+**: Interactividad y validaciones
- **Responsive Design**: Mobile-first approach

## Cómo Usar

### Opción 1: Abrir directamente
1. Navegar a la carpeta `proyecto_web`
2. Hacer doble clic en `index.html`
3. El sitio se abrirá en tu navegador predeterminado

### Opción 2: Con Live Server (VS Code)
1. Instalar la extensión "Live Server" en VS Code
2. Abrir la carpeta `proyecto_web` en VS Code
3. Click derecho en `index.html` → "Open with Live Server"
4. El sitio se abrirá con auto-refresh

### Opción 3: Servidor local
```bash
# Con Python
cd proyecto_web
python -m http.server 8000

# Con Node.js
npx serve .

# Luego abrir http://localhost:8000
```

## Funcionalidades del Formulario

### Campos del Formulario
- **Nombre**: Obligatorio, mínimo 2 caracteres, solo letras
- **Email**: Obligatorio, formato válido
- **Teléfono**: Opcional, formato numérico válido
- **Empresa**: Opcional
- **Servicio**: Lista desplegable
- **Mensaje**: Obligatorio, mínimo 10 caracteres, máximo 500
- **Términos**: Checkbox obligatorio

### Validaciones Implementadas
- Validación HTML5 nativa
- Validación JavaScript personalizada
- Validación en tiempo real (al perder foco)
- Expresiones regulares para formato
- Mensajes de error específicos
- Prevención de envío con errores

## Personalización

### Cambiar Colores
Modificar las variables CSS en `styles.css`:
```css
/* Colores principales */
--primary-color: #3498db;
--secondary-color: #2c3e50;
--accent-color: #ff6b6b;
```

### Cambiar Contenido
- **Logo**: Modificar texto en cada archivo HTML
- **Información de contacto**: Editar en `contacto.html`
- **Servicios**: Actualizar en `servicios.html`
- **Sectores**: Personalizar en `sectores.html`

### Agregar Funcionalidad
El formulario está preparado para integración con:
- Servicios de email (EmailJS, Formspree)
- APIs de backend
- Sistemas de CRM
- Google Analytics

## Compatibilidad
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 16+
- ✅ Dispositivos móviles iOS/Android

## Mejoras Futuras
- [ ] Integración con servicio de email real
- [ ] Google Maps en página de contacto
- [ ] Galería de proyectos
- [ ] Blog/noticias
- [ ] Modo oscuro
- [ ] Múltiples idiomas
- [ ] Sistema de comentarios
- [ ] Chat en vivo

## Soporte
Para dudas o personalizaciones, contactar a Global Consultoría IT.

---
*Desarrollado como parte del Parcial 2 - Tecnología de Desarrollo Web*
