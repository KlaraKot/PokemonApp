import React, { useMemo } from "react";
import { ListOfPokemons } from "../Components/ListOfPokemons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListOfFavouritePokemons } from "../Components/ListOfFavouritePokemons";
import { Feather, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  const ListIcon = useMemo(() => <Feather name="list" size={40} />, []);
  const HeartIcon = useMemo(() => <AntDesign name="heart" size={40} />, []);

  return (
    <Tab.Navigator initialRouteName="Lista Pokemonow">
      <Tab.Screen
        name="Lista Pokemonow"
        component={ListOfPokemons}
        options={{
          tabBarLabel: "lista ulubionych",
          tabBarIcon: () => ListIcon,
        }}
      />
      <Tab.Screen
        name="Lista ulubionych pokemonow"
        component={ListOfFavouritePokemons}
        options={{
          tabBarLabel: "ulubione",
          tabBarIcon: () => HeartIcon,
        }}
      />
    </Tab.Navigator>
  );
};
