import charmander from '../pokemonimg/charmander.png';



function Home() {
    return (
        <div id='Home' className='container text-center'>
            <h1 className='Saludo'>Bienvenido maestro pokemón</h1>
            <img className='Charmander' src={charmander} alt="" />
        </div>
    )
}
export default Home;