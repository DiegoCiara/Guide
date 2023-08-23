import { Card } from "../../../styles/Cards"
import { Divisor } from "../../../styles/Container";

export const Cards = (props) =>{
  const NoH2 = props.h2 === null;
  const NoH3 = props.h3 === null;
  const NoDiv = props.div === false;
  const NoP = props.p === null;
  const NoSpan = props.span === null;
  const NoButton = props.button === null;
return(
  <Card>
      <h2 style={NoH2? {display:"none"}:{display:"flex", margin:'0'}}>{props.h2}</h2>
      <h3 style={NoH3? {display:"none"}:{display:"flex", margin:'0'}}>{props.h3}</h3>
      <Divisor style={NoDiv? {display:"none"}:{display:"flex"}}/>
      <p style={NoP? {display:"none"}:{display:"flex", fontSize:'14px'}}>{props.p}</p>
      <span style={NoSpan? {display:"none"}:{display:"flex", fontSize:'14px'}}>{props.span}</span>
      <a style={NoButton? {display:"none"}:{display:"inherit", border:'1px solid #cacaca'}} href={`${props.link}`} target="_blank" className="MenuItem Nav Blue" >{props.button}</a>
    </Card>
  )
}