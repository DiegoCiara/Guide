import { useState } from "react";
import { CodeSpaceStyle } from "./CodeSpaceStyle";
import { checkString } from "../../../global/context";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdContentCopy } from 'react-icons/md'


export function CodeSpace(props) {
  const [copied, setCopied] = useState(false);
  const KeyDetect = props.code;
  const KeyDetected = checkString(KeyDetect)
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); 
  };
  return (
    <CodeSpaceStyle>
      <CopyToClipboard text={KeyDetect}>
        <button 
          className='MenuItem Copy Nav' 
          style={{zIndex:'1'}} 
          onClick={handleCopy}>
          <MdContentCopy/>
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </CopyToClipboard>
      <span className='Copy Code'>{KeyDetected}</span>
      <code style={{whiteSpace: 'pre-wrap'}}>{KeyDetect}</code>
    </CodeSpaceStyle >
  );
}