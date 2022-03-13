export default function faqs (){
    return(
        <div className="mx-auto my-2 mt-24 md:container bg-gray-50">
            <div className="max-w-xl mb-10 text-center md:mx-auto lg:max-w-2xl md:mb-12">
          <h2 className="relative max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className=""></span>
            </span>{''}
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          </p>
        </div>
        
                <div class=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 space-y-6">
                            <details class="p-8 bg-white rounded-lg">
                                <summary class="text-xl font-medium">
                                <span> ¿Cómo puedo hablar con el equipo de fixune? </span>
                                </summary>

                                <p class="mt-4">
                                Toda la información que necesitas esta en la sección de arriba, pinchando en "contacta con nosotros" o através de la 
                                barra de navegación.
                                </p>
                            </details>

                            <details class="p-8 bg-white rounded-lg shadow-sm">
                                <summary class="text-xl font-medium"> 
                                <span> ¿Qué tipo de productos vendemos? </span>
                                </summary>

                                <p class="mt-4">
                                Tenemos una gran variedad de productos. Abarcamos los sectores de Hostelería, Automoción, etc. Puedes echarle un vistazo a nuestro catálogo.
                                </p>
                            </details>
                </div>
        </div>
        
    )
    
}