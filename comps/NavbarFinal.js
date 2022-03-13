import NextPage from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  SearchIcon,
  ViewListIcon,
  ExternalLinkIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const products = [
  {
    id: 1,
    name: 'Aire Acondicionado',
    href: '../catalogos/aire_acondicionado',
    imageSrc: '',
    imageAlt: "",
  },
  {
      id: 2,
      name: 'Chapa y Pintura',
      href: '../catalogos/chapa_y_pintura',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 3,
      name: 'Corte y Abrasivos',
      href: '../catalogos/cortes_y_abrasivos',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 4,
      name: 'Electricidad',
      href: '../catalogos/electricidad',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 5,
      name: 'EPI',
      href: '../catalogos/epi',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 6,
      name: 'Equipamiento',
      href: '../catalogos/equipamiento',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 7,
      name: 'Herramienta Eléctrica',
      href: '../catalogos/herramienta_electrica',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 8,
      name: 'Herramienta Manual',
      href: '../catalogos/herramienta_manual',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 9,
      name: 'Herramienta Neumática',
      href: '../catalogos/herramienta_neumatica',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 10,
      name: 'Mecánica',
      href: '../catalogos/mecanica',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 11,
      name: 'Ordenación',
      href: '../catalogos/ordenacion',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 12,
      name: 'Pequeño Material',
      href: '../catalogos/pequeno_material',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 13,
      name: 'Protección vehículo',
      href: '../catalogos/proteccion_vehiculo',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 14,
      name: 'Quimicos',
      href: '../catalogos/quimicos',
      imageSrc: '',
      imageAlt: "",
  },
  {
      id: 15,
      name: 'Soldadura',
      href: '../catalogos/soldadura',
      imageSrc: '',
      imageAlt: "",
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarFinal() {
  return (
      <Popover className="relative bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <span className="sr-only">Fixune logo</span>
                  <img
                    className="w-48 h-12"
                    src="https://i.ibb.co/jDdV4mh/fixune-logo-removebg-preview-1.png"
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                      )}
                    >
                      <span>Automoción</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-orange-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
  
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid grid-cols-1 gap-3 px-5 py-6 bg-white sm:gap-4 sm:p-4">
                            <p class="font-bold">Automoción</p>
                            {products.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-start p-2 -m-3 rounded-lg hover:bg-orange-100"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="../hosteleria">
                <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                  Hostelería
                </a>
              </Link>
              <Link href="../contacto">
                <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                  Contacto
                </a>
              </Link>
              <Link href="../">
                <a className="text-base font-medium text-gray-500 hover:text-orange-600">
                  Inicio
                </a>
              </Link>
            </Popover.Group>
          </div>
        </div>
  
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 z-40 p-2 transition origin-top-right transform md:hidden">
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                    <div>
                      <Link href="/">
                        <img
                          className="w-auto h-8"
                          src="https://i.ibb.co/9tmgptD/Webp-net-resizeimage-2.png"
                          alt="Fixune"
                        />
                      </Link>
                    </div>
                  
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-y-3">
                    <h1 class="font-semibold text-lg">Automoción</h1>
                    {products.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-2 -m-3 rounded-md hover:bg-orange-200"
                      >
                        <span className="ml-4 text-base font-medium text-gray-900">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link href="/hosteleria">
                    <a  className="text-lg font-semibold text-gray-900 hover:text-orange-500">
                      Hostelería
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link href="/contacto">
                    <a className="text-lg font-semibold text-gray-900 hover:text-orange-500">
                      Contacto
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    )
}