import Link from "next/link";
export default function Content () {
    return (
            <aside class="relative overflow-hidden text-white bg-gradient-to-r from-orange-400 to-orange-700">
                <div class="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
                    <h2 class="text-4xl font-bold sm:text-5xl">
                        Contacta con nosotros
                        <span class="hidden sm:block">
                        </span>
                    </h2>

                    <p class="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
                    No dudes en ponerte en contacto con nuestro equipo, sin ningún tipo compromiso. Si quieres saber mas pincha en este enlace.
                    </p>

                    <a class="inline-flex items-center px-6 py-3 font-medium bg-black rounded-full hover:opacity-75" href="">
                        Ver más

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 ml-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    </div>
                </div>

                <div class="absolute inset-0 w-full h-full mix-blend-multiply">
                    <img
                    src="https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
                    alt="New robot toy"
                    class="absolute inset-0 object-cover object-top w-full h-full"
                    />
                </div>
            </aside>
    );
  };


  /*

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
  */