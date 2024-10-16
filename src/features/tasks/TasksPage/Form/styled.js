import styled from "styled-components";

export const FormWrapper = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px;
    }
`;

export const Input = styled.input`
    flex-grow: 1;
    padding: 11px;
    border: 1px solid ${({ theme }) => theme.color.alto};
    overflow: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
    }
`;

export const FormButton = styled.button`
    text-transform: capitalize;
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.teal};
    border: 2px solid ${({ theme }) => theme.color.transparent};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%)
    }

    &:active {
        border: 2px solid black;
        filter: brightness(120%)
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
    }
`;
