export default function validarCrearCuenta(valores) {
    let errores = {}

    if(!valores.nombre) {
        errores.nombre = "Introduce un nombre"
    }

    if (!valores.email) {
        errores.email = "Introduce un email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email = "Email no válido"
    }
    
    if(!valores.password) {
        errores.password = "Introduce un password";
    } else if (valores.password.length < 6) {
        errores.password = "El password debe tener al menos 6 caracteres";
    }

    return errores
}