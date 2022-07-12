import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../Screens/MainScreen";
import { NativeBaseProvider } from "native-base";
import { FavouritePokemon } from "./FavouritePokemon";

const Stack = createStackNavigator();

export const MyStack = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="FavouritePokemon" component={FavouritePokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
);
