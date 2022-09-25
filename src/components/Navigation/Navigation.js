import { NavList, NavItem, NavLink } from './Navigation.styled';
import navigationItems from 'data/navigation';

function Navigation() {
  return (
    <nav>
      <NavList>
        {navigationItems.map(item => {
          return (
            <NavItem key={item.id}>
              <NavLink href={`#${item.id}`}>{item.name}</NavLink>
            </NavItem>
          );
        })}
      </NavList>
    </nav>
  );
}

export default Navigation;
