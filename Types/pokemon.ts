export interface Pokemon {
  name: string;
}

export type FavouritePokemonContextType = {
  listOfFavouritesPokemonsName: Pokemon[];
  // eslint-disable-next-line no-unused-vars
  addPokemonToFavourites: (name: Pokemon) => void;
  // eslint-disable-next-line no-unused-vars
  deletePokemonFromFavourites: (pokemon: Pokemon) => void;
  getAllFavouritesPokemons: () => Pokemon[];
  // eslint-disable-next-line no-unused-vars
  getFavouritePokemonByName: (pokemon: Pokemon) => Pokemon;
};
