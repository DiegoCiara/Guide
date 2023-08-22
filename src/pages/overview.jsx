import { Overview } from "../lables";
import { Contents } from "../ui/components/Contents";
import { Divisor, Page, PageContainer } from "../ui/styles/Container";

export function OverView() {
  return(
    <Page>
      <PageContainer>
      {Overview.map((card)=>(
        <Contents
          h1={card.head}
          h2={card.title}
          h3={card.subtitle}
          div={card.divisor}
          p={card.paragraph}
          span={card.phrase}
          code={card.code}
        />
        ))}
      </PageContainer>
    </Page>
  )
}