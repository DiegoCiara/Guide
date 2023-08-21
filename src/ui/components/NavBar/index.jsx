import { MenuBar, NavBarStyled } from "../../styles/NavBarStyled";
import'/src/App.css'
import { InputSearch } from "../Input";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export function NavBar() {
  return(
    <NavBarStyled>
      <InputSearch />
      <MenuBar style={{gap:"20px"}}>
        <a className="MenuItem Nav" href='/'>Início</a>
        <a className="MenuItem Nav" href='https://github.com/DiegoCiara/guide' target='_blank' >Configuração</a>
        <a className="MenuItem Nav" href='https://github.com/DiegoCiara/guide' target='_blank' >Repositório</a>
      </MenuBar>
      <MenuBar>
        <BsInstagram className="MenuItem Nav" href='/'/>
        <BsLinkedin className="MenuItem Nav" href='/'/>
        <BsGithub className="MenuItem Nav" href='/'/>
      </MenuBar>
    </NavBarStyled>
  )
}