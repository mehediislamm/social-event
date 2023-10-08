import team1 from '../../../assets/image1.jpg'
import team2 from '../../../assets/h5.jpg'
import team3 from '../../../assets/h6.jpg'
import team4 from '../../../assets/h7.jpg'


const SectionTwo = () => {
    return (
        <div className=' bg-[#ede6ea] mb-24 rounded-t-lg ' >
            <h1 className='text-2xl font-semibold text-center mb-10 text-yellow-500'>Our <span className=' text-yellow-600'>Team</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5'>
                <div>
                    <img className=' rounded-full mb-6 lg:mx-10 flex justify-center' src={team1} alt="" />
                    <h1 className='text-2xl font-bold flex justify-center text-slate-400'>Jane Smith</h1>
                </div>
                <div>
                    <img className=' rounded-full mb-10 lg:mx-12 flex justify-center ' src={team2} alt="" />
                    <h1 className='text-2xl font-bold flex justify-center text-slate-400'> Sriti Shorma</h1>
                </div>
                <div>
                    <img className=' rounded-full mb-8 lg:mx-10 flex justify-center' src={team3} alt="" />
                    <h1 className='text-2xl font-bold flex justify-center text-slate-400'>Happy Islam </h1>
                </div>
                <div>
                    <img className=' rounded-full mb-8 flex justify-center lg:mx-10' src={team4} alt="" />
                    <h1 className='text-2xl font-bold flex justify-center text-slate-400'>Devid smith</h1>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;