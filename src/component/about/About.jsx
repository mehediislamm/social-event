import SectionTwo from "../home/SectionTwo/SectionTwo";




const About = () => {
    return (
        <div>
            <h1 className="text-3xl text-center mb-10 text-yellow-500 font-bold"><span className="text-yellow-600">Our Story of</span> Success</h1>
            <div >
            
            <div className="ml-6 mb-5"> 
                <h1 className="text-2xl mb-6 font-semibold text-slate-400">A Perfect Blend of Sensational cake, Inspiring Ideas and Professional Staff</h1>
                <li className="mb-2">Longevity in Business: The individual has been in the cake-selling business since 1997, which indicates a significant and enduring presence in this industry.</li>
                <li className="mb-2">Cake Quality: The cakes they sell are described as "very delicious," suggesting a commitment to producing high-quality and appetizing cakes, which can contribute to customer satisfaction and loyalty. </li>
                <li className="mb-2">Business Growth: Over time, the business has expanded, as they now have four additional employees working with them. This growth in staffing may indicate increased demand for their cakes or the need for additional help to meet customer needs.</li>
                <li className="mb-2">Global Presence: Their cakes are not only sold within the country but also internationally. This signifies a successful venture with a broad customer reach, potentially in multiple countries or regions.</li>
            </div>
            <div>
                <SectionTwo></SectionTwo>
                
            </div>
            </div>
        </div>
    );
};

export default About;