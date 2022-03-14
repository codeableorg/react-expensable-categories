import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

const currentStyles = (current) => {
  if (current) {
    return `
    background-color: ${colors.pink[400]};
    color: ${colors.white};
    &:hover {
      background-color: ${colors.pink[400]};
    }
    `;
  }
};

const StyledAnchor = styled.a`
  padding: 0.5rem;
  display: flex;
  gap: 0.75rem;
  ${typography.text.md};
  color: ${colors.gray[600]};
  font-weight: 500;
  align-items: center;
  border-radius: 0.375rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${colors.pink[100]};
  }
  &:focus {
    outline: 1px solid ${colors.pink[500]};
  }

  ${(props) => currentStyles(props.current)}
`;

function SidebarNavItem({ name, icon, ...rest }) {
  return (
    <StyledAnchor {...rest}>
      {icon}
      {name}
    </StyledAnchor>
  );
}

SidebarNavItem.propTypes = {
  current: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default SidebarNavItem;
