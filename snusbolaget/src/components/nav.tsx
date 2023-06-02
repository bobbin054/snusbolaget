import { Link } from "react-router-dom";
import useProfile from "../hooks/useProfile";
import { useSession } from "../hooks/useSession";
import { CartPreview } from "./cartPreview/cartPreview";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  background-color: #41464b;
  box-shadow: -1px 0px 20px 1px;
  margin: 0;
  margin-bottom: 20px;
  padding: 10px 15px;
  position: sticky;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  height: 70px;
  isolation: isolate;
`;
const NavGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  color: white;
  background-color: transparent;
  &:hover {
    color: red;
  }
`;

export function Nav() {
  const { session } = useSession();
  const { profile } = useProfile({ session });
  console.log("profile", profile);
  return (
    <>
      <NavWrapper>
        <NavGroup>
          <StyledLink to="/">snus online</StyledLink>
          <StyledLink to="/products">/products</StyledLink>
          {profile?.data?.admin && <StyledLink to="/admin">/admin</StyledLink>}
        </NavGroup>
        <NavGroup>
          <StyledLink to="/login">
            <NavGroup>
              <i className="fa fa-user fa-2x"></i>
              <p className="nav__icon-text">{profile?.data?.username ?? "Login"}</p>
            </NavGroup>
          </StyledLink>
          <StyledLink to="/cart">
            <CartPreview />
          </StyledLink>
        </NavGroup>
      </NavWrapper>
    </>
  );
}
