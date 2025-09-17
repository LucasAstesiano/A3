import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-[#1b1b1b]  ">
    {/* Logo de marca (puedes reemplazar el src por el logo real) */}
    <div className="flex justify-around hmin-[10em] pt-15 flex-wrap">
      <div className="text-center w-1/2">
        <h1 className="text-red-700 font-extrabold text-center">
          <span className="text-white">A</span>3
        </h1>
        <h4>Automotores</h4>
        <ul className="flex gap-4 justify-center  text-center mt-2">
          <li>
            <i className="fa-brands fa-instagram fa-xl"></i>
          </li>
          <li>
            <i className="fa-brands fa-whatsapp fa-xl"></i>
          </li>
          <li>
            <i className="fa-solid fa-car fa-xl"></i>
          </li>
        </ul>
      </div>

      <div className="text-center w-1/2">
        <h5 className="font-bold mb-2">Ubicación</h5>
        <p>Lateral Av. Francisco Gabrielli</p>
        <p> Lote 87, Luzuriaga</p>
        <button>
          <a href="https://maps.app.goo.gl/KUwNAqqYgt5j126y9">Ver Mapa</a>
        </button>
      </div>
      <div className="text-center">
        <h5 className="font-bold mb-2">Contacto</h5>
        <h5 className="font-bold">
          Martin:{" "}
          <span>
            <a href="tel mb-2:2612494435" className="font-semibold">
              {" "}
              2612494435
            </a>
          </span>
        </h5>
        <h5 className="font-bold">
          Federico:{" "}
          <span>
            <a href="tel:2612494435" className="font-semibold">
              {" "}
              2612494435
            </a>
          </span>
        </h5>
      </div>
    </div>
    <div
      style={{ marginTop: "16px", fontSize: "0.9em", opacity: 0.7 }}
      className="text-center pb-5 pt-5"
    >
      &copy; {new Date().getFullYear()} Automotores A3. Todos los derechos
      reservados.
    </div>
  </footer>
);

export default Footer;
