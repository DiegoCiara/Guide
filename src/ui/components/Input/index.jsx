import { Input, InputContainer } from "./InputStyle";
import { BsSearch } from 'react-icons/bs'

export function InputSearch({clicked}){
  return(
    <InputContainer
      onClick={() => clicked()}>
    <Input
      placeholder="Pesquise na aplicação"
    />
    <BsSearch/>
    </InputContainer>
  )
}