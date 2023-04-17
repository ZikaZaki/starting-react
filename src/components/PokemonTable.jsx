import React from "react";
import useStore from "../store";

import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
    const pokemon = useStore((state) => state.pokemon);
    const filter = useStore((state) => state.filter);
    const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);
    
    return (
        <table width="100%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {pokemon
                    .filter(({ name: { english }}) =>
                        english
                            .toLowerCase()
                            .includes(filter.toLowerCase()) 
                    )
                    .slice(0, 20)
                    .map((pokemon) => (
                    <PokemonRow
                        pokemon={pokemon}
                        onClick={(pokemon) => setSelectedPokemon(pokemon)}
                    />
                ))}
            </tbody>
        </table>
    )
};

export default PokemonTable;