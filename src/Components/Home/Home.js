import React from 'react';
import Stone from "./Stone/Stone";
import Trend from "./Trend/Trend";
import Kind from "./Kind/Kind";
import Row from "./Row/Row";
import Year from "./Year/Year";
import Dealer from "./Dealer/Dealer";
import Video from "./Video/Video";
import Visit from "./Vizit/Vizit";
import Map from "./Map/Map";



const Home = () => {
    return (
        <>
            <Stone/>
            <Trend/>
             <Kind/>
            <Row/>
             <Year/>
            <Dealer/>
            <Video/>
            <Visit/>
            <Map/>
        </>
    );
};

export default Home;