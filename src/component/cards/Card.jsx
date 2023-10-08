import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardOne from "./cardOne/CardOne";


const Card = () => {
    const [card , setCard] = useState({})

    const {id} = useParams();

    const details = useLoaderData();


   
    useEffect(()=>{
                const findCard = details?.find ( card =>card.id = id)
                setCard(findCard)
    },[id,details ])
    console.log(card);

    return (
        <div>
            <CardOne card={card} ></CardOne>
        </div>
    );
};

export default Card;