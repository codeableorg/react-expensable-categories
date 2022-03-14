import { useState } from "react";
import SidebarNavItem from "./sidebar-nav-item";
import PropTypes, { arrayOf } from "prop-types";

function SidebarNav({ initialNavigation, onItemClick }) {
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleClick = (event, itemClicked) => {
    event.preventDefault();
    const newNavigation = navigation.map((navItem) => {
      navItem.current = navItem === itemClicked;
      return navItem;
    });
    setNavigation(newNavigation);
    onItemClick(itemClicked);
  };

  return navigation.map((nav) => (
    <SidebarNavItem
      key={nav.name}
      onClick={(event) => handleClick(event, nav)}
      {...nav}
    />
  ));
}

// SidebarNav.propTypes = {
//   initialNavigation: arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       href: PropTypes.string,
//       icon: PropTypes.element,
//       current: PropTypes.bool,
//     })
//   ),
//   onItemClick: PropTypes.func,
// };

export default SidebarNav;
