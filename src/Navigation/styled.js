import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px;
    }

    nav & {
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
    }
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
        color: ${({ theme }) => theme.color.teal};
        cursor: pointer;
    }

    ${({ $hidden }) => $hidden && `
        display: none;
    `}

    nav & {
        padding: 0;
        border-bottom: none;
        font-size: 1.5em;

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.color.white};
            font-weight: 300;
        }
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    &.active {
        font-weight: bold;
    }
`;
