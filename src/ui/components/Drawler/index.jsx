
import { Menu, Pages } from "../../../labels";
import { DrawlerStyled, MenuDrawler } from "./DrawlerStyled";
import { InputSearch } from "../Input";
import { formatUrl } from "../../../utils/formats";
import '/src/App.css';

export function Drawler() {

  return(
    <DrawlerStyled>
      <MenuDrawler>
        <InputSearch/>
        <div style={{marginTop:'20px', width:'100%'}}>
          {Pages.map((pages)=>(
              <a className="MenuItem" href={formatUrl(pages?.page)}>{pages.page}</a>
          ))}    
        </div>
      </MenuDrawler>    
    </DrawlerStyled>   
  )
}