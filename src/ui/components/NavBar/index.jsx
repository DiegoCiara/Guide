import { HeadBar, MenuBar, MenuButton, NavBarStyled } from "../../styles/NavBarStyled";
import { BsGithub, BsInstagram, BsLinkedin, BsList } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import Logo from '/src/assets/logo.png'
import LogoA from '/src/assets/logo-a.png'
import Book from '/src/assets/book.svg'
import'/src/App.css'
import { useDarkModeDetection } from "../../../Hooks/ThemeHook";

export function NavBar() {
  const isDarkMode = useDarkModeDetection();
  return(
    <NavBarStyled>
      <HeadBar style={{marginLeft:'40px'}}>
        <img src={isDarkMode? (LogoA):(Logo)} className="Logo"/>
        <MenuBar>          
          <a className="MenuItem" href='https://github.com/DiegoCiara/guide' target='_blank' >
          <img src={Book} height='30px' className='MenuItem Icon'/>Docs</a>
        </MenuBar>
      </HeadBar>
      <MenuBar style={{marginRight:'40px'}}>
        <a className="MenuItem Nav" href='https://github.com/DiegoCiara/guide' target='_blank' > 
          <AiOutlineStar style={{marginRight:'5px'}}/> Favorite esse repositório</a>
        <div className="Row">
          <BsInstagram className="MenuItem Nav" href='/'/>
          <BsLinkedin className="MenuItem Nav" href='/'/>
          <BsGithub className="MenuItem Nav" href='/'/>
        </div>
      </MenuBar>
      <MenuButton  style={{marginLeft:'40px'}}>
          <BsList style={{fontSize:'20px'}} className="MenuItem Nav " href='/'/>
      </MenuButton>
    </NavBarStyled>
  )
}
