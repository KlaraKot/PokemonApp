import type { Pokemon } from "./pokemon";

export type StackParamList = {
  Main: undefined;
  FavouritePokemon: { pokemon1: Pokemon };
};
