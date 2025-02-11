import React from 'react'
import Personaje3 from "../../assets/Personaje3.png";

const Bebida = () => {
  const cards = [
    { imgSrc: "Personaje3", class: "cc__1" },
    { imgSrc: "../../assets/Personaje3.png", class: "cc__2" },
    { imgSrc: "../assets/Personaje3.png", class: "cc__3" },
    { imgSrc: "../assets/Personaje3.png", class: "cc__4" },
    { imgSrc: "../assets/Personaje3.png", class: "cc__5" },
    { imgSrc: "../assets/Personaje3.png", class: "cc__6" },
    { imgSrc: "../assets/Personaje3.png", class: "cc__7" },
    { imgSrc: "../assets/Personaje3.png", class: "cc__8" },
  ];

  return (
    <div className="flex justify-center items-center h-screen p-30 m-11 sm:p-10 md:p-15 lg:p-30 xl:p-32 text-white bg-purple-900 bg-opacity-30 backdrop-blur-md rounded-3xl text-justify">
        <div className="carrusel">
          {cards.map((card, index) => (
            <div key={index} className={`caixa__card ${card.class}`}>
              {<img src={card.imgSrc} alt="" width="30px" />}
            </div>
          ))}
        </div>
    </div>
  );
};

export default Bebida;