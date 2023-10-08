import { Link } from "react-router-dom";



const Cards = ({ card }) => {
    console.log(card);
    const { image, card_name,  short_description,id } = card;

    //    console.log(cards);
    return (
        <div>
            
            <div className="">

          

                    <div className="bg-[#FFEDED] h-[66vh] card card-compact  shadow-xl ">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-slate-400">{card_name}</h2>
                            <p>{short_description}</p>
                            <div className="card-actions justify-center">
                               <Link to={`/card/${id}`} > <button className="btn btn-primary">view details</button></Link>
                            </div>
                        </div>
                    </div>

               
            </div>
        </div>
    );
};

export default Cards;