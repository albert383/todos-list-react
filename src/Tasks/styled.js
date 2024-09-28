import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 5px;
    }
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ $hidden }) => $hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.transparent};
    color: ${({ theme }) => theme.color.teal};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.transparent};
    cursor: pointer;
    font-size: 1em;
    width: 30px;
    height: 30px;
    transition: 0.3s;

${({ $toggleDone }) => $toggleDone && css`
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.green};

    &:hover {
        filter: brightness(115%);
    }

    &:active {
        filter: brightness(130%);
    }
`}

${({ $remove }) => $remove && css`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.red};

    &:hover {
        filter: brightness(115%)
    }

    &:active {
        filter: brightness(130%)
    }
`};
`;