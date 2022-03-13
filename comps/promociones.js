export default function Promociones () {
    return (
      <div className="px-4 py-16 mx-auto mt-32 mb-32 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 font-bold tracking-wider text-orange-600 uppercase rounded-full text-md">
              Promociones
            </p>
          </div>
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
            No te pierdas ninguna de nuestras ofertas
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://i.ibb.co/6mPvcqS/1111.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://i.ibb.co/qy1rn78/2222.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://i.ibb.co/WGDjzQ6/33333.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://i.ibb.co/VCWsPR2/45444.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center sm:justify-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-gray-800"
          >
            Proximamente...
          </a>
        </div>
      </div>
    );
  };