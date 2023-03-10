import React from 'react'
import Link from 'next/link';
import { css } from '@emotion/react'
import styled from '@emotion/styled';
import Buscar from '../ui/Buscador'
import Nav from './Nav'
import Boton from '../ui/Boton'

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
     
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`

const Header = () => {
    const user = true

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeader>
        <div
            css={css`
                display: flex;
                align-items: center;
            `}
        >
          <Link href="/">
            <Logo>P</Logo>
          </Link>
          <Buscar />
          <Nav />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {user ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                Hola Lucas
              </p>
              <Boton backgroundColor="true">Cerrar sesion</Boton>
            </>
          ) : (
            <>
              <Link href="/login">
                <Boton>Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton>Crear cuenta</Boton>
              </Link>
            </>
          )}
        </div>
      </ContenedorHeader>
    </header>
  );
}

export default Header