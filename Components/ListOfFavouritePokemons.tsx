import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import { PokemonContext } from "../Context/context";
import { FlatList } from "react-native";
import { SinglePokemon } from "./SinglePokemon";

export const ListOfFavouritePokemons = () => {
  const [listOfPokemons, setListOfPokemons] = useState<Array<{ name: string }>>(
    [],
  );
  const { getAllPokemons } = React.useContext(PokemonContext);

  useEffect(() => {
    const listOfFavouritesPokemons = getAllPokemons();
    setListOfPokemons(listOfFavouritesPokemons);
  }, [listOfPokemons, getAllPokemons]);

  return (
    <Box>
      <FlatList
        data={listOfPokemons}
        renderItem={({ item: { name } }) => <SinglePokemon name={name} />}
      />
    </Box>
  );
};
