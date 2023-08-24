import { DrawlerStyled, MenuDrawler } from "./DrawlerStyled";
import { InputSearch } from "../Input";
import '/src/App.css';
import { Routes } from "../../../labels";

export function Drawler() {

  return(
    <DrawlerStyled>
      <MenuDrawler>
        <InputSearch/>
        <div style={{marginTop:'20px', width:'100%'}}>
          {Routes.map((pages)=>(
            <a className="MenuItem"  href={pages.link}>{pages.page}</a>
            ))}
        </div>
      </MenuDrawler>    
    </DrawlerStyled>   
  )
}