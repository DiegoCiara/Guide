import React, { useState } from 'react';
import { Divisor } from "../../styles/Container";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md'
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

  
  function CopyClipboardExample() {
    const [copied, setCopied] = useState(false);

    function checkString(input) {
      if(input === null)
        return ''
        const terminalKeywords = ['npm', 'yarn', 'pip', 'docker-compose', 'sudo']
        if (terminalKeywords.some(item => input.includes(item))) {
          return 'Terminal';
        }else{
          return 'Código'
        }
    }
    
    const KeyDetect = props.code;

    console.log(KeyDetect)
    const KeyDetected = checkString(KeyDetect)

    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500); 
    };
    return (
      <div className='CodeSpace'>
        <CopyToClipboard text={props.code}>
          <button className='MenuItem Copy Nav' onClick={handleCopy}>
            <MdContentCopy/>
            {copied ? 'Copiado!' : 'Copiar'}
          </button>
        </CopyToClipboard>
        <span className='Copy Code'>{KeyDetected}</span>
          <code>{props.code}
          </code>
      </div >
    );
  }

  
  return(
    <div className={NoCard? (''):('Card')} style={{width:'100%'}}>
      <h1 style={NoH1? {display:"none"}:{display:"flex"}}>{props.h1}</h1>
      <h2 style={NoH2? {display:"none"}:{display:"flex"}}>{props.h2}</h2>
      <h3 style={NoH3? {display:"none"}:{display:"flex"}}>{props.h3}</h3>
      <Divisor style={NoDiv? {display:"none"}:{display:"flex"}}/>
      <p  style={NoP? {display:"none"}:{display:"flex", whiteSpace: 'pre-line' }}>{props.p}</p>
      <span style={NoSpan? {display:"none"}:{display:"flex"}}>{props.span}</span>
      <div style={NoCode? {display:"none"}:{display:"flex", width:'100%'}}>
        <CopyClipboardExample />
      </div>
    </div>
  )
}