import React from "react";
import { View, Box, Text } from "native-base";
import type { StackParamList } from "../Types/StackParams";
import { RouteProp, useRoute } from "@react-navigation/native";
import { FullImageOfPokemon } from "../Components/FullImageOfPokemon";

type favouritePokemonProp = RouteProp<StackParamList, "FavouritePokemon">;

export const FavouritePokemon = () => {
  const route = useRoute<favouritePokemonProp>();
  return (
    <View
      style={{
        height: "100%",
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#aaf0d1",
        borderRadius: 10,
      }}
    >
      <Box
        style={{
          height: "100%",
          alignItems: "center",
        }}
      >
        <FullImageOfPokemon name={route.params.pokemon} />
        <Text fontSize="lg" fontFamily="Cochin" color="black" fontWeight="bold">
          {route.params.pokemon}
        </Text>
      </Box>
    </View>
  );
};
