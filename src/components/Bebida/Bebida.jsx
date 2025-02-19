import { useRef, useState } from "react";

const images = [
    "img/bebida1.jpg", "img/bebida2.jpg", "img/bebida3.jpg", "img/bebida4.jpg",
    "img/bebida5.jpg", "img/bebida6.jpg", "img/bebida7.jpg", "img/bebida8.jpg",
    "img/bebida9.jpg", "img/bebida10.jpg"
];

const Bebida = () => {
    const trackRef = useRef(null);
    const [position, setPosition] = useState(0);

    const handlePrev = () => {
        if (trackRef.current) {
            const carruselWidth = trackRef.current.children[0].offsetWidth;
            setPosition((prev) => Math.min(prev + carruselWidth, 0));
        }
    };

    const handleNext = () => {
        if (trackRef.current) {
            const carruselWidth = trackRef.current.children[0].offsetWidth;
            const trackWidth = trackRef.current.scrollWidth;
            const listWidth = trackRef.current.parentNode.offsetWidth;
            setPosition((prev) => Math.max(prev - carruselWidth, listWidth - trackWidth));
        }
    };

    return (
        <div className="carousel bg-gradient-to-r from-blue-900 to-purple-800 p-5 py-3">
            <h1 className="text-5xl font-extrabold text-white uppercase tracking-widest text-center mb-3">
               Menú de Bebida
            </h1>
            <div className="carrusel-list">
                <button className="carrusel-arrow carrusel-prev" onClick={handlePrev}>
                    &#10094;
                </button>
                <div className="carrusel-track" ref={trackRef} style={{ left: `${position}px` }}>
                    {images.map((src, index) => (
                        <div className="carrusel" key={index}>
                            <div>
                                <a href="/">
                                    <h4><small>Sabor en cada trago.</small> OK.</h4>
                                    <picture>
                                        <img src={src} alt={`Imagen ${index + 1}`} />
                                    </picture>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carrusel-arrow carrusel-next" onClick={handleNext}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Bebida;