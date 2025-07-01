// Menú responsive
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Limpiar errores previos
            clearErrors();

            let isValid = true;

            // Validar nombre
            const nombre = document.getElementById('nombre');
            if (!nombre.value.trim()) {
                showError('nombre', 'El nombre es obligatorio');
                isValid = false;
            } else if (nombre.value.trim().length < 2) {
                showError('nombre', 'El nombre debe tener al menos 2 caracteres');
                isValid = false;
            } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value.trim())) {
                showError('nombre', 'El nombre solo puede contener letras y espacios');
                isValid = false;
            }

            // Validar email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showError('email', 'El email es obligatorio');
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                showError('email', 'Por favor ingresa un email válido');
                isValid = false;
            }

            // Validar teléfono (opcional pero si se ingresa debe ser válido)
            const telefono = document.getElementById('telefono');
            if (telefono.value.trim()) {
                const telefonoRegex = /^[\+]?[0-9\s\-\(\)]{8,15}$/;
                if (!telefonoRegex.test(telefono.value.trim())) {
                    showError('telefono', 'Por favor ingresa un teléfono válido');
                    isValid = false;
                }
            }

            // Validar mensaje
            const mensaje = document.getElementById('mensaje');
            if (!mensaje.value.trim()) {
                showError('mensaje', 'El mensaje es obligatorio');
                isValid = false;
            } else if (mensaje.value.trim().length < 10) {
                showError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
                isValid = false;
            }

            // Validar checkbox de términos
            const acepto = document.getElementById('acepto');
            if (!acepto.checked) {
                showError('acepto', 'Debes aceptar los términos y condiciones');
                isValid = false;
            }

            if (isValid) {
                // Simular envío del formulario
                submitForm();
            }
        });
    }

    // Validación en tiempo real
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        input.addEventListener('input', function () {
            // Limpiar error cuando el usuario empiece a escribir
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorElement = document.getElementById(this.id + '-error');
                if (errorElement) {
                    errorElement.textContent = '';
                }
            }
        });
    });
});

function validateField(field) {
    const fieldId = field.id;
    const value = field.value.trim();

    switch (fieldId) {
        case 'nombre':
            if (!value) {
                showError('nombre', 'El nombre es obligatorio');
            } else if (value.length < 2) {
                showError('nombre', 'El nombre debe tener al menos 2 caracteres');
            } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
                showError('nombre', 'El nombre solo puede contener letras y espacios');
            } else {
                clearFieldError('nombre');
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                showError('email', 'El email es obligatorio');
            } else if (!emailRegex.test(value)) {
                showError('email', 'Por favor ingresa un email válido');
            } else {
                clearFieldError('email');
            }
            break;

        case 'telefono':
            if (value) {
                const telefonoRegex = /^[\+]?[0-9\s\-\(\)]{8,15}$/;
                if (!telefonoRegex.test(value)) {
                    showError('telefono', 'Por favor ingresa un teléfono válido');
                } else {
                    clearFieldError('telefono');
                }
            } else {
                clearFieldError('telefono');
            }
            break;

        case 'mensaje':
            if (!value) {
                showError('mensaje', 'El mensaje es obligatorio');
            } else if (value.length < 10) {
                showError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
            } else {
                clearFieldError('mensaje');
            }
            break;
    }
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + '-error');

    if (field) {
        field.classList.add('error');
    }

    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + '-error');

    if (field) {
        field.classList.remove('error');
    }

    if (errorElement) {
        errorElement.textContent = '';
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const fieldElements = document.querySelectorAll('.error');

    errorElements.forEach(element => {
        element.textContent = '';
    });

    fieldElements.forEach(element => {
        element.classList.remove('error');
    });
}

function submitForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');

    // Simular delay de envío
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    setTimeout(() => {
        form.style.display = 'none';
        successMessage.style.display = 'block';

        // Scroll al mensaje de éxito
        successMessage.scrollIntoView({ behavior: 'smooth' });

        // Resetear el formulario después de 5 segundos
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMessage.style.display = 'none';
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 5000);

    }, 2000);
}

// Efectos adicionales
document.addEventListener('DOMContentLoaded', function () {
    // Animación suave para el scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contador de caracteres para el textarea
    const textarea = document.getElementById('mensaje');
    if (textarea) {
        const maxLength = 500;
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = 'text-align: right; font-size: 0.8rem; color: #666; margin-top: 0.25rem;';

        textarea.parentNode.appendChild(counter);

        function updateCounter() {
            const remaining = maxLength - textarea.value.length;
            counter.textContent = `${textarea.value.length}/${maxLength} caracteres`;

            if (remaining < 50) {
                counter.style.color = '#e74c3c';
            } else {
                counter.style.color = '#666';
            }
        }

        textarea.addEventListener('input', updateCounter);
        textarea.setAttribute('maxlength', maxLength);
        updateCounter();
    }

    // Efecto de aparición en scroll para las cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.service-card, .info-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
});
