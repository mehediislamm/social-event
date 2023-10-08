import { BsTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CardOne = ({ card }) => {
    const { id, price, image, card_name, details } = card || {};
    return (
        <div className="card mb-10 md:w-[550px] lg:w-[950px] mx-auto glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold mb-5 text-slate-400 ">{card_name}</h2>
                <p className='mb-10'>{details}</p>
                <div className=" mb-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 ">
                    <h1 className='text-2xl font-bold text-slate-400' >
                        
                        
                        {price}</h1>

                            <h1 className='text-2xl flex items-center gap-5'>
                               <BsTelephoneFill></BsTelephoneFill>
                                Call For Order: 09613-800800</h1>
                        
                    <div className='lg:mx-12 md:mx-12' ><button className="btn btn-primary">buy now</button></div>
                </div>
            </div>
            <Link to={"/"} className='flex justify-center' > <button className="btn btn-outline btn-warning">back to home</button> </Link>
        </div>
    );
};

export default CardOne;