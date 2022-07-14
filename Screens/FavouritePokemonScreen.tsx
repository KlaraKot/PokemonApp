import React from "react";
import { View, Box, Text } from "native-base";
import type { StackParamList } from "../Types/StackParams";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ImageOfPokemon } from "../Components/ImageOfPokemon";
import { PokemonStatisticApi } from "../Api/pokemonStatisticApi";

type favouritePokemonProp = RouteProp<StackParamList, "FavouritePokemon">;

export const FavouritePokemon = () => {
  const fullImage = true;
  const route = useRoute<favouritePokemonProp>();
  const { name } = route.params.pokemon1;
  const { maslana } = PokemonStatisticApi(route.params.pokemon1);
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
        <ImageOfPokemon name={name} isFullImage={fullImage} />
        <Text
          fontSize="3xl"
          fontFamily="Cochin"
          color="black"
          fontWeight="bold"
        >
          {name}
        </Text>
        {/* wrzucic tu kwadracik z bardziej mietowym kolorem  */}
        <View
          style={{
            marginTop: 10,
            backgroundColor: "#D2E5D0",
            borderRadius: 10,
            marginBottom: 10,
            height: 150,
            width: 150,
            alignItems: "center",
          }}
        >
          <View
            style={{
              padding: 20,
            }}
          >
            <Text fontSize="2xl" fontFamily="Cochin" color="black">
              Abilities:
            </Text>
            {maslana.map((item) => (
              <Text fontSize="xl" fontFamily="Cochin" key={item.ability.name}>
                {item.ability.name}
              </Text>
            ))}
          </View>
        </View>
      </Box>
    </View>
  );
};
