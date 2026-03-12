import '../css/components/ContainerPlan.css';
import { Check } from 'lucide-react';

const ContainerPlan = () => {
    return (  
       <div className="container__plan">
            <div className="title__plan">
                <font>Planes de precios</font>
                <h1>Elige el plan perfecto que realmente se adapte a ti</h1>
                <p>
                    Opciones de membresía flexibles para cada estilo de vida, desde sesiones individuales hasta paquetes completos con instalaciones de clase mundial.
                </p>
            </div>
            <div className="plan">
                <div className="card__plan">
                    <h2>Plan de 3 meses</h2>
                    <p>Perfecto para principiantes</p>
                    <div className="price__card">
                        <span>120 $</span>
                        <sub>/ 3 meses</sub>
                    </div>
                    <div className="contianer__cards__benefits">
                        <h3>Beneficios:</h3>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Acceso ilimitado al gimnasio y uso de equipo.
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Acceso a todas las clases de fitness grupales
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Uso gratuito de taquillas y duchas.
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Seguimiento mensual de la composición corporal.
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                10% de descuento en entrenamiento personal.
                            </p>
                        </div>
                    </div>
                    <button>Elige tu plan</button>
                </div>
                <div className="card__plan">
                    <h2>Plan de 3 meses</h2>
                    <p>Perfecto para principiantes</p>
                    <div className="price__card">
                        <span>210 $</span>
                        <sub>/ 3 meses</sub>
                    </div>
                    <div className="contianer__cards__benefits">
                        <h3>Beneficios:</h3>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Acceso ilimitado al gimnasio y uso de equipo.
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Acceso a todas las clases de fitness grupales
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Uso gratuito de taquillas y duchas.
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Seguimiento mensual de la composición corporal.
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                15% de descuento en entrenamiento personal.
                            </p>
                        </div>
                    </div>
                    <button>Elige tu plan</button>
                </div>
                <div className="card__plan">
                    <h2>Plan de 3 meses</h2>
                    <p>Perfecto para principiantes</p>
                    <div className="price__card">
                        <span>360 $</span>
                        <sub>/ 3 meses</sub>
                    </div>
                    <div className="contianer__cards__benefits">
                        <h3>Beneficios:</h3>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Acceso ilimitado al gimnasio y uso de equipo.
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Acceso a todas las clases de fitness grupales
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Uso gratuito de taquillas y duchas.
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                Seguimiento mensual de la composición corporal.
                            </p>
                        </div>
                        <div className="benefit">
                            <Check color="#04F631"/>
                            <p>
                                25% de descuento en entrenamiento personal.
                            </p>
                        </div>
                    </div>
                    <button>Elige tu plan</button>
                </div>
            </div>
       </div> 
    );
}
 
export default ContainerPlan;