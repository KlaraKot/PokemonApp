import React from "react";
import { MyStack } from "./Navigator/MyStack";
import { PokemonProvider } from "./Context/FavouritePokemonContext";

const App = () => (
  <PokemonProvider>
    <MyStack />
  </PokemonProvider>
);
export default App;
