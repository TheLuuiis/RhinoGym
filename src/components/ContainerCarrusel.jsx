import '../css/components/ContainerCarrusel.css';

const ContainerCarrusel = () => {

    const Words = [
        'Agradece lo que tienes', 'Relájate a menudo', 
        'Preocúpate menos', 'Confía en tí', 
        'Cultiva hábitos', 'No hay límites',
        'Agradece lo que tienes', 'Relájate a menudo', 
        'Preocúpate menos', 'Confía en tí', 
        'Culitva hábitos', 'No hay límites',
    ];

    return (  
        <div className="container__carousel">
            <div className="carousel__track">
                {
                    Words.map((word, index) => {
                        return <span className="word" key={index}>{word}</span>
                    })
                }
            </div>
        </div>
    );
}
 
export default ContainerCarrusel;