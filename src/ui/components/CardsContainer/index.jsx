import { ContentCards } from "../../../lables";
import { CardsDrawler } from "../../styles/DrawlerStyled";
import { Cards } from "./Cards";


export function CardsContainer(){
  return(
    <CardsDrawler>
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
    </CardsDrawler>
  )
}