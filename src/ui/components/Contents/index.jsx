import { Divisor } from "../../styles/Container";

export function Contents(props){
  
  const NoH1 = props.h1 === null;
  const NoH2 = props.h2 === null;
  const NoH3 = props.h3 === null;
  const NoDiv = props.div === null;
  const NoP = props.p === null;
  const NoSpan = props.span === null;
  const NoCode = props.code === null;
  
  return(
    <div style={{width:'100%'}}>
      <h1 style={NoH1? {display:"none"}:{display:"flex"}}>{props.h1}</h1>
      <h2 style={NoH2? {display:"none"}:{display:"flex"}}>{props.h2}</h2>
      <h3 style={NoH3? {display:"none"}:{display:"flex"}}>{props.h3}</h3>
      <Divisor style={NoDiv? {display:"none"}:{display:"flex"}}/>
      <p  style={NoP? {display:"none"}:{display:"flex", whiteSpace: 'pre-line' }}>{props.p}</p>
      <span style={NoSpan? {display:"none"}:{display:"flex"}}>{props.span}</span>
      <code style={NoCode? {display:"none"}:{display:"flex"}}>{props.code}</code>
    </div>
  )
}