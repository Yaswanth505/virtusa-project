import React from "react";
import Card from "./Card";
import himalaya from "../images/himalayas.jpg";
import vindya from "../images/vindya.jpg";
import karakoram from "../images/karakoram.jpg";

import marina from "../images/marina.jpg";
import goa from "../images/goa.jpg";
import calangunte from "../images/calangunte.jpg";

import tag from "../images/tag.jpg";
import crownePlaza from "../images/crowne-plaza.jpg";
import aaheli from "../images/aaheli.jpg";
import "../css/content.css";

function Content(props) {
    return (
        <div className="content">
            <div className="mountains" id="mountains">
                <h2>Mountains</h2>
                <div className="info">
                    <Card
                        image={himalaya}
                        title="Himalayas"
                        matter="The Himalayas or Himalaya is a mountain range in the South Asia.They cover approximately 2400 km (1,491 mi) and pass through the nations of India, Pakistan, Afghanistan, China (Tibet), Bhutan and Nepal.The Himalayan range is made up of three parallel ranges often referred to as the Greater Himalayas, the Lesser Himalayas, and the Outer Himalayas."
                    />

                    <Card
                        image={karakoram}
                        title="Karakoram"
                        matter="The Himalayas or Himalaya is a mountain range in the South Asia.They cover approximately 2400 km (1,491 mi) and pass through the nations of India, Pakistan, Afghanistan, China (Tibet), Bhutan and Nepal.The Himalayan range is made up of three parallel ranges often referred to as the Greater Himalayas, the Lesser Himalayas, and the Outer Himalayas."
                    />

                    <Card
                        image={vindya}
                        title="vindya"
                        matter="The Himalayas or Himalaya is a mountain range in the South Asia.They cover approximately 2400 km (1,491 mi) and pass through the nations of India, Pakistan, Afghanistan, China (Tibet), Bhutan and Nepal.The Himalayan range is made up of three parallel ranges often referred to as the Greater Himalayas, the Lesser Himalayas, and the Outer Himalayas."
                    />
                </div>
            </div>
            <div className="beaches" id="beaches">
                <h2>Beaches</h2>
                <div className="info">
                    <Card
                        image={marina}
                        title="Marina Beach"
                        matter="Marina beach in Chennai along the Bay of Bengal is India's longest and world's second longest beach. This predominantly sandy of nearly 12 kilometers extends from Beasant Nagar in the south to Fort St. George in the north. Chennai Marina beach was renovated by Governor Mountstuart Elphinstone Grant Duff in 1880s"
                    />

                    <Card
                        image={goa}
                        title="Goa"
                        matter="Marina beach in Chennai along the Bay of Bengal is India's longest and world's second longest beach. This predominantly sandy of nearly 12 kilometers extends from Beasant Nagar in the south to Fort St. George in the north. Chennai Marina beach was renovated by Governor Mountstuart Elphinstone Grant Duff in 1880s"
                    />

                    <Card
                        image={calangunte}
                        title="Calangunte"
                        matter="Marina beach in Chennai along the Bay of Bengal is India's longest and world's second longest beach. This predominantly sandy of nearly 12 kilometers extends from Beasant Nagar in the south to Fort St. George in the north. Chennai Marina beach was renovated by Governor Mountstuart Elphinstone Grant Duff in 1880s"
                    />
                </div>
            </div>
            <div className="restraunts" id="restaurants">
                <h2>Restraunts</h2>
                <div className="info">
                    <Card
                        image={tag}
                        title="Tag hotel"
                        matter="Jamsetji Tata was the founder of Taj hotel and it was founded in the year 1903. Rakesh Sarna is the MD and CEO of Taj hotel.It’s headquarter is situated in Mumbai, Maharashtra.There are around 108 hotels of Taj Group across India and 17 hotels situated overseas."
                    />
                    <Card
                        image={aaheli}
                        title="Aaheli"
                        matter="Jamsetji Tata was the founder of Taj hotel and it was founded in the year 1903. Rakesh Sarna is the MD and CEO of Taj hotel.It’s headquarter is situated in Mumbai, Maharashtra.There are around 108 hotels of Taj Group across India and 17 hotels situated overseas."
                    />
                    <Card
                        image={crownePlaza}
                        title="Crowne- Plaza"
                        matter="Jamsetji Tata was the founder of Taj hotel and it was founded in the year 1903. Rakesh Sarna is the MD and CEO of Taj hotel.It’s headquarter is situated in Mumbai, Maharashtra.There are around 108 hotels of Taj Group across India and 17 hotels situated overseas."
                    />
                </div>
            </div>
        </div>
    );
}
export default Content;
/**
 * 
            
            
 */
