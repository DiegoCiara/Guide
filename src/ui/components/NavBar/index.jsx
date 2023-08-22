import { MenuBar, NavBarStyled } from "../../styles/NavBarStyled";
import { BsGithub, BsInstagram, BsLinkedin, BsStar } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import Logo from '/src/assets/logo.svg'
import Book from '/src/assets/book.svg'
import'/src/App.css'


export function NavBar() {
  return(
    <NavBarStyled>
      <MenuBar style={{marginLeft:'40px'}}>
        <img src={Logo} className="Logo"/>
        <a className="MenuItem" href='https://github.com/DiegoCiara/guide' target='_blank' >
        <img src={Book} height='30px' className='MenuItem Icon'/>Docs</a>
      </MenuBar>
      <MenuBar>                    
        <a className="MenuItem Nav" href='https://github.com/DiegoCiara/guide' target='_blank' > 
          <AiOutlineStar style={{marginRight:'5px'}}/> Favorite esse repositório</a>
        <div className="Row">
          <BsInstagram className="MenuItem Nav" href='/'/>
          <BsLinkedin className="MenuItem Nav" href='/'/>
          <BsGithub className="MenuItem Nav" href='/'/>
        </div>
      </MenuBar>
    </NavBarStyled>
  )
}