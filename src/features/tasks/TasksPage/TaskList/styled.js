import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px;
    }

    ${({ $nav }) => $nav && css`
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        grid-gap: 10px;
        background-color: teal;
        padding: 20px;

        @media (max-width: 500px) {
            grid-template-columns: 1fr;
            justify-items: center;
        }
    `}
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.black};
        cursor: pointer;

    }

    ${({ $hidden }) => $hidden && css`
        display: none;
    `}

    ${({ $nav }) => $nav && css`
        padding: 0;
        border-bottom: none;
        font-size: 1.5em;

        a {
            text-decoration: none;
            color: white;
            font-weight: normal;

            &:hover {
                text-decoration: none;
            }
            
            &.active {
                font-weight: bold;
            }
        }
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