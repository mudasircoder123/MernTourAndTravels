import React from "react";
import Navbar from './SideBar';
import { useState,useEffect } from "react";
import './about.css';
import img from './image/whattsapp.jpeg';
import Footer from "./Footer";
const About = () => {

   const [show, setShow] = useState(false);

   useEffect(() => {
     const timer = setTimeout(() => setShow(true), 1000);
     return () => clearTimeout(timer);
   }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="header"> About us</h1>
        <div className="introduction ">
          <h1 className="heading">who we are? </h1>
          <p className={`fade-in ${show ? "show" : ""}`}>
            Nestled in the heart of the majestic Himalayas, we are a passionate
            and dedicated team of travel enthusiasts, born and raised in the
            breathtakingly beautiful valleys of Kashmir. With a profound love
            for our homeland and an intimate understanding of its culture,
            heritage, and hidden wonders, we created this travel company to
            offer others a chance to experience the enchantment of our land
            through our eyes. Our roots run deep in the soil of this region —
            every snow-capped mountain, every blooming tulip field, every
            winding river holds a story that we’re eager to share. Whether it's
            a tranquil houseboat stay on the serene waters of Dal Lake, an
            adrenaline-filled trek through the alpine meadows of Sonamarg, a
            spiritual retreat in the centuries-old shrines, or a warm cup of
            saffron Kehwa sipped beneath a Chinar tree, we strive to curate
            experiences that are not only visually stunning but emotionally
            resonant. With each journey, our mission is to provide travelers
            with more than just a vacation — we aim to deliver moments of awe,
            joy, connection, and cultural understanding. Guided by values of
            authenticity, hospitality, and sustainability, we invite you to
            explore Kashmir not just as a tourist, but as a guest, a friend, and
            a part of our extended family.
          </p>
        </div>
        <div className="sections ">
          <div className="one">
            <h1 className="heading"> Our History</h1>
            <p className={`fade-in ${show ? "show" : ""}`}>
              Our journey began with a simple yet powerful idea: to showcase the
              unmatched beauty and cultural richness of Kashmir to the world.
              Born from a group of local friends with a love for their land and
              a deep understanding of its heritage, we started as small-scale
              travel guides helping visitors discover authentic Kashmiri
              experiences. Over the years, our passion turned into a
              full-fledged travel company, serving thousands of travelers and
              becoming a trusted name in the region. What began in the lanes of
              Srinagar and the hills of Pahalgam is now a thriving venture
              dedicated to responsible and personalized tourism.
            </p>
          </div>
          <div className="one">
            <h1 className="heading"> Our Mission</h1>
            <p className={`fade-in ${show ? "show" : ""}`}>
              Our mission is to craft deeply immersive, culturally rich, and
              nature-connected journeys that not only fulfill the dreams of our
              travelers but also uplift the communities and environment we
              cherish. We aim to be more than a travel agency — we want to be a
              bridge between people and places, creating respectful and
              inspiring connections through every itinerary. With a strong
              emphasis on local expertise, sustainable practices, and heartfelt
              hospitality, we’re committed to showing the world the real
              Kashmir—beyond the postcards.
            </p>
          </div>
          <div className="one">
            <h1 className=" heading">Our Goals</h1>
            <p className={`fade-in ${show ? "show" : ""}`}>
              Looking ahead, we strive to expand our offerings while preserving
              the soul of our service: authenticity, care, and excellence. We
              aim to become a leading travel brand known for personalized,
              ethical, and high-quality experiences in Kashmir and beyond. Our
              goals include partnering with more local artisans, supporting
              eco-friendly accommodations, and developing off-the-beaten-path
              tours that benefit lesser-known communities. Ultimately, we hope
              to make travel a force for good—enriching both the visitor and the
              places they explore.
            </p>
          </div>
        </div>
        <header>
          <h1 className="header">Meet our founder,ceo and owner </h1>
        </header>
        <div
          class="founder-card"
          
        >
          <img src={img} alt="Mudasir Rashid" className="founder-image" />
          <div className="founder-info">
            <h2 className="founder-name">Mudasir Rashid</h2>
            <p className="founder-title">
              Software Engineer & Travel Enthusiast
            </p>
            <p className="founder-bio">
              With a background in technology and a heart rooted in exploration,
              Mudasir combines innovation with a passion for storytelling
              through travel. His vision is to bridge the digital world with the
              soulful beauty of Kashmir, one journey at a time.
            </p>
          </div>
        </div>

      </div>
  <Footer/>
    </>
  );

}
export default About;