import React, { useState, useMemo, useCallback } from "react";
import { Pokemon } from "../Types/pokemon";
import type { FavouritePokemonContextType } from "../Types/pokemon";
import { storeFavouritePokemon } from "../Storage/pokemonStorage";

const emptyPokemonObject = {
  name: "",
};

const initialiValue: FavouritePokemonContextType = {
  listOfFavouritesPokemonsName: [],
  getAllFavouritesPokemons: () => [],
  togglePokemonContext: () => emptyPokemonObject,
};

// eslint-disable-next-line operator-linebreak
export const PokemonContext =
  React.createContext<FavouritePokemonContextType>(initialiValue);

export const PokemonProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line operator-linebreak
  const [listOfFavouritesPokemonsName, setListOfFavouritesPokemonsNames] =
    useState<Array<Pokemon>>([]);

  const togglePokemonContext = useCallback(
    (favouritePokemon: Pokemon, actionType: boolean) => {
      // if pokemon already exists in the list
      const foundPokemon = listOfFavouritesPokemonsName.find(
        (pokemon) => favouritePokemon.name === pokemon.name,
      );
      // actionType gives us information about action which will be proceeded
      if (actionType === true) {
        if (foundPokemon === undefined) {
          setListOfFavouritesPokemonsNames([
            ...listOfFavouritesPokemonsName,
            favouritePokemon,
          ]);
          storeFavouritePokemon(favouritePokemon.name);
        } else {
          console.log("this pokemon already exists!");
        }
      } else {
        const newListOfPokemons = listOfFavouritesPokemonsName.filter(
          (pokemon) => pokemon.name !== favouritePokemon.name,
        );
        setListOfFavouritesPokemonsNames([...newListOfPokemons]);
      }
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
      togglePokemonContext,
      getAllFavouritesPokemons,
    }),
    [
      listOfFavouritesPokemonsName,
      togglePokemonContext,
      getAllFavouritesPokemons,
    ],
  );
  return (
    <PokemonContext.Provider value={foo}>{children}</PokemonContext.Provider>
  );
};
