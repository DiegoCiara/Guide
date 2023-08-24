import { HeadBar, MenuBar, MenuButton, NavBarStyled } from "./NavBarStyled";
import { BsGithub, BsInstagram, BsLinkedin, BsList } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import Logo from '/src/assets/logo.png'
import LogoA from '/src/assets/logo-a.png'
import Book from '/src/assets/book.svg'
import'/src/App.css'
import { useDarkModeDetection } from "../../../global/hooks/ThemeHook";
import Dropdown from "../Dropdown";

export function NavBar() {
  const isDarkMode = useDarkModeDetection();
  return(
    <NavBarStyled>
      <HeadBar style={{marginLeft:'40px'}}>
        <img src={isDarkMode? (LogoA):(Logo)} className="Logo"/>
        <MenuBar>          
          <a className="MenuItem" href='https://github.com/DiegoCiara/guide' target='_blank' >
          <img src={Book} style={{height:"25px"}} className='MenuItem Icon'/>Docs</a>
        </MenuBar>
      </HeadBar>
      <MenuBar style={{marginRight:'40px'}}>
        <a className="MenuItem Nav" href='https://github.com/DiegoCiara/guide' target='_blank' > 
          <AiOutlineStar style={{marginRight:'5px'}}/> Favorite esse repositório</a>
        <div className="Row">
          
          <a className="MenuItem Nav" target='_blank' href='https://www.instagram.com/sr.ciara/'><BsInstagram/></a>
          <a className="MenuItem Nav" target='_blank' href='https://www.linkedin.com/in/diego-antonio-055602249/'><BsLinkedin/></a>
          <a className="MenuItem Nav" target='_blank' href='https://github.com/DiegoCiara/guide'><BsGithub/></a>
        </div>
      </MenuBar>
      <MenuButton  style={{marginLeft:'40px'}}>
          <Dropdown />
      </MenuButton>
      
    </NavBarStyled>
  )
}
