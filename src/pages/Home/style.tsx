import styled, { keyframes, css } from "styled-components";

interface ButtonProps {
    loading?: boolean;
}


export const Container = styled.div`
    max-width: 700px;
    background-color: #fff;
    padding: 30px;
    margin: 80px auto;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    h1 {
        font-size: 20px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`

export const Form = styled.form`
    margin-top: 30px;
    display: flex;

    input {
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
`

const animate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Button = styled.button.attrs<ButtonProps>(props => ({
    disabled: props.loading ?? false,
}))<ButtonProps>`
    background-color: #0d2636;
    border: none;
    border-radius: 4px;
    margin-left:  10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${props => props.loading && css`
        svg {
            animation: ${animate} 2s linear infinite;
        }
    `}
`