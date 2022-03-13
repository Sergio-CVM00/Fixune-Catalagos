import Link from 'next/link'

const NotFound = () => {
    return(
        <div className="text-center bg-gray-50">
            <h1 className='text-3xl'>No hemos encontrado esta pagina :(</h1>
            <p className='text-orange-500'> <Link href={"/"}><a>Volver a inicio</a></Link></p>
        </div>
    );
}

export default NotFound;