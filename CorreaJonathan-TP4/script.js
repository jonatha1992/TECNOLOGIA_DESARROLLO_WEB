let pantalla;
let operacionActual = '';
let operadorAnterior = '';
let esperandoOperando = false;

function agregar(valor) {
    if (pantalla.value === 'Error' || pantalla.value === 'No se puede dividir por cero') {
        limpiar();
    }

    if (esperandoOperando) {
        if (!isNaN(valor) || valor === '.') {
            pantalla.value = valor;
            esperandoOperando = false;
        } else {
            pantalla.value += valor;
        }
    } else {
        if (pantalla.value === '0' && valor !== '.') {
            pantalla.value = valor;
        } else {
            pantalla.value += valor;
        }
    }
}

function limpiar() {
    pantalla.value = '0';
    operacionActual = '';
    operadorAnterior = '';
    esperandoOperando = false;
    pantalla.classList.remove('error');
}

function borrarUltimo() {
    if (pantalla.value === 'Error' || pantalla.value === 'No se puede dividir por cero') {
        limpiar();
        return;
    }

    if (pantalla.value.length > 1) {
        pantalla.value = pantalla.value.slice(0, -1);
    } else {
        pantalla.value = '0';
    }
}

function calcular() {
    try {
        let expresion = pantalla.value;
        expresion = expresion.replace(/×/g, '*');

        if (expresion.includes('/0')) {
            mostrarError('No se puede dividir por cero');
            return;
        }

        let resultado = eval(expresion);

        if (!isFinite(resultado)) {
            mostrarError('Error');
            return;
        }

        pantalla.value = resultado;
        esperandoOperando = true;

    } catch (error) {
        mostrarError('Error');
    }
}

function mostrarError(mensaje) {
    pantalla.value = mensaje;
    pantalla.classList.add('error');
    esperandoOperando = true;
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        agregar(key);
    }
    else if (key === '+') {
        agregar('+');
    }
    else if (key === '-') {
        agregar('-');
    }
    else if (key === '*') {
        agregar('*');
    }
    else if (key === '/') {
        event.preventDefault();
        agregar('/');
    }
    else if (key === '.') {
        agregar('.');
    }
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calcular();
    }
    else if (key === 'Escape' || key.toLowerCase() === 'c') {
        limpiar();
    }
    else if (key === 'Backspace') {
        borrarUltimo();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    pantalla = document.getElementById('pantalla');
    const botones = document.querySelectorAll('button');

    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            const valor = this.getAttribute('data-value');
            const accion = this.getAttribute('data-action');

            if (valor) {
                agregar(valor);
            } else if (accion === 'clear') {
                limpiar();
            } else if (accion === 'backspace') {
                borrarUltimo();
            } else if (accion === 'calculate') {
                calcular();
            }

            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });

        boton.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        });

        boton.addEventListener('mouseleave', function () {
            this.style.boxShadow = '';
        });
    });
});

function formatearNumero(numero) {
    if (numero.toString().length > 10) {
        return Number(numero).toExponential(5);
    }
    return numero;
}
