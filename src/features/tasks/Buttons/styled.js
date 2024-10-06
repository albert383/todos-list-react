import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
    }
`;

export const ButtonStyled = styled.button`
    background-color: ${({ theme }) => theme.color.transparent};
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: 0 0 0 20px;
    transition: color 1s;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 10px;
    }

    &:disabled {
        color: ${({ theme }) => theme.color.dustyGray};
    }
`;
