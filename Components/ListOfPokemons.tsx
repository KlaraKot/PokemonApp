import { FlatList, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { SinglePokemon } from "./SinglePokemon";
import { Box } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListOfPokemons = () => {
  const [listOfPokemons, setListOfPOkemons] = useState<Array<{ name: string }>>(
    [],
  );

  useEffect(() => {
    const getPokemons = async () => {
      // await new Promise((res) => setTimeout(res, 1000));
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const list = await response.json();
      setListOfPOkemons(list.results);
    };
    getPokemons();
  }, []);

  return (
    <Box>
      <Button onPress={() => AsyncStorage.clear()} title="no wez wcisnij" />

      <FlatList
        data={listOfPokemons}
        // ItemSeparatorComponent=
        renderItem={({ item: { name } }) => <SinglePokemon name={name} />}
      />
    </Box>
  );
};
