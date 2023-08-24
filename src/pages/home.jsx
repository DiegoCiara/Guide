import { HomePage } from "../labels";
import { CardsContainer } from "../ui/components/CardsContainer";
import { Contents } from "../ui/components/Contents";
import { Divisor, Page, PageContainer } from "../ui/styles/Container";

export function Home(){
  
  return(
    <Page>
      <PageContainer>
          {HomePage.map((card)=>(
            <Contents
              h1={card.head}
              h2={card.title}
              h3={card.subtitle}
              div={card.divisor}
              p={card.paragraph}
              span={card.phrase}
              code={card.code}
              icon={card.icon}
              result={card.code}
              card={card.isCard}
            />
            ))}
        <div></div>
        <div></div>
      </PageContainer>
      <CardsContainer/>
    </Page>
  )
}