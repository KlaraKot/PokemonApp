import React, { useState, useMemo, useCallback } from "react";
import { Pokemon } from "../Types/pokemon";
import type { FavouritePokemonContextType } from "../Types/pokemon";
import {
  storeFavouritePokemon,
  removePokemon,
} from "../Storage/pokemonStorage";

const emptyPokemonObject = {
  name: "",
};

const initialiValue: FavouritePokemonContextType = {
  listOfFavouritesPokemonsName: [],
  addPokemonToFavourites: () => null,
  deletePokemonFromFavourites: () => null,
  getAllFavouritesPokemons: () => [],
  getFavouritePokemonByName: () => emptyPokemonObject,
};

// eslint-disable-next-line operator-linebreak
export const PokemonContext =
  React.createContext<FavouritePokemonContextType>(initialiValue);

export const PokemonProvider: React.FC = ({ children }) => {
  const [listOfFavouritesPokemonsName, setListOfFavouritesPokemonsNames] =
    useState<Array<Pokemon>>([]);

  const addPokemonToFavourites = useCallback(
    (favouritePokemon: Pokemon) => {
      console.log(listOfFavouritesPokemonsName);

      // zapisywanie do ogólnego storage
      const newPokemon: Pokemon = {
        name: favouritePokemon.name,
      };
      // if pokemon already exists in the list
      const foundPokemon = listOfFavouritesPokemonsName.find(
        (pokemon) => newPokemon.name === pokemon.name,
      );
      if (foundPokemon !== undefined) {
        console.log("this pokemon already exists!");
      } else {
        setListOfFavouritesPokemonsNames([
          ...listOfFavouritesPokemonsName,
          newPokemon,
        ]);
        storeFavouritePokemon(favouritePokemon.name);
      }

      // zapisywanie do asyncStorage
    },
    [listOfFavouritesPokemonsName],
  );

  const deletePokemonFromFavourites = useCallback(
    (pokemonToDelete: Pokemon) => {
      const newListOfPokemons = listOfFavouritesPokemonsName.filter(
        (pokemon) => pokemon.name !== pokemonToDelete.name,
      );
      setListOfFavouritesPokemonsNames([...newListOfPokemons]);

      removePokemon(pokemonToDelete.name);
    },
    [listOfFavouritesPokemonsName],
  );

  const getFavouritePokemonByName = useCallback(
    (sx: Pokemon) => {
      const pokemonToReturn = listOfFavouritesPokemonsName.find(
        (pokemon) => pokemon.name === sx.name,
      );
      console.log(pokemonToReturn);
      return pokemonToReturn;
    },
    [listOfFavouritesPokemonsName],
  );

  const getAllFavouritesPokemons = useCallback(
    () => listOfFavouritesPokemonsName,
    [listOfFavouritesPokemonsName],
  );

  const foo = useMemo(
    () => ({
      listOfFavouritesPokemonsName,
      addPokemonToFavourites,
      deletePokemonFromFavourites,
      getFavouritePokemonByName,
      getAllFavouritesPokemons,
    }),
    [
      listOfFavouritesPokemonsName,
      addPokemonToFavourites,
      deletePokemonFromFavourites,
      getFavouritePokemonByName,
      getAllFavouritesPokemons,
    ],
  );
  return (
    <PokemonContext.Provider value={foo}>{children}</PokemonContext.Provider>
  );
};
