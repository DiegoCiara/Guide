import React from 'react';
import { Divisor } from "../../styles/Container";
import { CodeSpace } from '../CodeSpace';
import '/src/App.css';

export function Contents(props) {

  // Mantém a função shouldDisplay para verificar strings e outros valores não booleanos
  const shouldDisplay = value => value !== null && value !== undefined && value !== '';

  return (
    <div className={props.card ? 'Card' : ''} style={{width: '100%'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
        <i style={{display: shouldDisplay(props.icon) ? 'flex' : 'none'}} className={`${props.icon} Icon`}></i>
        <div style={{margin: '0', height: 'auto', width: 'auto'}}>
          {shouldDisplay(props.h1) && <h1>{props.h1}</h1>}
          {shouldDisplay(props.h2) && <h2>{props.h2}</h2>}
        </div>
      </div>
      {shouldDisplay(props.h3) && <h3>{props.h3}</h3>}
      {props.divisor ? <Divisor /> : null} {/* Diretamente verifica o valor booleano */}
      {shouldDisplay(props.p) && <p style={{whiteSpace: 'pre-line'}}>{props.p}</p>}
      {shouldDisplay(props.span) && <span>{props.span}</span>}
      {shouldDisplay(props.code) && 
        <div style={{width: '100%'}}>
          <CodeSpace code={props.code} />
        </div>
      }
    </div>
  );
}
