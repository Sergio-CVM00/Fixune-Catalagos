/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import Link from 'next/link'
const products = [
    {
      id: 1,
      name: 'Aire Acondicionado',
      href: '../catalogos/aire_acondicionado',
      imageSrc: '../imgs/ac.jpg',
      imageAlt: "",
    },
    {
        id: 2,
        name: 'Chapa y Pintura',
        href: '../catalogos/chapa_y_pintura',
        imageSrc: '../imgs/lija.jpg',
        imageAlt: "",
    },
    {
        id: 3,
        name: 'Corte y Abrasivos',
        href: '../catalogos/cortes_y_abrasivos',
        imageSrc: '../imgs/cortes.jpg',
        imageAlt: "",
    },
    {
        id: 4,
        name: 'Electricidad',
        href: '../catalogos/electricidad',
        imageSrc: '../imgs/bombilla.jpg',
        imageAlt: "",
    },
    {
        id: 5,
        name: 'EPI',
        href: '../catalogos/epi',
        imageSrc: '../imgs/zapato.png',
        imageAlt: "",
    },
    {
        id: 6,
        name: 'Equipamiento',
        href: '../catalogos/equipamiento',
        imageSrc: '../imgs/taller.jpg',
        imageAlt: "",
    },
    {
        id: 7,
        name: 'Herramienta Eléctrica',
        href: '../catalogos/herramienta_electrica',
        imageSrc: '../imgs/taladro.jpg',
        imageAlt: "",
    },
    {
        id: 8,
        name: 'Herramienta Manual',
        href: '../catalogos/herramienta_manual',
        imageSrc: '../imgs/llavefija.jpg',
        imageAlt: "",
    },
    {
        id: 9,
        name: 'Herramienta Neumática',
        href: '../catalogos/herramienta_neumatica',
        imageSrc: '../imgs/llaveimpacto.jpg',
        imageAlt: "",
    },
    {
        id: 10,
        name: 'Mecánica',
        href: '../catalogos/mecanica',
        imageSrc: '../imgs/abrazadera.jpg',
        imageAlt: "",
    },
    {
        id: 11,
        name: 'Ordenación',
        href: '../catalogos/ordenacion',
        imageSrc: '../imgs/gaveta.png',
        imageAlt: "",
    },
    {
        id: 12,
        name: 'Pequeño Material',
        href: '../catalogos/pequeno_material',
        imageSrc: '../imgs/screw.jpg',
        imageAlt: "",
    },
    {
        id: 13,
        name: 'Protección vehículo',
        href: '../catalogos/proteccion_vehiculo',
        imageSrc: '../imgs/prott.png',
        imageAlt: "",
    },
    {
        id: 14,
        name: 'Quimicos',
        href: '../catalogos/quimicos',
        imageSrc: '../imgs/quimico.png',
        imageAlt: "",
    },
    {
        id: 15,
        name: 'Soldadura',
        href: '../catalogos/soldadura',
        imageSrc: '../imgs/soldadura.png',
        imageAlt: "",
    },
    
]
  
export default function Cats() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 place-items-center">Automoción</h2>
  
          <div className="grid grid-cols-2 mt-6 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
            {products.map((product) => (
              
              <div key={product.id} className="relative group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center h-72 w-72 lg:w-full lg:h-full"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={product.href}>
                        <a>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    )
}
  