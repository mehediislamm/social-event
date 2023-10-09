import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider3 from '../../../assets/slider3.jpg'

const Banner = () => {
    return (
        <div className="carousel  w-full lg:h-[70vh] mb-16">
            <div id="slide1" className=" carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                <div className=' absolute top-[45%] lg:mx-64 md:mx-20'>
                    <p className=' text-sm  lg:text-xl  md:text-xl font-medium text-yellow-400 flex justify-center'>Birthday Event Management Specialists</p>
                    <h1 className=' md:mx-8 flex justify-center text-lg md:text-2xl lg:text-3xl text-white lg:font-bold  md:font-bold' >CELEBRATE YOUR EVENTSTHAT LASTS LONGER</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider1} className="w-full" />
                <div className=' absolute top-[45%] lg:mx-64 md:mx-20'>
                    
                    <p className=' text-sm lg:text-xl  md:text-xl font-medium text-yellow-400 flex justify-center'>Lets have a party</p>
                    <h1 className=' md:mx-12 text-lg flex justify-centermd:text-2xl lg:text-3xl text-white lg:font-bold md:font-bold' >WE PLENT THE BEST EVENT BIRTHDAY PARTY</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" />
                <div className=' absolute top-[45%] lg:mx-64 md:mx-20'>
                    <p className=' text-sm  lg:text-xl  md:text-xl font-medium text-yellow-400 flex justify-center'>celebration have a party</p>
                    <h1 className=' text-lg mx-12 md:mx-28 flex justify-center md:text-2xl lg:text-3xl text-white lg:font-bold md:font-bold' >WE CREATE YOU CELEBRATE</h1>
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