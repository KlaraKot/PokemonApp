import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SinglePokemon } from "./SinglePokemon";
import { Box, Button } from "native-base";
import type { Pokemon } from "../Types/pokemon";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListOfPokemons = () => {
  const [listOfPokemons, setListOfPokemons] = useState<ReadonlyArray<Pokemon>>(
    [],
  );

  useEffect(() => {
    const getPokemons = async () => {
      // await new Promise((res) => setTimeout(res, 1000));
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const list = await response.json();
      setListOfPokemons(list.results);
    };
    getPokemons();
  }, []);

  return (
    <Box>
      <Button onPress={() => AsyncStorage.clear()} title="kliknij" />
      <FlatList
        data={listOfPokemons}
        renderItem={({ item: { name } }) => <SinglePokemon name={name} />}
      />
    </Box>
  );
};
