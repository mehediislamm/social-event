import { BsTelephoneInboundFill,  } from 'react-icons/bs';
import balloon1 from '../../assets/ballons5.jpg'
import balloon2 from '../../assets/balloons8.jpg'
import balloon3 from '../../assets/ballons2.jpg'
import balloon4 from '../../assets/ballons7.jpg'

const Service = () => {
    return (
        <div className="flex gap-6 ml-10 mb-10">
            <div>
                <h1 className="text-3xl text-slate-400 font-bold mb-4">Explore Party Balloons For Every Milestone</h1>
                <p className="mb-8">holiday. and style . Find all your latex foil and helium ballons. We can deliver as fast as same day!</p>

                <div className=" mb-8">
                    <li>Wide Selection of Foil Balloons</li>
                    <li>Latex Ballons For Valentines Day</li>
                    <li>Best Options In Balloons Themes</li>
                </div>
                <div className=" border rounded-box bg-black gap-10 flex justify-center  w-80 ">
                    <div className=' text-red-600 px-6 py-10'>
                        <BsTelephoneInboundFill className='text-4xl' ></BsTelephoneInboundFill>
                    </div>
                    <div className=' py-3'>
                        <h4 className='text-white'>Have Qustion? Call Us</h4>
                        <h2 className="text-white text-2xl font-bold">+021-01283492</h2>
                        <h4 className='text-white'>Open monday to Friday 9:30AM to 6:00PM</h4>
                    </div>

                </div>
            </div>
            <div className='py-16'>
                <div className="avatar">
                    <div className="w-32 rounded">
                        <img src={balloon1} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={balloon2} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={balloon3} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={balloon4} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;