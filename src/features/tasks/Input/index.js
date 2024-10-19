import styled from "styled-components";

export default styled.input`
    padding: 11px;
    border: 1px solid ${({ theme }) => theme.color.alto};
    overflow: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 10px;
        width: calc(100% - 20px);
    }
`;