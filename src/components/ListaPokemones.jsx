import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import '../assets/navbar.css';



function ListaPokemon() {

    const [listaPokemones, setListaPokemones] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    const [pokemon, setPokemon] = useState('Pokemones')
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setListaPokemones(data.results))
    }, [])

    const infoPokemon = () => {
        (pokemon === 'Pokemones') ? alert('Debes seleccionar un pokemon') : navigate(`/pokemones/${pokemon}`);
    };

    return (
        <div id='Home' className='container text-center justify-content-center'>
            <h1 className='titulo2'>Selecciona tu Pokemon Favorito</h1>
            <div className="text-center">
                <Form.Select className="d-inline formSelect m-4" 
                    onChange={({ target }) => setPokemon(target.value)}
                >
                    <option>Pokemones</option>
                    {listaPokemones.map((pokemon) => (
                        <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>))}
                </Form.Select>
            </div>
            <Button variant='danger' onClick={infoPokemon}>Info Pokemon</Button>
        </div>
    )
}
export default ListaPokemon