import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import { PokemonContext } from "../Context/FavouritePokemonContext";
import { FlatList } from "react-native";
import { SinglePokemon } from "./SinglePokemon";

export const ListOfFavouritePokemons = () => {
  const [listOfFavouritesPokemons, setListOfFavouritesPokemons] = useState<
    ReadonlyArray<{ name: string }>
  >([]);
  const { getAllFavouritesPokemons } = React.useContext(PokemonContext);

  useEffect(() => {
    const list = getAllFavouritesPokemons();
    setListOfFavouritesPokemons(list);
  }, [listOfFavouritesPokemons, getAllFavouritesPokemons]);

  return (
    <Box>
      <FlatList
        data={listOfFavouritesPokemons}
        renderItem={({ item: { name } }) => <SinglePokemon name={name} />}
      />
    </Box>
  );
};
