import React from "react";
import { MyStack } from "./Components/Stack";
import { PokemonProvider } from "./Context/context";

const App = () => (
  <PokemonProvider>
    <MyStack />
  </PokemonProvider>
);
export default App;
