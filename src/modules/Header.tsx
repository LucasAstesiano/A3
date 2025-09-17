import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header: React.FC = () => {
  return (
    <header className="bg-black">
        <section className="bg-[#ec09095e] p-1 ">
            <ul className="flex gap-4 justify-end pr-4">
                <li><i className="fa-brands fa-instagram fa-xl"></i></li>
                <li><i className="fa-brands fa-whatsapp fa-xl"></i></li>
                <li><i className="fa-solid fa-car fa-xl"></i></li>
            </ul>
        </section>
      <section className={"bg-black p-4 flex justify-between"}>
        <h2 className={"text-3xl text-white font-bold"}>
          {" "}
          A<span className="text-red-700 text-3xl">3 </span>
        </h2>
        <ul className="flex justify-between gap-4 font-bold cursor-pointer">
          <li><a className="hover:!text-red-800 !text-white" href="#contacto">Home</a></li>
          <li><a className="hover:!text-red-800 !text-white font-extrabold" href="">Contacto</a></li>
          <li><a className="hover:!text-red-800 !text-white" href="">Servicios</a></li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
