import React from "react";
import { Box } from "native-base";
import { FlatList } from "react-native";
import { SinglePokemonItem } from "./SinglePokemonItem";
import { PokemonContext } from "../Context/FavouritePokemonContext";

export const ListOfFavouritePokemons = () => {
  const { listOfFavouritesPokemons } = React.useContext(PokemonContext);

  return (
    <Box>
      <FlatList
        data={listOfFavouritesPokemonsName}
        renderItem={({ item: { name } }) => <SinglePokemonItem name={name} />}
      />
    </Box>
  );
};
