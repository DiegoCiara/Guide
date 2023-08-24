import { Divisor } from "../../styles/Container";
import { CodeSpace } from "../CodeSpace";
import { Card, ContainerCard} from "./CardsStyle"

export const SideCards = (props) =>{
  const NoDiv = !props.div;
  function ButtonExist(){
    if (!props.button) {
      return null
    } else {
      return ( 
        <a style={{border:'1px solid #cacaca'}} 
          href={`${props.link}`} 
          target="_blank" 
          className="MenuItem Nav Blue">
          {props.button}
          </a>
          )
    }
  }
return(
  <Card>
      <h3 style={{margin:'0'}}>{props.h2}</h3>
      <Divisor style={NoDiv? {display:"none"}:{display:"flex"}}/>
      <p style={{fontSize:'14px'}}>{props.p}</p>
      <ButtonExist/>
    </Card>
  )
}


export function CardContainer(props){
  function CodeExist(){
    if (!props.code) {
      return null
    } else {
      return <CodeSpace code={props.code} />;
    }
  }
  return( 
    <ContainerCard>
      <h2>{props.title}</h2>
      <Divisor/>
      <p>{props.p}</p>
      <CodeExist/>
    </ContainerCard>
  )
}