
import { useNavigate } from "react-router-dom";
import { DrawlerStyled, MenuDrawler } from "../../styles/DrawlerStyled";
import '/src/App.css';

export function Drawler() {
  // const navigate = useNavigate()
    // const navigateCadastroContrato = () => {
    //   // 👇️ navigate to /contacts
    //   navigate('/cadastrocontrato');
    // };

    // const navigateRemessa = () => {
    //   // 👇️ navigate to /contacts
    //   navigate('/arquivoremessa');
    // };
    // const navigateRetorno = () => {
    //   // 👇️ navigate to /contacts
    //   navigate('/arquivoretorno');
    // };

  return(
    <DrawlerStyled>
      <MenuDrawler>
        <a className="MenuItem"  href="/cadastrocontrato">Cadastro de contrato</a>
        <a className="MenuItem" href="/arquivoremessa">Arquivo Remessa</a>
        <a className="MenuItem" href="/arquivoretorno">Arquivo Retorno</a>          
      </MenuDrawler>    
    </DrawlerStyled>   
  )
}