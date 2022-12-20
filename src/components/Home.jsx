import charmander from '../pokemonimg/charmander.png';
import '../assets/navbar.css';


function Home() {
    return (
        <div id='Home' className='container text-center'>
            <h1 className='titulo2'>Ven a Conocer tus Pokemones</h1>
            
            <img className='Charmander' src={charmander} alt="charmander" />
        </div>
    )
}
export default Home;