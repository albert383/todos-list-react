import styled from "styled-components";

export const FormWrapper = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;

    @media (max-width: 767px) {
    padding: 10px;
    }
`;

export const Input = styled.input`
    flex-grow: 1;
    padding: 11px;
    border: 1px solid #dddddd;
    overflow: auto;

    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;

export const FormButton = styled.button`
    text-transform: capitalize;
    padding: 10px;
    color: #ffffff;
    background-color: darkcyan;
    border: 2px solid transparent;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: rgb(0, 163, 163);
        transform: scale(102%);
    }

    &:active {
        border: 2px solid black;
        background-color: rgb(0, 201, 201);
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;
