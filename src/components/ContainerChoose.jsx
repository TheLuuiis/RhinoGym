import '../css/components/ContainerChoose.css';
import RefeOne from '../assets/image/refe_1.webp';
import RefeTwo from '../assets/image/refe_2.webp';

const ContainerChoose = () => {
    return (  
        <div>
            <div className="container__choose">
                <div className="choose">
                    <div className="title__choose">
                        <font>¿Por qué elegirnos?</font>
                        <h1>
                            Desarrolle fuerza, resistencia y confianza con nosotros
                        </h1>
                    </div>
                    <div className="container__benefits__choose">
                        <div className="img__choose">
                            <figure>
                                <img src={RefeOne} className='refeOne' alt="RefeOne"/>
                                <img src={RefeTwo} className='refeTwo' alt="RefeTwo"/>
                            </figure>
                        </div>
                        <div className="description__choose">
                            <div className="benefits">
                                <div className="number__benefits">
                                    <font>1</font>
                                </div>
                                <div className="description__benefits">
                                    <h3>Entrenadores personales certificados</h3>
                                    <font>
                                        Entrena con profesionales que guían cada uno de tus movimientos, garantizando la forma adecuada, seguridad y resultados más rápidos para tus objetivos de fitness.
                                    </font>
                                </div>
                            </div>
                            <div className="benefits">
                                <div className="number__benefits">
                                    <font>2</font>
                                </div>
                                <div className="description__benefits">
                                    <h3>Entrenadores personales certificados</h3>
                                    <font>
                                        Experimente máquinas de última generación y herramientas de entrenamiento funcional que hacen que cada entrenamiento sea efectivo, divertido y desafiante.
                                    </font>
                                </div>
                            </div>
                            <div className="benefits">
                                <div className="number__benefits">
                                    <font>3</font>
                                </div>
                                <div className="description__benefits">
                                    <h3>Entrenadores personales certificados</h3>
                                    <font>
                                        Únase a una comunidad de apoyo que lo inspira a mantenerse constante, superar sus límites y celebrar cada logro en el camino.
                                    </font>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContainerChoose;