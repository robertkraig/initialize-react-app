import styled from "styled-components";

export const NavMenu = styled.menu`
    display: inline-block;0
`
NavMenu.displayName = 'NavMenu';

export const NavMenuItems = styled.ul`
  display: inline-block;
`;
NavMenuItems.displayName = 'NavMenuItems';

export const NavMenuItem = styled.li`
  display: inline-block;
  list-style: none;
  padding: 5px;
  a {
    text-decoration: none;
    color: red;
    &:active, &:hover {
      color: black;
    }
  }
`;
NavMenuItem.displayName = 'NavMenuItem';


export const YouClickedMe = styled.div`
  color: white;
  display: inline-block;
  background: black;
  padding: 10px;
  cursor: pointer;
  text-align: left;
`;
YouClickedMe.displayName = 'YouClickedMe';

export const Container = styled.section`
  display: grid;
  width: 300px;
  gap: 10px;
  margin: 10px auto auto;
`;
Container.displayName = 'Container';
