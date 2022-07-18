/* eslint-disable no-unused-vars */
export interface Pokemon {
  name: string;
}

export type FavouritePokemonContextType = {
  listOfFavouritesPokemons: Array<Pokemon>;
  getAllFavouritesPokemons: () => Pokemon[];
  togglePokemonContext: (pokemon: Pokemon, actionType: boolean) => void;
  isPokemonInStorage: (pokemon: Pokemon) => boolean;
};
