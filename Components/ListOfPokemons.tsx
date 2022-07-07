import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Text, Box } from "native-base";

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

  const header = () => <Text>Moje pokemony</Text>;

  return (
    <Box>
      <FlatList
        ListHeaderComponent={header}
        data={listOfPokemons}
        // ItemSeparatorComponent=
        renderItem={({ item: { name } }) => <ItemList name={name} />}
      />
    </Box>
  );
};
