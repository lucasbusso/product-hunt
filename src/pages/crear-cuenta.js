import React from 'react'
import { css } from "@emotion/react"
import Layout from '@/components/layout/Layout'
import { Formulario, Campo, Submit } from '@/components/ui/Form'

const CrearCuenta = () => {
  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Crear cuenta</h1>
          <Formulario>
            <Campo>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Nombre" name="name" />
            </Campo>
            <Campo>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Email" name="email" />
            </Campo>
            <Campo>
              <label htmlFor="password">Email</label>
              <input
                type="password"
                id="password"
                placeholder="Contaseña"
                name="password"
              />
            </Campo>
            <Submit type='submit' value='Crear cuenta'/>
          </Formulario>
        </>
      </Layout>
    </div>
  );
}

export default CrearCuenta;