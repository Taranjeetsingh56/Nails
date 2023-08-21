/** @format */
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import "./App.css";
const NailExtensionCard = ({ title, description, image }) => (
  <div className="nail-extension-card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

function App() {
  const nailExtensions = [
    {
      title: "Acrylic Extensions",
      description:
        "Durable and versatile acrylic nail extensions with price-899 only",
      image: "/acrylic.jpeg",
    },
    {
      title: "Gel Extensions",
      description:
        "Flexible and natural-looking gel nail extensions with price-699 only",
      image: "/gel.jpeg",
    },
    {
      title: "Temporary Extensions",
      description:
        "Make your nails beautiful by having temporary extension with price-499 only",
      image: "/temporary.jpeg",
    },
    {
      title: "Power Polish",
      description: "Power polish at a very affordable  price-299 only",
      image: "/ppolish.jpeg",
    },
    {
      title: "Gel Overlays",
      description:
        "Make your nails beautiful by having gel overlays with price-399 only",
      image: "/overlays.jpeg",
    },
    {
      title: "Toe Extensions",
      description:
        "Toes are the essential part of female beauty and make your toe nails extension with price-499 only",
      image: "/toe.jpeg",
    },
    {
      title: "Toe Power Polish",
      description:
        "Toes are the essential part of female beauty and make your toe power polish at an affordable price-299 only",
      image: "/tpp.png",
    },
    {
      title: "Removal",
      description:
        "Removal of all types of nails acrylic, temporary, gel-extensions etc can be done with a price-399 only",
      image: "/rem.jpeg",
    },
    {
      title: "Refilling",
      description:
        "Refilling of nails can also be done at an affordable price-399 only",
      image: "/ref.jpeg",
    },

    // Add more nail extension types here
  ];

  return (
    <>
      <div className="App">
        <div className="heading">
          <h1>Nail Extensions by Deepika</h1>
        </div>
        <div className="nail-extension-list">
          {nailExtensions.map((extension, index) => (
            <NailExtensionCard
              key={index}
              title={extension.title}
              description={extension.description}
              image={extension.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
