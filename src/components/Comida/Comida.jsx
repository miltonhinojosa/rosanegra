import React, { useState } from "react";

const Comida = ({ title, description, image, buttonColor, borderColor, onOpen }) => {
  return (
    <div className={`w-60 p-2 bg-white rounded-xl border-4 ${borderColor} transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl`}>
      <img className="h-40 w-full object-cover rounded-xl" src={image} alt={title} />
      <div className="p-2 text-center">
        <h2 className="font-bold text-lg text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="m-2 flex justify-center">
        <button 
          onClick={() => onOpen(image)} 
          className={`text-white px-4 py-2 rounded-md font-semibold transition-all duration-300 hover:opacity-80 ${buttonColor}`}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

const Modal = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 mt-24 z-10" onClick={onClose}>
      <div className="bg-white p-4 rounded-lg shadow-lg w-auto max-w-2xl">
        <img src={image} alt="Expanded" className="w-full rounded-lg"/>
      </div>
    </div>
  );
};

export default function ComidaGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  const cards = [
    { title: "Silpancho", description: "El silpancho es un plato boliviano con carne apanada, arroz, y papas.", image: "/img/comida1.jpg", buttonColor: "bg-purple-600", borderColor: "border-blue-500" },
    { title: "Pique Macho", description: "Un plato lleno de sabor con papas fritas, carne y salchichas.", image: "/img/comida2.jpg", buttonColor: "bg-sky-500", borderColor: "border-red-500" },
    { title: "Paylita", description: "Plato boliviano con carne, papas, arroz, huevo frito y ensalada.", image: "/img/comida3.jpg", buttonColor: "bg-green-500", borderColor: "border-yellow-500" },
    { title: "Pecho/Ala/Pierna", description: "Diferentes cortes de pollo preparados con sazón especial.", image: "/img/comida4.jpg", buttonColor: "bg-yellow-500", borderColor: "border-purple-500" },
    { title: "Hamburguesa", description: "Carne jugosa, pan suave, queso derretido y vegetales frescos. ¡Un festín!", image: "/img/comida5.jpg", buttonColor: "bg-orange-500", borderColor: "border-green-500" },
    { title: "Tacos", description: "Ala, pecho y pierna, ¡una explosión de sabor en cada bocado!.", image: "/img/comida6.jpg", buttonColor: "bg-purple-500", borderColor: "border-pink-500" },
    { title: "Pipoca de pollo", description: "bocaditos crujientes, fritos y perfectos para compartir con amigos y familia.", image: "/img/comida7.jpg", buttonColor: "bg-orange-500", borderColor: "border-blue-500" },
    { title: "Alitas a la barbacoa", description: "Crujientes por fuera, jugosas por dentro, ¡un festín irresistible!.", image: "/img/comida8.jpg", buttonColor: "bg-yellow-500", borderColor: "border-red-500" },
    { title: "Alitas a la mostaza", description: "Crujientes por fuera, jugosas por dentro, ¡un sabor inolvidable!.", image: "/img/comida9.jpg", buttonColor: "bg-sky-500", borderColor: "border-orange-500" },
    { title: "Salchipapa", description: "Papas fritas con salchichas, salsas y otros ingredientes al gusto.", image: "/img/comida10.jpg", buttonColor: "bg-green-500", borderColor: "border-indigo-500" },
  ];
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-900 to-purple-800 py-6">
      <div className="text-center mb-6">
        <h1 className="text-white text-5xl font-extrabold uppercase tracking-widest drop-shadow-lg">
          Menú de Comida
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {cards.map((card, index) => (
          <Comida key={index} {...card} onOpen={setSelectedImage} />
        ))}
      </div>

      <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

