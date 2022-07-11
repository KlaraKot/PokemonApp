import React, { useState, useMemo, useCallback } from "react";
import { Pokemon } from "../Types/pokemon";
import type { PokemonContextType } from "../Types/pokemon";
import {
  storeFavouritePokemon,
  removePokemon,
} from "../Storage/pokemonStorage";

const initialiValue: PokemonContextType = {
  listOfPokemonsName: [],
  savePokemon: () => null,
  deletePokemon: () => null,
  getAllPokemons: () => [],
};

// eslint-disable-next-line operator-linebreak
export const PokemonContext =
  React.createContext<PokemonContextType>(initialiValue);

export const PokemonProvider: React.FC = ({ children }) => {
  const [listOfPokemonsName, setListOfPokemonsNames] = useState<Pokemon[]>([]);

  const savePokemon = useCallback(
    (favouritePokemon: Pokemon) => {
      // zapisywanie do ogólnego storage
      const newPokemon: Pokemon = {
        name: favouritePokemon.name,
      };

      setListOfPokemonsNames([...listOfPokemonsName, newPokemon]);
      // zapisywanie do asyncStorage
      storeFavouritePokemon(favouritePokemon.name);
    },
    [listOfPokemonsName],
  );

  const deletePokemon = useCallback(
    (pokemonToDelete: Pokemon) => {
      const newListOfPokemons = listOfPokemonsName.filter(
        (pokemon) => pokemon.name !== pokemonToDelete.name,
      );
      setListOfPokemonsNames([...newListOfPokemons]);
      removePokemon(pokemonToDelete.name);
    },
    [listOfPokemonsName],
  );

  const getPokemonByName = useCallback(
    (name: string) => {
      const pokemonToReturn = listOfPokemonsName.find(
        (pokemon) => pokemon.name === name,
      );
      return pokemonToReturn;
    },
    [listOfPokemonsName],
  );

  const getAllPokemons = useCallback(
    () => listOfPokemonsName,
    [listOfPokemonsName],
  );

  const foo = useMemo(
    () => ({
      listOfPokemonsName,
      savePokemon,
      deletePokemon,
      getPokemonByName,
      getAllPokemons,
    }),
    [
      listOfPokemonsName,
      savePokemon,
      deletePokemon,
      getPokemonByName,
      getAllPokemons,
    ],
  );
  return (
    <PokemonContext.Provider value={foo}>{children}</PokemonContext.Provider>
  );
};
