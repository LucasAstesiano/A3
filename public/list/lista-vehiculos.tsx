import { useEffect, useState } from "react";

type Vehiculo = {
  imagen: string;
  precio: string;
  modelo: string;
  anio: string;
  link: string;
};

export default function VehiclesGrid() {
  const [items, setItems] = useState<Vehiculo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/deruedas.json")
      .then(r => r.json())
      .then((data: Vehiculo[]) => setItems(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando vehículos…</div>;
  if (!items.length) return <div>No hay vehículos para mostrar.</div>;

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {items.map((v, i) => (
        <a key={i} href={v.link} target="_blank" rel="noreferrer"
           className="rounded-2xl shadow p-3 hover:shadow-lg transition">
          <div className="aspect-[4/3] overflow-hidden rounded-xl mb-3">
            <img
              src={v.imagen}
              alt={`${v.modelo} ${v.anio}`}
              className="w-full h-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/fallback-car.jpg"; }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="font-semibold">{v.modelo}</div>
            <div className="text-sm opacity-70">{v.anio}</div>
          </div>
          <div className="mt-1 text-lg">{v.precio}</div>
        </a>
      ))}
    </div>
  );
}
