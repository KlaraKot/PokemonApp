// pokemonStatisticApi sciaga wiecej informacji o zadanym pokemonie

import type { Pokemon } from "../Types/pokemon";
import { useEffect, useState } from "react";

export const PokemonStatisticApi = (pokemon: Pokemon) => {
  const [listOfStatistics, setListOfStatistics] = useState<Array<string>>([]);

  // sciagamy dane z api
  useEffect(() => {
    const getPokemons = async () => {
      // await new Promise((res) => setTimeout(res, 1000));
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
      );
      const list = await response.json();
      console.log(list.abilities);
    };
    getPokemons();
  }, []);
};
