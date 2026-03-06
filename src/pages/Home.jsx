import '../css/pages/Home.css';
import ContainerHero from '../components/ContainerHero';
import ContainerCarrusel from '../components/ContainerCarrusel';
import ContainerWelcome from '../components/ContainerWelcome';

const Home = () => {
    return (  
        <div className='home'>
            <ContainerHero />
            <ContainerCarrusel />
            <ContainerWelcome />
        </div>
    );
}
 
export default Home;