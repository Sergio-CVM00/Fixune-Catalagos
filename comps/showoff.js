/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'

export default function Cta3() {
    return (
<section className="bg-gray-50">
  <div className="max-w-screen-xl px-4 mx-auto lg:h-screen lg:items-center lg:flex">
    <div className="max-w-xl mx-auto text-center">
      <h1 className="font-sans font-bold leading-none tracking-tight text-8xl">
          Fixune
        <strong className="font-bold text-orange-600">
        </strong>
      </h1>
      <h1 className="font-sans text-4xl font-bold leading-none text-orange-600 sm:block">
        Tu proveedor de confianza
      </h1>

      <p className="mt-4 font-semibold sm:leading-relaxed sm:text-xl">
        Para los que saben elegir...
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link href="/hosteleria">
          <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-orange-600 rounded shadow sm:w-auto active:bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring">
            Hostelería
          </a>
        </Link>
        <Link href="/automocion">
          <a className="block w-full px-12 py-3 text-sm font-medium text-orange-600 rounded shadow sm:w-auto hover:text-orange-700 active:text-orange-500 focus:outline-none focus:ring">
            Automoción
          </a>
        </Link>
      </div>
    </div>
  </div>
</section>
    )
  }
  