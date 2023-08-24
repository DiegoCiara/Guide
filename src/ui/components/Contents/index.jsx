import React from 'react';
import { Divisor } from "../../styles/Container";
import { CodeSpace } from '../CodeSpace';
import '/src/App.css'

export function Contents(props){

  const NoH1 = props.h1 === null;
  const NoH2 = props.h2 === null;
  const NoH3 = props.h3 === null;
  const NoDiv = props.div === null;
  const NoP = props.p === null;
  const NoSpan = props.span === null;
  const NoCode = props.code === null;
  const NoCard = props.card === null;
  const NoIcon = props.icon === null;

  return(
    <div className={NoCard? (''):('Card')} style={{width:'100%'}}>
      <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
        <i style={NoIcon? {display:"none"}:{display:"flex", color:'#1C274C', fontSize:'25px'}} className={props.icon}></i>
        <div style={{margin:'0', height:'auto', width:'auto'}}>
          <h1 style={NoH1? {display:"none"}:{display:"flex"}}>{props.h1}</h1>
          <h2 style={NoH2? {display:"none"}:{display:"flex"}}>{props.h2}</h2>
        </div>
      </div>
      <h3 style={NoH3? {display:"none"}:{display:"flex"}}>{props.h3}</h3>
      <Divisor style={NoDiv? {display:"none"}:{display:"flex"}}/>
      <p  style={NoP? {display:"none"}:{display:"flex", whiteSpace: 'pre-line' }}>{props.p}</p>
      <span style={NoSpan? {display:"none"}:{display:"flex"}}>{props.span}</span>
      <div style={NoCode? {display:"none"}:{display:"flex", width:'100%'}}>
        <CodeSpace code={props.code} />
      </div>
    </div>
  )
}