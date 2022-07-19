import React, { useState, useMemo, useCallback } from "react";
import { Pokemon } from "../Types/pokemon";
import type { FavouritePokemonContextType } from "../Types/pokemon";
import { storeFavouritePokemon } from "../Storage/pokemonStorage";

const emptyPokemonObject = {
  name: "",
};

const initialiValue: FavouritePokemonContextType = {
  listOfFavouritesPokemons: [],
  togglePokemonFavourite: () => emptyPokemonObject,
  isPokemonFavourite: () => false,
};

export const PokemonContext =
  React.createContext<FavouritePokemonContextType>(initialiValue);

export const PokemonProvider: React.FC = ({ children }) => {
  const [listOfFavouritesPokemons, setListOfFavouritesPokemonsNames] = useState<
    Array<Pokemon>
  >([]);

  const isPokemonFavourite = useCallback(
    (pokemonToCheck: Pokemon) => {
      const condition = (pokemon: Pokemon) =>
        pokemon.name === pokemonToCheck.name;

      return listOfFavouritesPokemons.some(condition);
    },
    [listOfFavouritesPokemons],
  );

  const togglePokemonFavourite = useCallback(
    (favouritePokemon: Pokemon) => {
      // if pokemon already exists in the list
      const foundPokemon = listOfFavouritesPokemons.find(
        (pokemon) => favouritePokemon.name === pokemon.name,
      );
      // actionType gives us information about action which will be proceeded
      const actionType = !isPokemonFavourite(favouritePokemon);

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
          (pokemon) => pokemon.name !== favouritePokemon.name,
        );

        setListOfFavouritesPokemonsNames(newListOfFavouritesPokemons);
      }
    },
    [listOfFavouritesPokemons, isPokemonFavourite],
  );

  const foo = useMemo<FavouritePokemonContextType>(
    () => ({
      listOfFavouritesPokemons,
      togglePokemonFavourite,
      isPokemonFavourite,
    }),
    [listOfFavouritesPokemons, togglePokemonFavourite, isPokemonFavourite],
  );

  return (
    <PokemonContext.Provider value={foo}>{children}</PokemonContext.Provider>
  );
};
