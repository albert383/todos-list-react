import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
    }
`;