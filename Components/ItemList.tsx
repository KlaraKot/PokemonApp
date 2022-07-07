import React, { useEffect, useState } from "react";
import { Text } from "native-base";
import { View } from "react-native";
import { ImageOfPokemon } from "./ImageOfPokemon";
import { IconButton } from "react-native-paper";
import {
  storeFavouritePokemon,
  getFavouritePokemon,
  removePokemon,
  checkFavouritePokemon,
} from "../Storage/pokemonStorage";
// @ts-ignore
import blackHeart from "../assets/iconmonstr-favorite-3-240.png";
// @ts-ignore
import whiteHeart from "../assets/iconmonstr-heart-thin-240.png";

interface Props {
  name: string;
}

export const ItemList = ({ name }: Props) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      const isPokemonInStorage = await checkFavouritePokemon(name);
      setIsPressed(isPokemonInStorage);
    };
    getPokemons();
  }, [name]);

  const handleStorage = (action: boolean) => {
    if (action === false) {
      removePokemon(name);
      setIsPressed(false);
    } else {
      storeFavouritePokemon(name);
      getFavouritePokemon(name);
      setIsPressed(true);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          height: 150,
          marginHorizontal: 30,
          margin: 10,
          backgroundColor: "#aaf0d1",
          borderRadius: 10,
        }}
      >
        <Text
          padding="5"
          fontSize="lg"
          fontFamily="Cochin"
          color="black"
          fontWeight="bold"
        >
          {name}
        </Text>
        <View
          style={{
            paddingTop: 10,
          }}
        >
          <ImageOfPokemon name={name} />
        </View>
        <View>
          <IconButton
            icon={isPressed ? blackHeart : whiteHeart}
            size={20}
            onPress={() => handleStorage(!isPressed)}
          />
        </View>
      </View>
    </View>
  );
};
