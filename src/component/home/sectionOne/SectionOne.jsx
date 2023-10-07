import ballone1 from '../../../assets/ballons2.jpg'
import ballone2 from '../../../assets/ballons5.jpg'

import ballone3 from '../../../assets/ballons6.jpg'

import ballone4 from '../../../assets/ballons7.jpg'
import { FaLocationArrow } from 'react-icons/fa';

const SectionOne = () => {
    return (
        <div className='bg-[#fdf2f9] rounded-t-lg mb-20 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 '>
            <div>
                <div className='mb-5 '>
                    <img src={ballone1} alt="" />

                </div>
                <div >
                    <img src={ballone2} alt="" />

                </div>
            </div>
            <div className=' md:mt-20 lg:mt-52'>
                <h1 className='text-center text-3xl font-bold mb-2 text-yellow-300'>Birthday <br /> Ballons </h1>
                <p className='text-center text-xl mb-4'>birthsay , and style .Find all your latex foil, and  helium balloons. We can deliver as fast as same day!</p>

                <div className=' items-center text-center mb-5'>
                    <button className="btn btn-outline text-[#FFF] bg-[#79C23F] ">
                        shop Holiday Ballons
                    </button>
                </div>
                <div className='text-center mx-56 md:mx-24 lg:mx-44 mb-3 items-center' >
                    <p ><FaLocationArrow ></FaLocationArrow></p>
                </div>
                <p className='text-center text-xl'> 547 mason Road , New town Street 2548 United State</p>
            </div>
            <div>
                <div className=' mb-5'>
                    <img src={ballone3} alt="" />


                </div>
                <div >
                    <img src={ballone4} alt="" />

                </div>
            </div>
        </div>
    );
};

export default SectionOne;