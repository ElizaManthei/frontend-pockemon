import logo from '../assets/Pokemon-Logo.png'
import Button from "../Component/Button";
import axios from "axios";
import {useEffect, useState} from "react";
import Pokemon from "../Component/Pokemon";

export default function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function fetchPokemons() {
            try {
                toggleError(false);
                const response = await axios.get(url);
                // console.log(response.data);
                setPokemons(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        void fetchPokemons();
    }, [url]);

    return (
        <div className="container">
            {error && <span>Er is iets mis gegaan</span>}
            <span>
            <img src={logo} alt='Pokemon logo'/>
        </span>
            {pokemons &&
                <>
                    <div>
                        <Button
                            buttonText="Vorige"
                            buttonDisabled={!pokemons.previous}
                            buttonAction={() => setUrl(pokemons.previous)}
                            buttonClassName={pokemons.previous ? "button-enabled" : "button-disabled"}
                        />
                        <Button
                            buttonText="Volgende"
                            buttonDisabled={!pokemons.next}
                            buttonAction={() => setUrl(pokemons.next)}
                            buttonClassName={pokemons.next ? "button-enabled" : "button-disabled"}
                        />
                    </div>
                    <div className="pokemons-container">
                        {pokemons.results && pokemons.results.map((pokemon) => {
                                return (
                                    <Pokemon
                                        key={pokemon.name}
                                        url={pokemon.url}
                                    />
                                )
                            }
                        )}
                    </div>
                </>
            }
        </div>
    )
}