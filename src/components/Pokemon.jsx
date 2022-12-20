import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";







function BuscaPokemon() {
    const { name } = useParams();
    const [infoPokemon, setInfoPokemon] = useState({})
    const [propiedades, setPropiedades] = useState([])
    
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setInfoPokemon({
                    photo: data.sprites.other.dream_world.front_default,
                    tipo:data.types.length >1 ? data.types[0].type.name + ' - ' +  data.types[1].type.name: data.types[0].type.name
                })
                setPropiedades(data.stats)
            })
    }, [name]
    )
    return (
        <div className='container p-5 ' >
            <div className="border d-flex justify-content-center infoPokemon">
                <img className="ms-auto" src={infoPokemon.photo}  />
                <div className="mx-auto">
                    <h2 className="mt-4">{name}</h2>
                    <ul>
                        {propiedades.map((pokemon) => (<li key={pokemon.stat.name}>{pokemon.stat.name} : {pokemon.base_stat}</li>))}
                    </ul>
                    <h4>{infoPokemon.tipo}</h4>
                </div>
            </div>
        </div>
    )
}
export default BuscaPokemon