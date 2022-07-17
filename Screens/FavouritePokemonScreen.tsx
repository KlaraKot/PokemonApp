import React, { useState } from "react";
// eslint-disable-next-line object-curly-newline
import { View, Box, Text, Button } from "native-base";
import type { StackParamList } from "../Types/StackParams";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ImageOfPokemon } from "../Components/ImageOfPokemon";
import { usePokemonAbilitiesApi } from "../Api/pokemonAbilitiesApi";
import Modal from "react-native-modal";

type favouritePokemonProp = RouteProp<StackParamList, "FavouritePokemon">;

export const FavouritePokemon = () => {
  const route = useRoute<favouritePokemonProp>();
  const { name } = route.params.favouritePokemon;
  const { pokemonAbilities } = usePokemonAbilitiesApi(
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
        <Text
          fontSize="3xl"
          fontFamily="Cochin"
          color="black"
          fontWeight="bold"
        >
          {name}
        </Text>
        <Button onPress={toggleModal}>Click!</Button>
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
