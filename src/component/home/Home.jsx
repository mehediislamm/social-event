/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Cards from "../cards/Cards";
import SectionOne from "./sectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import Footer from "../footer/Footer";




const Home = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div>
            <Banner></Banner>
            <div>
                <h1>Our Service</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-16">

                    {
                        cards?.map(card => <Cards key={card.id}
                            card={card}></Cards>)

                    }
                </div>
            </div>

            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <Footer></Footer>

        </div>
    );
};

export default Home;