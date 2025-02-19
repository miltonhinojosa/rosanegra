import React from "react";
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";

const Hero = () => {
    return (
        <section className="flex justify-center mt-20 md:mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-32">
                    <motion.img
                        variants={slideUp(0.2)}
                        initial="initial"
                        animate="animate"
                        className="p-1 ml-3"
                        src={Logo}
                        alt="logo"
                    />
                    <motion.p
                        variants={slideUp(0.3)}
                        initial="initial"
                        animate="animate"
                        className="py-4 text-white bg-purple-900 bg-opacity-30 backdrop-blur-md p-4 rounded-3xl text-justify"
                    >
                        Bienvenidos a Rosa Negra, donde el misterio y la elegancia se mezclan en cada trago 
                        y cada bocado déjate envolver por la magia de nuestras noches únicas un lugar 
                        donde los sabores florecen en la penumbra y los momentos se convierten en recuerdos 
                        inolvidables atrévete a vivir la fascinante experiencia de Rosa Negra.
                        
                    </motion.p>
                    <motion.div
                        variants={slideUp(1)}
                        initial="initial"
                        animate="animate"
                        className="flex justify-center gap-4 p-3"
                    >
                        <a className="bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 flex items-center cursor-pointer" 
                           href="https://www.google.com/maps/dir/-19.580125,-65.7620992/-19.5805187,-65.7575989/@-19.5808435,-65.7645848,16z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                        >
                           Clic para Ubicación
                            <i className="ml-2 bi bi-geo-alt text-xl"></i>
                        </a>

                        <a className="text-white flex items-center cursor-pointer"
                        href="https://www.google.com/maps/place/San+Alberto+604-652,+Villa+Imperial+de+Potos%C3%AD/@-19.5805447,-65.7575254,3a,75y,213.84h,90t/data=!3m7!1e1!3m5!1sy5JxPIiaDkvAKkRmcENnqg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3Dy5JxPIiaDkvAKkRmcENnqg%26yaw%3D213.84013!7i13312!8i6656!4m17!1m10!4m9!1m4!2m2!1d-65.7620992!2d-19.580125!4e1!1m3!2m2!1d-65.7575989!2d-19.5805187!3m5!1s0x93f94e74fbfa0113:0x1ba7eb7a3f25beb!8m2!3d-19.5805581!4d-65.7575552!16s%2Fg%2F11lyg73ncg?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            Detalles
                            <i className="ml-2 bi bi-search text-xl"></i> 
                        </a>
                    </motion.div>
                </div>

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
