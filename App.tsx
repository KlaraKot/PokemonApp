import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { Component } from "react";
import { ListOfPokemons } from "./Components/ListOfPokemons";
import { NativeBaseProvider, Text, Box } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ListOfPokemons />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
