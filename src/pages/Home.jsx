import React from "react";
import "./Home.css"; // CSS file for styling
import "../componects/Nav/Nav.css"; // CSS file for Nav component
import Nav from "../componects/Nav/Nav.jsx"; // Importing Nav component
import Hero from "../componects/functions/Hero.jsx";
import ExclusiveCollections from "../componects/functions/ExclusiveCollections.jsx";
import Categories from "../componects/functions/Categories.jsx";
import Testimonials from "../componects/functions/Testimonials.jsx";
import NewArrivals from "../componects/functions/NewArrivals.jsx";

function Home() {
  return (
    <div>
      <Nav />
      <Hero
        title="Elevate Your Style"
        subtitle="Discover luxury chains, watches, and timeless accessories crafted to perfection."
        bgImage="/bg.webp"
        primaryBtn={{ text: "Shop Now", link: "/shop" }}
        secondaryBtn={{ text: "Explore", link: "/about" }}
      />

      <ExclusiveCollections />
      <Categories />
      <Testimonials />
      <NewArrivals />
    </div>
  );
}

export default Home;
