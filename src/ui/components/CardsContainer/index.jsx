import { ContentCards } from "../../../labels";
import { SideCards } from "../Cards/Cards";
import { CardsDrawler, CardsList } from "../Drawler/DrawlerStyled";


export function DrawlerCards(){
  return(
    <CardsDrawler>
      <CardsList>
        {ContentCards.map((card)=>(
          <SideCards
            h2={card.title}
            h3={card.subtitle}
            div={card.divisor}
            p={card.paragraph}
            span={card.phrase}
            link={card.link}
            button={card.button}
          />
          ))}
      </CardsList>
    </CardsDrawler>
  )
}