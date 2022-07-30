import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import CityCard from "../city-card/CityCard";
import AccomodationCard from "../accomodation-card/AccomodationCard";
import PlaceCard from "../place-card/PlaceCard";
import AccommodationScreen from "../accomodation-screen/AccommodationScreen";

const Main: React.FC = () => {
    return (
        <>
            <Navigation/>
            <Header/>
            <CityCard/>
            <AccomodationCard/>
            <PlaceCard />
            <AccommodationScreen />
            <Footer/>
        </>
    );
}

export default Main;
