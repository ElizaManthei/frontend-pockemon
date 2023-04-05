import axios from "axios";
import {useEffect, useState} from "react";


export default function Pokemon({url}) {
    const [pokemon, setPokemon] = useState('');

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await axios.get(url);
                // console.log(response.data.name)
                // console.log(response.data);
                setPokemon(response.data)
            } catch (e) {
                console.error(e);
            }
        }

        if (url) {
            void fetchPokemon();
        }
    }, [url]);

    return (
        <>
            {Object.keys(pokemon).length > 0 &&
                <span className="pokemon-kart">
                    <h4>{pokemon.name.toUpperCase()}</h4>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                    <p><strong>Moves: {pokemon.moves.length}</strong></p>
                    <p><strong>Weight: {pokemon.weight}</strong></p>

                    <div className="abilities">
                    <p><strong>Abilities:</strong></p>
                        {pokemon.abilities.map((ab) => {
                            return (
                                <li
                                    key={ab.ability.name}>
                                    {ab.ability.name}
                                </li>)
                        })
                        }
                    </div>
        </span>}
        </>
    )
}