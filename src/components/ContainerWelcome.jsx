import '../css/components/ContainerWelcome.css';
import HeroWelcomeOne from '../assets/image/welcome_1.webp';
import HeroWelcomeTwo from '../assets/image/welcome_2.webp';

const ContainerWelcome = () => {
    return (  
        <div className="container__welcome">
            <div className="container__hero__welcome">
                <img src={HeroWelcomeOne} alt="HeroWelcomeOne"/>
                <img src={HeroWelcomeTwo} alt="HeroWelcomeTwo"/>
                <div className="experience__welcome">
                    <h1>4</h1>
                    <p>Años de experiencia</p>
                </div>
            </div>
            <div className="descripion__welcome">
                <font>Bienvenido a Rhino Gym</font>
                <h2>Supera los límites y libera tu fuerza</h2>
                <p>
                    Disfruta de una experiencia de fitness diseñada para desafiar tu cuerpo y agudizar tu mente. Con entrenadores expertos, equipo de vanguardia y programas diseñados para todos los niveles, ganarás la fuerza, la confianza y los resultados que siempre has deseado. Cada entrenamiento te acerca a alcanzar tu máximo potencial.
                </p>
                <a href="#">únete ahora</a>
            </div>
        </div>
    );
}
 
export default ContainerWelcome;