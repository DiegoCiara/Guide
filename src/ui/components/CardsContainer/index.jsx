import { ContentCards } from "../../../lables";
import { CardsDrawler, CardsList } from "../../styles/DrawlerStyled";
import { Cards } from "./Cards";


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
            button={card.button}
          />
          ))}
        
      </CardsList>
    </CardsDrawler>
  )
}