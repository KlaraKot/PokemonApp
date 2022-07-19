import React from "react";
import { MyStack } from "./Navigator/MyStack";
import { PokemonProvider } from "./Context/FavouritePokemonContext";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native."]);

const App = () => (
  <PokemonProvider>
    <MyStack />
  </PokemonProvider>
);
export default App;
