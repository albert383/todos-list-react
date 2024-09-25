import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px;

    @media (max-width: 767px) {
        padding: 5px;
    }
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #dddddd;

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
    background-color: transparent;
    color: teal;
    border: none;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    font-size: 1em;
    width: 30px;
    height: 30px;
    transition: 0.3s;

${({ $toggleDone }) => $toggleDone && css`
    color: #ffffff;
    background: green;

    &:hover {
        color: #ffffff;
        background-color: rgb(0, 148, 0);
        transition: 0.3s;
    }

    &:active {
        color: #ffffff;
        background-color: rgb(0, 177, 0);
        transition: 0.3s;
    }
`}

${({ $remove }) => $remove && css`
    color: #ffffff;
    background-color: red;

    &:hover {
        color: #ffffff;
        background-color: rgb(255, 81, 81);
        transition: 0.3s;
    }
`};
`;