import * as React from "react";
import { FavouritePokemon } from "./FavouritePokemon";
import { ListOfPokemons } from "./ListOfPokemons";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const MyStack = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="List"
          component={ListOfPokemons}
          options={{
            title: "List of pokemons",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouritePokemon}
          options={{
            title: "Favourite pokemon",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
);
