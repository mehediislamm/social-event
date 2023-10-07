import { NavLink } from "react-router-dom";


const Cards = ({ card }) => {
    console.log(card);
    const { image, card_name, price, short_description } = card;

    //    console.log(cards);
    return (
        <div>
            
            <div className="">

                <NavLink>

                    <div className="bg-[#FFEDED] card card-compact  shadow-xl ">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-slate-400">{card_name}</h2>
                            <p>{short_description}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">view details</button>
                            </div>
                        </div>
                    </div>

                </NavLink>
            </div>
        </div>
    );
};

export default Cards;