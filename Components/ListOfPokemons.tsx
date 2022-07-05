import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { NativeBaseProvider, Text, Box } from "native-base";

export const ListOfPokemons = () => {
  const [listOfPokemons, setListOfPOkemons] = useState<Array<{ name: string }>>(
    []
  );

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const list = await response.json();
      setListOfPOkemons(list.results);
    };
    getPokemons();
  }, []);

  return (
    <Box bg="#fff" alignItems="center" justifyContent="center">
      <Text>Moje pokemony</Text>
      <FlatList
        data={listOfPokemons}
        renderItem={({ item: { name } }) => <ItemList name={name} />}
      />
    </Box>
  );
};
