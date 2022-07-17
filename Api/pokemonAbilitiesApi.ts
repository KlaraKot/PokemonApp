// pokemonStatisticApi sciaga wiecej informacji o zadanym pokemonie

import type { Pokemon } from "../Types/pokemon";
import { useEffect, useState } from "react";

interface Stat {
  ability: {
    name: string;
    url: string;
  };
}

export const usePokemonAbilitiesApi = (pokemon: Pokemon) => {
  const [listOfAbilities, setListOfAbilities] = useState<Array<Stat>>();
  // sciagamy dane z api
  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
      );
      const list = await response.json();
      setListOfAbilities(list.abilities);
    };
    getPokemons();
  }, [pokemon.name]);

  // obrabianie danych

  return {
    pokemonAbilities: listOfAbilities,
  };
};
