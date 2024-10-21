import { toAuthor, toTasks } from "../routes";
import { StyledNavLink, Item, List } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};

export default Navigation;
