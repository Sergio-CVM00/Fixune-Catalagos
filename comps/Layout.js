import Footer3 from './FooterFinal'
import NavbarFinal from './NavbarFinal';
import { Children } from 'react';
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between h-screen bg-gray-50">
            <head>
                <title>Fixune-Catálogo</title>
            </head>
            <NavbarFinal></NavbarFinal>
            { children }
            <Footer3></Footer3>
        </div>
     );
}
 
export default Layout;