export interface Pokemon {
  name: string;
}

export type PokemonContextType = {
  listOfPokemonsName: Pokemon[];
  // eslint-disable-next-line no-unused-vars
  savePokemon: (name: Pokemon) => void;
  // eslint-disable-next-line no-unused-vars
  deletePokemon: (pokemon: Pokemon) => void;
  getAllPokemons: () => Pokemon[];
  // eslint-disable-next-line no-unused-vars
  getPokemonByName: (pokemon: Pokemon) => Pokemon;
};
