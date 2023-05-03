import { MenuBar, NavBarStyled } from "../../styles/NavBarStyled";
import Logo from '/src/assets/react.svg'
import'/src/App.css'

export function NavBar() {
  return(
    <NavBarStyled>
      <img src={Logo} className="Logo"/>
      <MenuBar>
        <p>Item um</p>
        <p>Item dois</p>
      </MenuBar>
    </NavBarStyled>
  )
}