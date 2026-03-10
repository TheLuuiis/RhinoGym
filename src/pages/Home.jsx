import '../css/pages/Home.css';
import CountUp from '../components/CountUp';
import ContainerHero from '../components/ContainerHero';
import ContainerChoose from '../components/ContainerChoose';
import ContainerCarrusel from '../components/ContainerCarrusel';
import ContainerWelcome from '../components/ContainerWelcome';

const Home = () => {
    return (  
        <div className='home'>
            <ContainerHero />
            <ContainerCarrusel />
            <ContainerWelcome />
            <CountUp />
            <ContainerChoose />
        </div>
    );
}
 
export default Home;