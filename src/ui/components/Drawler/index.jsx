
import { DrawlerStyled, MenuDrawler } from "../../styles/DrawlerStyled";
import { InputSearch } from "../Input";
import '/src/App.css';

export function Drawler() {

  return(
    <DrawlerStyled>
      <MenuDrawler>
          <InputSearch/>
        <a className="MenuItem"  href="/">Iniciar</a>
        <a className="MenuItem" href="/example">Arquivo Remessa</a>
      </MenuDrawler>    
    </DrawlerStyled>   
  )
}