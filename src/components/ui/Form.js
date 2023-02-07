import styled from "@emotion/styled";

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;
`

export const Campo = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    label {
        flex: 0 0 150px;
        font-size: 1.8rem;
    }

    input {
        flex: 1;
        padding: 1rem;
    }
`

export const Submit = styled.input`
    background-color: var(--naranja);
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-size: 'PT Sans', sans-serif;
    font-weight: 700;

    &:hover {
        cursor: pointer;
    }
`

export const Error = styled.p`
    font-family: 'PT Sans', serif;
    font-weight: 700;
    font-size: 1.2rem;
    color: red;
    text-align: right;
    text-transform: uppercase;
    margin: 1rem 0 2rem 0;
`
