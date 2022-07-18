import React, { useState, useMemo, useCallback } from "react";
import { Pokemon } from "../Types/pokemon";
import type { FavouritePokemonContextType } from "../Types/pokemon";
import { storeFavouritePokemon } from "../Storage/pokemonStorage";

const emptyPokemonObject = {
  name: "",
};

const initialiValue: FavouritePokemonContextType = {
  listOfFavouritesPokemons: [],
  getAllFavouritesPokemons: () => [],
  togglePokemonContext: () => emptyPokemonObject,
  isPokemonInStorage: () => false,
};

// eslint-disable-next-line operator-linebreak
export const PokemonContext =
  React.createContext<FavouritePokemonContextType>(initialiValue);

export const PokemonProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line operator-linebreak
  const [listOfFavouritesPokemons, setListOfFavouritesPokemonsNames] = useState<
    Array<Pokemon>
  >([]);

  const togglePokemonContext = useCallback(
    (favouritePokemon: Pokemon, actionType: boolean) => {
      // if pokemon already exists in the list
      const foundPokemon = listOfFavouritesPokemons.find(
        (pokemon) => favouritePokemon.name === pokemon.name,
      );
      // actionType gives us information about action which will be proceeded
      if (actionType === true) {
        if (foundPokemon === undefined) {
          setListOfFavouritesPokemonsNames([
            ...listOfFavouritesPokemons,
            favouritePokemon,
          ]);
          storeFavouritePokemon(favouritePokemon.name);
        } else {
          console.log("this pokemon already exists!");
        }
      } else {
        const copyListOfFavouritesPokemons = listOfFavouritesPokemons;
        const newListOfFavouritesPokemons = copyListOfFavouritesPokemons.filter(
          (pokemon) => {
            if (pokemon.name !== favouritePokemon.name) {
              return pokemon;
            }
          },
        );

        setListOfFavouritesPokemonsNames(newListOfFavouritesPokemons);
      }
    },
    [listOfFavouritesPokemons],
  );

  const isPokemonInStorage = useCallback(
    (pokemonToCheck: Pokemon) => {
      const isPokemon = listOfFavouritesPokemons.find(
        (pokemon) => pokemonToCheck.name === pokemon.name,
      );
      if (isPokemon !== undefined) return true;
      return false;
    },
    [listOfFavouritesPokemons],
  );

  const getAllFavouritesPokemons = useCallback(
    () => listOfFavouritesPokemons,
    [listOfFavouritesPokemons],
  );

  const foo = useMemo(
    () => ({
      listOfFavouritesPokemons,
      togglePokemonContext,
      getAllFavouritesPokemons,
      isPokemonInStorage,
    }),
    [
      listOfFavouritesPokemons,
      togglePokemonContext,
      getAllFavouritesPokemons,
      isPokemonInStorage,
    ],
  );
  return (
    <PokemonContext.Provider value={foo}>{children}</PokemonContext.Provider>
  );
};
