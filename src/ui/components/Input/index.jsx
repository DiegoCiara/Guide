import { Input, InputContainer } from "./InputStyle";
import { BsSearch } from 'react-icons/bs'

export function InputSearch(props){
  return(
    <InputContainer>
    <Input
      placeholder="Pesquise na aplicação"
      value={props.InputValue}
    />
    <BsSearch/>
    </InputContainer>
  )
}