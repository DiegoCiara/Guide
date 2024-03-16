import { useEffect, useState } from "react";
import { Documentation } from "../labels";
import ProductService from "../services/ProductService";
import { CardsContainer } from "../ui/components/CardsContainer";
import { Contents } from "../ui/components/Contents";
import { Divisor, Page, PageContainer } from "../ui/styles/Container";
import Modal from "react-modal";

Modal.setAppElement("#root");
export function Document({ id }){
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(false)

  
  const getSelectedProduct = async () => {
    setLoading(true);
    try {
      const data = await ProductService.getProduct(id);
      const sortedContent = data?.content.sort((a, b) => {
        // Convertendo strings de data em objetos Date para comparação
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        
        // Ordenando do mais antigo para o mais recente
        return dateA - dateB;
      });
      setSections(sortedContent);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getSelectedProduct();
  }, []);

  
  return(
    <Page>
      <PageContainer>
        {loading && <span>Carregando...</span>}
          {sections?.map((card)=>(
            <Contents
              h1={card.head}
              h2={card.title}
              h3={card.subtitle}
              div={card.divisor}
              p={card.paragraph}
              span={card.phrase}
              code={card.code}
              card={card.isCard}
              icon={card.icon}
              divisor={card.divisor}
            />
            ))}
        <div></div>
        <div></div>
      </PageContainer>
      <CardsContainer/>
    </Page>
  )
}