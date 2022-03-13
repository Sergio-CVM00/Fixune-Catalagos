import Link from "next/link";
export default function Content () {
    return (
        <div class="bg-orange-500 h-128 flex items-center justify-center px-16">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl">
                            Dejalo en nuestras manos
                        </h2>
                        <p className="text-base font-semibold tracking-tight text-gray-900 md:text-lg" >
                            No dudes en ponerte en contacto con nuestro equipo, sin ningún tipo compromiso. Si quieres saber mas pincha en este enlace.
                        </p>
                    </div>
                    <div>
                    <Link href="../contacto">
                        <a
                            
                            aria-label=""
                            className="inline-flex items-center text-lg font-bold duration-200 texttransition-colors text-gray-50 hover:text-gray-300"
                        >
                            Contacta con nosotros
                            <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                            >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                    <img
                        className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                        src="https://i.ibb.co/pyWVQ5w/rosebox-BFd-SCxmqv-Yc-unsplash.jpg"
                        alt=""
                    />
                    <img
                        className="object-cover w-20 h-20 rounded shadow-lg sm:h-44 xl:h-60 sm:w-44 xl:w-60"
                        src="https://i.ibb.co/vvMw11J/mostafa-tarek-bxwa-Unpn-Xb-M-unsplash.jpg"
                        alt=""
                    />
                    </div>
                    <div className="px-3">
                    <img
                        className="object-cover rounded shadow-lg h-96 w-96 sm:h-auto xl:h-auto sm:w-auto xl:w-auto"
                        src="https://i.ibb.co/gFyDCxV/ruchindra-gunasekara-GK8x-XCc-DZg-unsplash.jpg"
                        alt=""
                    />
                    </div>
                </div>
                </div>
            </div>
      </div>
    );
  };