import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuLink = ({ to, children }) => {
  return (
    <MenuLinkWrap to={to}>
      {children}
    </MenuLinkWrap>
  );
};

const MenuLinkWrap = styled(NavLink)`
  font-size: 1.4em;
  position: relative;
  &::before {
    content: "";
    width: 4rem;
    height: 1.5rem;
    background-color: #ffe7e8;
    position: absolute;
    left: 50%;
    bottom: -100%;
    transform: translateX(-50%) scaleY(0);
    transform-origin: bottom;
    border-radius: 5px 5px 0 0;
    transition: transform 0.3s ease;
  }
  &:hover, &.active {
    color: #f73c5a;
    font-weight: bold;
  }
  &:hover::before, &.active::before {
    transform: translateX(-50%) scaleY(1);
  }
`;

export default MenuLink;
