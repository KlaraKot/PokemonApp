/* eslint-disable no-unused-vars */
export interface Pokemon {
  name: string;
}

export type FavouritePokemonContextType = {
  listOfFavouritesPokemonsName: Pokemon[];
  getAllFavouritesPokemons: () => Pokemon[];
  togglePokemonContext: (pokemon: Pokemon, actionType: boolean) => void;
};
