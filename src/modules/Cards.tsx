import React from 'react';

type CardProps = {
    title: string;
    description?: string;
    imageUrl?: string;
    children?: React.ReactNode;
    price?:string;
    year?:string;
    type?:"Nuevo"|"Usado";
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children,price,year,type }) => (
    <div className=' p-4 rounded-lg md:w-3/5 text-center bg-[#f2f2f2] flex sm:w-full ' >
        {imageUrl && (
            <img
                src={imageUrl}
                alt={title}
                style={{ width:200,height:150, marginBottom: '12px' }}
                className='rounded-lg'
            />
        )}
        <div className='ml-4 text-left'>
        <h3 className="text-gray-700 font-bold" style={{ margin: '0 0 8px 0' }}>{title}</h3>
        {description && <p style={{ margin: '0 0 12px 0', color: '#555' }}><span className='font-semibold'>Versión:</span> {description}</p>}
        {year && <p className="text-gray-700 font-semibold" style={{ margin: '0 0 12px 0' }}>Año: {year}</p>}
        {type && <p className="text-gray-700 font-semibold" style={{ margin: '0 0 12px 0' }}> {type}</p>}
        {price && <p className="text-green-600 font-semibold" style={{ margin: '0 0 12px 0' }}>{price}</p>}
        {children}
        </div>
    </div>
);

export default Card;