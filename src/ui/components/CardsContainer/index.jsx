import { ContentCards } from "../../../labels";
import { Cards } from "../Cards";
import { CardsDrawler, CardsList } from "../Drawler/DrawlerStyled";


export function CardsContainer(){
  return(
    <CardsDrawler>
      <CardsList>
        {ContentCards.map((card)=>(
          <Cards
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