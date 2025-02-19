import React from "react";


const articles = [
  {
    image: "img/foto1.jpg",
    alt: "ROSA NEGRA",
    title: "Noches con estilo",
    text: "Brindemos por los buenos momentos.",
    borderColor: "border-blue-500",
  },
  {
    image: "img/foto2.jpg",
    alt: "ROSA NEGRA",
    title: "El alma de la noche",
    text: "Cada trago cuenta una historia.",
    borderColor: "border-green-500",
  },
  {
    image: "img/foto3.jpg",
    alt: "ROSA NEGRA",
    title: "Un viaje sensorial",
    text: "Tu sonrisa es nuestra mejor recompensa.",
    borderColor: "border-yellow-500",
  },
  {
    image: "img/foto4.jpg",
    alt: "ROSA NEGRA",
    title: "Pasión nocturna", 
    text: "Disfruta de la vida, un sorbo a la vez.",
    borderColor: "border-purple-500",
  },
  {
    image: "img/foto5.jpg",
    alt: "ROSA NEGRA",
    title: "El rincón perfecto",
    text: "Aquí, cada noche es especial.",
    borderColor: "border-red-500",
  },
  {
    image: "img/foto6.jpg",
    alt: "ROSA NEGRA",
    title: "Ritmos y sabores",
    text: "¡Siente la vibra de la Rosa Negra!",
    borderColor: "border-indigo-500",
  },
  {
    image: "img/foto7.jpg",
    alt: "ROSA NEGRA",
    title: "Sabor y misterio",
    text: "Donde la diversión nunca termina.",
    borderColor: "border-purple-500",
  },
  {
    image: "img/foto8.jpg",
    alt: "ROSA NEGRA",
    title: "Tu lugar secreto",
    text: "Tu felicidad es nuestra misión.",
    borderColor: "border-indigo-500",
  },
  {
    image: "img/foto9.jpg",
    alt: "ROSA NEGRA",
    title: "Vive la Rosa Negra",
    text: "Ven por el sabor, quédate por la compañía.",
    borderColor: "border-orange-500",
  },
  {
    image: "img/foto10.jpg",
    alt: "ROSA NEGRA",
    title: "Eterno sabor",
    text: "La Rosa Negra: El corazón de la noche.",
    borderColor: "border-green-500",
  },
];


const ArticleCard = ({ image, alt, title, text, borderColor }) => {
  return (
    <div className={`bg-white shadow-md rounded-xl overflow-hidden border-4 ${borderColor}`}>
      <img src={image} alt={alt} className="w-full h-80 object-cover" />
      <div className="p-4 text-center">
        <h5 className="text-lg font-bold text-gray-800">{title}</h5>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
};

const ArticlesList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-800 p-10 py-6">
      <h1 className="text-5xl font-extrabold text-white uppercase tracking-widest text-center mb-4">
        Sobre Nosotros
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
