import React from "react";
import { ListOfPokemons } from "../Components/ListOfPokemons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListOfFavouritePokemons } from "../Components/ListOfFavouritePokemons";
import { Map } from "../Components/Map";

const Tab = createBottomTabNavigator();

export const MainScreen = () => (
  <Tab.Navigator initialRouteName="ListOfPokemons">
    <Tab.Screen name="ListOfPokemons" component={ListOfPokemons} />
    <Tab.Screen
      name="ListOfFavouritePokemons"
      component={ListOfFavouritePokemons}
    />
    <Tab.Screen name="Map" component={Map} />
  </Tab.Navigator>
);
