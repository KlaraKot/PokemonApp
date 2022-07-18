import type { Pokemon } from "../Types/pokemon";
import { useEffect, useState } from "react";

interface Moves {
  move: {
    name: string;
    url: string;
  };
}
export const usePokemonMovesApi = (pokemon: Pokemon) => {
  const [listOfMoves, setListOfMoves] = useState<Array<Moves>>();
  const [show, setShow] = useState<boolean>(false);
  // sciagamy dane z api
  useEffect(() => {
    const getPokemons = async () => {
      setTimeout(() => setShow(true), 3000);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
      );
      const list = await response.json();
      setListOfMoves(list.moves);
    };
    getPokemons();
  }, [pokemon.name]);

  return {
    pokemonMoves: listOfMoves,
    showLottie: show,
  };
};
