import React from "react";
import { View, Box, Text } from "native-base";
import type { StackParamList } from "../Types/StackParams";
import { RouteProp, useRoute } from "@react-navigation/native";
import { FullImageOfPokemon } from "../Components/FullImageOfPokemon";
import { PokemonStatisticInformations } from "../Components/PokemonStatisticInformations";

type favouritePokemonProp = RouteProp<StackParamList, "FavouritePokemon">;

export const FavouritePokemon = () => {
  const route = useRoute<favouritePokemonProp>();
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#aaf0d1",
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Box
        style={{
          height: "100%",
          alignItems: "center",
        }}
      >
        <FullImageOfPokemon name={route.params.pokemon} />
        <Text
          fontSize="3xl"
          fontFamily="Cochin"
          color="black"
          fontWeight="bold"
        >
          {route.params.pokemon}
        </Text>
        <PokemonStatisticInformations name={route.params.pokemon} />
      </Box>
    </View>
  );
};
