import styled from "styled-components";

export const SectionContainer = styled.section`
    margin: 10px 0;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const SectionHeader = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.nobel};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        padding: 5px;
    }
`;

export const SectionTitle = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const SectionList = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 5px;
    }
`;