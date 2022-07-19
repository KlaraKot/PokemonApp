import React, { useState } from "react";
// eslint-disable-next-line object-curly-newline
import { View, Box, Text, Button } from "native-base";
import { ScrollView } from "react-native";
import type { StackParamList } from "../Types/StackParams";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ImageOfPokemon } from "../Components/ImageOfPokemon";
import { usePokemonMovesApi } from "../Api/pokemonMovesApi";
import { usePokemonAbilitiesApi } from "../Api/pokemonAbilitiesApi";
import { LoadingImage } from "../Components/loadingImage";
import Modal from "react-native-modal";

type favouritePokemonProp = RouteProp<StackParamList, "FavouritePokemon">;

export const FavouritePokemon = () => {
  const route = useRoute<favouritePokemonProp>();
  const { name } = route.params.favouritePokemon;
  const { pokemonAbilities } = usePokemonAbilitiesApi(
    route.params.favouritePokemon,
  );
  const { pokemonMoves, showLottie } = usePokemonMovesApi(
    route.params.favouritePokemon,
  );

  const [isVisible, setVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setVisible(!isVisible);
  };

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
        <ImageOfPokemon name={name} isFullImage />
        <View style={{ alignItems: "center", marginTop: -50 }}>
          <Text
            fontSize="3xl"
            fontFamily="Cochin"
            color="black"
            fontWeight="bold"
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            height: 100,
            width: 200,
            marginTop: 20,
            backgroundColor: "#9EDEC6",
            borderRadius: 20,
          }}
        >
          {showLottie ? (
            <ScrollView style={{ alignSelf: "center" }}>
              {pokemonMoves?.map((ability) => (
                <Text fontSize="xl" fontFamily="Cochin" key={ability.move.name}>
                  {ability.move.name}
                </Text>
              ))}
            </ScrollView>
          ) : (
            <View>
              <LoadingImage />
            </View>
          )}
        </View>
        <View style={{ marginTop: 50 }}>
          <Button onPress={toggleModal}>Click!</Button>
        </View>
        <Modal isVisible={isVisible} backdropColor="#F8AFA6">
          <View
            style={{
              backgroundColor: "#F79489",
              borderRadius: 10,

              padding: 50,
              alignItems: "center",
            }}
          >
            <View
              style={{
                padding: 20,
              }}
            >
              <Text
                fontSize="2xl"
                fontFamily="Cochin"
                color="black"
                fontWeight="bold"
              >
                Abilities:
              </Text>
              {pokemonAbilities?.map((ability) => (
                <Text
                  fontSize="xl"
                  fontFamily="Cochin"
                  key={ability.ability.name}
                >
                  {ability.ability.name}
                </Text>
              ))}
            </View>
            <Button
              color="#000000"
              backgroundColor="#FADCD9"
              onPress={toggleModal}
            >
              close
            </Button>
          </View>
        </Modal>
      </Box>
    </View>
  );
};
