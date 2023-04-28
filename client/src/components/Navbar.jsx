import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
`;

export function Navbar({ children }) {
  return <NavContainer>{children}</NavContainer>;
}
