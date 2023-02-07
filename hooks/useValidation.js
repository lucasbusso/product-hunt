import React, { useEffect, useState } from 'react'

const useValidacion = (stateInicial, validar, fn) => {
    const [valores, setValores] = useState(stateInicial)
    const [errores, setErrores] = useState({})
    const [submitForm, setSubmitForm] = useState(false)

    useEffect(() => {
        if(submitForm) {
            const noErrores = Object.keys(errores).length === 0

            if(noErrores) {
                fn() //va a ser la funcion que se ejecuta en el componente: crearProducto, iniciarSesion o crearCuenta
            }

            setSubmitForm(false)
        }
    }, [errores, fn, submitForm])

    const handleChange = e => {
        setValores({...valores, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const erroresValidacion = validar(valores)
        setErrores(erroresValidacion)
        setSubmitForm(true)
    }

    const handleBlur = e => {
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
    }

    return {
      valores,
      errores,
      handleChange,
      handleSubmit,
      handleBlur,
    };
}

export default useValidacion