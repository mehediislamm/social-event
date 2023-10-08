import { FaBeer } from 'react-icons/fa';

const CardOne = ({ card }) => {
    const { id, price, image, card_name, details } = card || {};
    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{card_name}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default CardOne;