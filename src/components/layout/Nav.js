import React from 'react'
import Link from 'next/link';
import styled from '@emotion/styled';

const NavComponent = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type {
            margin-right: 0;
        }
    }
`

const Nav = () => {
  return (
    <NavComponent>
      <Link href="/">Inicio</Link>
      <Link href="/popular">Popular</Link>
      <Link href="/nuevo-producto">Nuevo Producto</Link>
    </NavComponent>
  );
}

export default Nav