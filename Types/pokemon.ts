/* eslint-disable no-unused-vars */
export interface Pokemon {
  name: string;
}

export type FavouritePokemonContextType = {
  listOfFavouritesPokemons: Array<Pokemon>;
  togglePokemonFavourite: (pokemon: Pokemon) => void;
  isPokemonFavourite: (pokemon: Pokemon) => boolean;
};
