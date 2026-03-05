import '../css/components/ContainerHero.css';
import MemberOne from '../assets/image/member_1.webp';
import MemberTwo from '../assets/image/member_2.webp';
import MemberThree from '../assets/image/member_3.webp';
import Hero from '../assets/image/hero.png';

const ContainerHero = () => {
    return (  
        <div className='container__hero'>
            <div className="description__hero">
                <h1>Transforma tu cuerpo y mente con <span>Rhino Gym</span></h1>
                <p>
                    Descubre entrenamiento de primera clase, entrenadores expertos y equipos modernos para ayudarte a alcanzar tus objetivos de fitness, desarrollar fuerza, quemar grasa y mantenerte motivado todos los días con nuestra dinámica experiencia de gimnasio.
                </p>
                <div className="buttons__hero">
                    <a href="#">Únete ahora</a>  
                </div>
                <div className="container__members__hero">
                    <div className="members__hero">
                        <img src={MemberOne} alt="MemberOne" />
                        <img src={MemberTwo} alt="MemberTwo" />
                        <img src={MemberThree} alt="MemberThree" />
                    </div>
                    <div className="description__members">
                        <font>Más de 200</font>
                        <span>miembros activos</span>
                    </div>
                </div>
            </div>
            <div className="img__hero">
                <figure>
                    <img src={Hero} alt="hero" />
                </figure>
            </div>
        </div>
    );
}
 
export default ContainerHero;