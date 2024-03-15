import { useEffect, useState } from "react";
import { Documentation } from "../labels";
import ProductService from "../services/ProductService";
import { CardsContainer } from "../ui/components/CardsContainer";
import { Contents } from "../ui/components/Contents";
import { Divisor, Page, PageContainer } from "../ui/styles/Container";

export function Document({ id }){
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(false)

  const getSelectedProduct = async () => {
    setLoading(true)
    try {
      const data = await ProductService.getProduct(id);
      setSections(data?.content)
      setLoading(false)
    } catch (error) {
      console.log(false)
      setLoading(false)
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
            />
            ))}
        <div></div>
        <div></div>
      </PageContainer>
      <CardsContainer/>
    </Page>
  )
}