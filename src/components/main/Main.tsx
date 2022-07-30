import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import CityCard from "../city-card/CityCard";
import AccomodationCard from "../accomodation-card/AccomodationCard";
import PlaceCard from "../place-card/PlaceCard";
import AccommodationScreen from "../accomodation-screen/AccommodationScreen";
import PopularLocations from "../popular-locations/PopularLocations";
import HomesGuestsLove from "../homes-guests-love/HomesGuestsLove";

const Main: React.FC = () => {
    return (
        <>
            <Navigation/>
            <Header/>
            <PopularLocations />
            <CityCard/>
            <HomesGuestsLove />
            <AccomodationCard/>
            <PlaceCard />
            <AccommodationScreen />
            <Footer/>
        </>
    );
}

export default Main;
