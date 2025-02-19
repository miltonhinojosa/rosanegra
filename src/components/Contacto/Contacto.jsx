import { useState } from "react";
 
const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: "", correo: "", telefono: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    let newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = true;
    if (!formData.correo.trim()) newErrors.correo = true;
    else if (!validateEmail(formData.correo)) newErrors.correo = true;
    if (!formData.telefono.trim()) newErrors.telefono = true;
    if (!formData.mensaje.trim()) newErrors.mensaje = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSuccessMessage("Mensaje enviado correctamente.");
      setFormData({ nombre: "", correo: "", telefono: "", mensaje: "" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-800 p-5">
      
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8 py-0">
          <h1 className="text-5xl font-extrabold text-white uppercase tracking-widest text-center mb-5">
            Contacto
          </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="img/contact.jpg"
                  alt="Contacto"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                />
                <div className="text-white absolute bottom-0 w-full lg:p-5 p-2">
                  <div className="top-0 left-0 w-full bg-black bg-opacity-30 backdrop-blur-md rounded-lg p-4 block">
                    <a href="#" className="flex items-center mb-3">
                      <i className="ml-2 bi bi-telephone text-xl"></i>
                      <h5 className=" text-base font-normal leading-6 ml-5">69605774</h5>
                    </a>
                    <a href="#" className="flex items-center mb-3">
                      <i className="ml-2 bi bi-envelope text-xl"></i>
                      <h5 className=" text-base font-normal leading-6 ml-5">Rosanegra@gmail.com</h5>
                    </a>
                    <a href="#" className="flex items-center">
                      <i className="ml-2 bi bi-geo-alt text-xl"></i>
                      <h5 className=" text-base font-normal leading-6 ml-5">
                        San Alberto 640 entre 1 de abril y calama, Potosí, Bolivia
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl mx-5 py-auto w-full">
            <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11 text-center">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              {[{ name: 'nombre', placeholder: 'Nombre' }, { name: 'correo', placeholder: 'Correo Electrónico' }, { name: 'telefono', placeholder: 'Teléfono' }, { name: 'mensaje', placeholder: 'Mensaje' }].map((field) => (
                <div key={field.name} className="relative py-3">
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`w-full h-12 text-gray-600 placeholder-gray-400 border rounded-full pl-4 pr-10  ${errors[field.name] ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors[field.name] && (
                    <i className="bi bi-exclamation-circle-fill absolute right-4 top-3 text-red-500 text-xl py-3"></i>
                  )}
                </div>
              ))}
              <button type="submit" className="w-full h-12 text-white bg-indigo-600 rounded-full hover:bg-indigo-800 transition-all duration-700">
                Enviar
              </button>
            </form>
            {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
