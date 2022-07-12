import React from "react";
import { ListOfPokemons } from "../Components/ListOfPokemons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListOfFavouritePokemons } from "../Components/ListOfFavouritePokemons";

const Tab = createBottomTabNavigator();

export const MainScreen = () => (
  <Tab.Navigator initialRouteName="ListOfPokemons">
    <Tab.Screen name="ListOfPokemons" component={ListOfPokemons} />
    <Tab.Screen
      name="ListOfFavouritePokemons"
      component={ListOfFavouritePokemons}
    />
  </Tab.Navigator>
);
