import React from "react";
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";

const Hero = () => {
    return (
        <section className="flex justify-center mt-20 md:mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* descripciones */}
                <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-32">
                    <motion.img
                        variants={slideUp(0.2)}
                        initial="initial"
                        animate="animate"
                        className="p-1 ml-3"
                        src={Logo}
                        alt="logo del Juego"
                    />
                    <motion.p
                        variants={slideUp(0.3)}
                        initial="initial"
                        animate="animate"
                        className="py-4 text-white bg-purple-900 bg-opacity-30 backdrop-blur-md p-4 rounded-3xl text-justify"
                    >
                        Magic Quest es un emocionante juego de aventuras en un
                        mundo de fantasía donde te embarcas en una épica
                        búsqueda mágica. Explora reinos misteriosos, domina
                        poderosos hechizos y enfréntate a criaturas legendarias
                        mientras desvelas secretos ocultos y te conviertes en el
                        héroe supremo. ¡La magia está en tus manos!
                    </motion.p>
                    <motion.div
                        variants={slideUp(1)}
                        initial="initial"
                        animate="animate"
                        className="flex justify-center gap-4 p-3"
                    >
                        {/* Botón Jugar ahora */}
                        <a className="bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 flex items-center cursor-pointer">
                            Jugar ahora
                            <i className="ml-2 bi bi-controller text-xl"></i>
                        </a>

                        {/* Botón Ver Gameplay */}
                        <a className="text-white flex items-center cursor-pointer">
                            Ver GamePlay
                            <i className="ml-2 bi bi-youtube text-xl"></i>
                        </a>
                    </motion.div>
                </div>

                {/* imagen */}
                <motion.div
                    variants={slideInFromSide("right", 0.5)}
                    initial="initial"
                    animate="animate"
                    className="flex justify-end sm:mt-0 md:mt-20 lg:mt-10 xl:mt-8"
                >
                    <img src={Personaje} alt="Modelo" className="mt-12" />
                </motion.div>
            </div>
            
        </section>
    );
};

export default Hero;
