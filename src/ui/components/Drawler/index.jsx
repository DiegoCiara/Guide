
import { Menu } from "../../../lables";
import { DrawlerStyled, MenuDrawler } from "../../styles/DrawlerStyled";
import { InputSearch } from "../Input";
import '/src/App.css';

export function Drawler() {

  return(
    <DrawlerStyled>
      <MenuDrawler>
        <InputSearch/>
        <div style={{marginTop:'20px', width:'100%'}}>
        {Menu.map((pages)=>(
          <a className="MenuItem"  href={pages.link}>{pages.page}</a>
          ))}
        </div>
      </MenuDrawler>    
    </DrawlerStyled>   
  )
}