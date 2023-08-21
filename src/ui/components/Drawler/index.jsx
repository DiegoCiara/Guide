
import { useNavigate } from "react-router-dom";
import { DrawlerStyled, MenuDrawler } from "../../styles/DrawlerStyled";
import Logo from '/src/assets/react.svg'
import '/src/App.css';

export function Drawler() {

  return(
    <DrawlerStyled>
      <MenuDrawler>

        <div>
        <img src={Logo} className="Logo"/>
        </div>
        <a className="MenuItem"  href="/">Iniciar</a>
        <a className="MenuItem" href="/example">Arquivo Remessa</a>
      </MenuDrawler>    
    </DrawlerStyled>   
  )
}