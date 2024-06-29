import React, { useState } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Heading from "../components/Heading";
import SliderComp from "../components/SliderComp.js";
import Getstarted from "../components/Getstarted.js";
import Faq from "../components/Faq.js";
import Carousel from "../components/Carousel.js";
import Footer from "../components/Footer.js";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <>
      <Heading title="Kairaa Blockchain Academy" description="" />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />

      <SliderComp   open={open}
        setOpen={setOpen} />
      <Hero />
      <Carousel />
      <Getstarted />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
