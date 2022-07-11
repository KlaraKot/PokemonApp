import * as React from "react";
// import { FavouritePokemonView } from "./FavouritePokemonView";
import { ListOfPokemons } from "./ListOfPokemons";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListOfFavouritePokemons } from "./ListOfFavouritePokemons";

const Tab = createBottomTabNavigator();

export const MyStack = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="List"
          component={ListOfPokemons}
          options={{
            title: "List of pokemons",
            headerStyle: {
              backgroundColor: "#3EB489",
            },
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={ListOfFavouritePokemons}
          options={{
            title: "Favourite pokemon",
            headerStyle: {
              backgroundColor: "#3EB489",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
);
