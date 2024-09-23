import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const ButtonStyled = styled.button`
    background-color: transparent;
    color: teal;
    border: none;
    margin: 0 0 0 20px;
    transition: color 1s;
    cursor: pointer;

    @media (max-width: 767px) {
        margin: 10px;
    }

    &:disabled {
        color: rgb(155, 155, 155);
    }
`;
