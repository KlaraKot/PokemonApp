import React from "react";
import { Box } from "native-base";
import { FlatList } from "react-native";
import { SinglePokemon } from "./SinglePokemon";
import { PokemonContext } from "../Context/FavouritePokemonContext";

export const ListOfFavouritePokemons = () => {
  const { listOfFavouritesPokemonsName } = React.useContext(PokemonContext);

  return (
    <Box>
      <FlatList
        data={listOfFavouritesPokemonsName}
        renderItem={({ item: { name } }) => <SinglePokemon name={name} />}
      />
    </Box>
  );
};
