import React from 'react'
import { css } from "@emotion/react"
import Layout from '@/components/layout/Layout'
import { Formulario, Campo, Submit, Error } from '@/components/ui/Form'
import useValidacion from 'hooks/useValidation'
import validarCrearCuenta from 'validacion/validar-crear-cuenta'

const ESTADO_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {
  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(ESTADO_INICIAL, validarCrearCuenta, crearCuenta);
  const { nombre, email, password } = valores
  
  function crearCuenta() {
    console.log("Creando")
  }

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Crear cuenta
          </h1>
          <Formulario onSubmit={handleSubmit} no noValidate>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.nombre && <Error>{errores.nombre}</Error>}

            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.email && <Error>{errores.email}</Error>}

            <Campo>
              <label htmlFor="password">Email</label>
              <input
                type="password"
                id="password"
                placeholder="Contaseña"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.password && <Error>{errores.password}</Error>}

            <Submit type="submit" value="Crear cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}

export default CrearCuenta;