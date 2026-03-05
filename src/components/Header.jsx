import '../css/components/Header.css';
import { Sun } from 'lucide-react';
//import logo from '../assets/image/logo.jpg';

const Header = () => {
    return (  
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Acerca de</a>
                    </li>
                    <li>
                        <a href="#">Equipo</a>
                    </li>
                    <li>
                        <a href="#">Precios</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                    <li>
                        <a href="#">
                            <Sun />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;