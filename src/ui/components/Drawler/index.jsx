import { DrawlerStyled, MenuDrawler } from "../../styles/DrawlerStyled";
import '/src/App.css'

export function Drawler() {
  return(
    <DrawlerStyled>
      <MenuDrawler>
        <h4 className="MenuItem">Cadastro de contrato</h4>
        <h4 className="MenuItem">Arquivo Remessa</h4>
        <h4 className="MenuItem">Arquivo Retorno</h4>          
      </MenuDrawler>    
    </DrawlerStyled>   
  )
}