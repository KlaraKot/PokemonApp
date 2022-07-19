import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FavouritePokemon } from "../Screens/SinglePokemonScreen";

const PokemonStack = createStackNavigator();

export const PokemonNavigator = () => (
  <PokemonStack.Navigator>
    <PokemonStack.Screen name="FavouritePokemon" component={FavouritePokemon} />
  </PokemonStack.Navigator>
);
