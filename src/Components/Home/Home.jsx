import React from "react";
import Navbar from "../../Navbar/Navbar";
import ImageList from "../ImageShow/ImageList";
import Images from "./Home.container";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Images />
            <ImageList/>
        </div>
    )
}

export default Home; 