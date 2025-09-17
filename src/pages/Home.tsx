import React, { useEffect, useState } from 'react';
import Card from '../modules/Cards';

type Vehiculo = {
  imagen: string;
  precio: string;
  modelo: string;
  anio: string;
  link: string;
};

const Home: React.FC = () => {

      const [items, setItems] = useState<Vehiculo[]>([]);
    
      useEffect(() => {
        fetch("./list/deruedas.json")
          .then(r => r.json())
          .then((data: Vehiculo[]) => setItems(data) )          
          .catch(console.error)
          console.log(items);
          
      }, []);

      const [itemsShow,setItemsShow]=useState(6);

      const moreItems = () => {
        if (itemsShow < items.length) {
            setItemsShow(itemsShow + 4)
        }
      }
      const LessItems = () => {
            setItemsShow(6)
        
      }

      const listaVehiculos = () => {
        return (
            <section className='sm:w-[90%]  flex flex-wrap justify-self-center md:w-[80%]'>
                {items.map((item, index) => (
                    index < itemsShow &&
                    <div className='sm:w-full flex justify-around mt-20 md:w-1/2' key={index}>
                        <Card title={item.modelo} year={item.anio} price={item.precio} imageUrl={item.imagen}></Card>
                    </div>
                ))}
            </section>
        );
      }


    return (
        <section className='mb-10' >
            <div className=' bg-[url("./assets/A3-mobile.png")] md:bg-[url("./assets/A3.png")] w-[100%] h-[500px] bg-cover bg-center bg-no-repeat '>
            </div>
            <div className='mt-10'>
                <h2 className='text-gray-900 text-center font-bold text-2xl'>Encontrá tu proximo vehiculo</h2>
                <div>
                    <ul className='sm:flex-col md:flex md:flex-row justify-around mt-8 bg-[#f2f2f2] md:mx-20 sm:mx-4 p-4 rounded-lg shadow-lg '>
                    <li className='bg-white sm:w-full md:w-1/6 text-center text-red-700 px-6 py-2 rounded-lg font-bold cursor-pointer m-2'>Usados</li>
                    <li className='bg-white sm:w-full md:w-1/6 text-center text-red-700 px-6 py-2 rounded-lg font-bold cursor-pointer m-2'>Nuevos</li>
                    <li className='bg-white sm:w-full md:w-1/6 text-center text-red-700 px-6 py-2 rounded-lg font-bold cursor-pointer m-2'>Financiación</li>
                    <li className='bg-white sm:w-full md:w-1/6 text-center text-red-700 px-6 py-2 rounded-lg font-bold cursor-pointer m-2'>Vender</li>
                </ul>
                </div>
            </div>
            {listaVehiculos()}
            { itemsShow <= 6 ?
            <button className='text-center flex justify-self-center mt-8' onClick={()=>moreItems()}>Ver Más</button>
            :
             itemsShow >= items.length ?
             <button className='text-center flex justify-self-center mt-8' onClick={()=>LessItems()}>Ver Menos</button>
            :
             <div className='flex justify-center gap-4'>
                <button className='text-center flex justify-self-center mt-8' onClick={()=>moreItems()}>Ver Más</button>
                <button className='text-center flex justify-self-center mt-8' onClick={()=>LessItems()}>Ver Menos</button>
             </div>

            }
            <section>
                <div className='flex flex-col md:flex-row justify-around my-8'>
                    <div className='text-gray-900 bg-gray-200 md:w-1/3 p-8 rounded-md'>
                        <h2 className='text-2xl font-bold mb-4 text-red-600'>Dónde Estamos:</h2>
                        <p className='text-center mb-4'>Lateral Av. Francisco Gabrielli,Luzuriaga Mendoza, Argentina</p>
                        <p className='text-center mb-10'>Maipú Mendoza, Argentina</p>
                        <h2 className='text-2xl font-bold text-red-600' id='contacto'>Contactános</h2>
                        <p className='text-center mb-4'><span className='font-semibold'>Martin: </span>2612494435</p>
                        <p className='text-center mb-4'><span className='font-semibold'>Federico: </span>2612494435</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.422648062044!2d-68.80530492342916!3d-32.93984907154685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0bb54fbfad3d%3A0xa7cb1e42177dd25b!2sAutomotores%20A3!5e0!3m2!1ses-419!2sar!4v1758046816756!5m2!1ses-419!2sar" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </section>
    );
};

export default Home;