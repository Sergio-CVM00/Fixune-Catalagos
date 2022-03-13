export default function Mapita (){
    return(
              <div className="h-full px-4 py-4 mx-auto my-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid content-center gap-5 row-gap-8 lg:grid-cols-2">
                  <div className="flex flex-col justify-between ">
                    <div className="max-w-xl mb-6">
                      <h2 className="max-w-lg mb-6 font-sans text-6xl antialiased font-bold tracking-tight text-gray-900 sm:text-7xl sm:leading-none">
                        Estamos a tu alcance
                      </h2>
                      <p className="text-base text-gray-700 md:text-lg">
                      </p>
                    </div>
                    <div className="grid content-center gap-5 row-gap-8 sm:grid-cols-2" >
                      <div className="bg-white border-l-4 shadow-sm">
                        <div className="h-full p-5 border border-l-0 rounded-r">
                          <h6 className="mb-2 text-lg font-semibold leading-5">
                            Nuestro nº de teléfono:
                          </h6>
                          <p className="text-base text-orange-500">
                            <a href="tel:956 06 68 76">956 06 68 76</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                        <div className="h-full p-5 border border-l-0 rounded-r">
                          <h6 className="mb-2 text-lg font-semibold leading-5">
                            Nuestro correo electrónico:
                          </h6>
                          <p className="text-base text-orange-500">
                          <a href="mailto:hola@gmail.com">fixune-contacto@gmail.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                        <iframe  class="w-full h-56 rounded shadow-lg sm:h-96" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12843.442433619037!2d-6.14929341028087!3d36.41256764889552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c345f1d48071b%3A0x403d99b181cd3a53!2sFIXUNE%20S.L.!5e0!3m2!1ses!2ses!4v1646254824584!5m2!1ses!2ses"></iframe>
                  </div>
                  
                </div>
              </div>
    )
}