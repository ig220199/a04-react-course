import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import CityCard from "../city-card/CityCard";
import AccomodationCard from "../accomodation-card/AccomodationCard";
import PlaceCard from "../place-card/PlaceCard";
import AccommodationScreen from "../accomodation-screen/AccommodationScreen";
import SectionHeader from "../section-header/SectionHeader";

const Main: React.FC = () => {
    return (
        <>
            <Navigation/>
            <Header/>
            <SectionHeader title="Popular locations"
                           arrowLabel="View all locations" />
            <CityCard/>
            <SectionHeader title="Homes guests love"
                           arrowLabel="View all homes" />
            <AccomodationCard/>
            <PlaceCard />
            <AccommodationScreen />
            <Footer/>
        </>
    );
}

export default Main;
