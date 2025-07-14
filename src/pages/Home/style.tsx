import styled, { keyframes, css } from "styled-components";

interface ButtonProps {
    loading?: boolean;
}


export const Container = styled.div`
    max-width: 700px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

export const DeleteButton = styled.button`
    background-color: transparent;
    color: #0d2636;
    border: none;
    padding: 8px 7px;
`

export const List = styled.ul`
    margin-top: 20px;

    li {
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #DDD;

        h3 {
            font-size: 18px;
            margin-bottom: 5px;
        }

        a {
            color: #0d2636;
            font-weight: bold;
            display: inline-block;
            margin-top: 10px;
        }
    }
`