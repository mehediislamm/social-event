import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider3 from '../../../assets/slider3.jpg'

const Banner = () => {
    return (
        <div className="carousel  w-full lg:h-[70vh] mb-16">
            <div id="slide1" className=" carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                <div className=' absolute top-[45%] lg:mx-64 md:mx-20'>
                    <p className=' text-sm mx-20 lg:text-xl  md:text-xl font-medium text-yellow-400 md:mx-32'>Birthday Event Management Specialists</p>
                    <h1 className=' text-lg mx-10 md:mx-4 md:text-3xl lg:text-3xl text-white lg:font-bold md:font-bold' >CELEBRATE YOUR EVENTSTHAT LASTS LONGER</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider1} className="w-full" />
                <div className=' absolute top-[45%] lg:mx-64 md:mx-20'>
                    <p className=' text-sm mx-44 lg:text-xl  md:text-xl font-medium text-yellow-400 md:mx-60'>Lets have a party</p>
                    <h1 className=' text-lg mx-14  md:mx-5 md:text-3xl lg:text-3xl text-white lg:font-bold md:font-bold' >WE PLENT THE BEST EVENT BIRTHDAY PARTY</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" />
                <div className=' absolute top-[45%] lg:mx-64 md:mx-20'>
                    <p className=' text-sm mx-36 lg:text-xl  md:text-xl font-medium text-yellow-400 md:mx-56'>celebration have a party</p>
                    <h1 className=' text-lg mx-28 md:mx-32 md:text-3xl lg:text-3xl text-white lg:font-bold md:font-bold' >WE CREATE YOU CELEBRATE</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;