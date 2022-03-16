import styled from "@emotion/styled";
import { useState } from "react";
import SidebarNavItem from "./sidebar-nav-item";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function SidebarNav({ initialNavigation, onItemClick }) {
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleClick = (itemClicked) => {
    const newNavigation = navigation.map((navItem) => {
      navItem.current = navItem === itemClicked;
      return navItem;
    });
    setNavigation(newNavigation);
    onItemClick(itemClicked);
  };

  return (
    <Wrapper>
      {navigation.map((nav) => (
        <SidebarNavItem
          key={nav.name}
          onClick={() => handleClick(nav)}
          {...nav}
        />
      ))}
    </Wrapper>
  );
}

export default SidebarNav;
