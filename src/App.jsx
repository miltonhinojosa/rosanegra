import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Fondo from "./assets/fondo.webp";
import Nosotros from "./components/Nosotros/Nosotros";
import Bebida from "./components/Bebida/Bebida";
import Comida from "./components/Comida/Comida";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
    const bgImagen = {
        backgroundImage: `url(${Fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        position: "relative",
    };

    return (
      <div>
          <div
              style={bgImagen}
              className="flex justify-center overflow-hidden min-h-screen"
          >
              <Navbar />
              <Hero />
          </div>
          <div id="nosotros">
              <Nosotros />
          </div>
          <div id="bebida">
              <Bebida />
          </div>
          <div id="comida">
              <Comida />
          </div>
          <div id="contacto">
              <Contacto />
          </div>
          <div id="footer">
              <Footer />
          </div>
      </div>
    );
}

export default App;