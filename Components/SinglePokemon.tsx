import React, { useEffect, useState } from "react";
import { Text, Button } from "native-base";
import { View } from "react-native";
import { ImageOfPokemon } from "./ImageOfPokemon";
import { IconButton } from "react-native-paper";
import { PokemonContext } from "../Context/FavouritePokemonContext";
// @ts-ignore
import blackHeart from "../assets/iconmonstr-favorite-3-240.png";
// @ts-ignore
import whiteHeart from "../assets/iconmonstr-heart-thin-240.png";
import { Pokemon } from "../Types/pokemon";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { StackParamList } from "../Types/StackParams";

type favouritePokemonProp = StackNavigationProp<
  StackParamList,
  "FavouritePokemon"
>;

export const SinglePokemon = (pokemon: Pokemon) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [action, setAction] = useState<boolean>();

  // eslint-disable-next-line operator-linebreak
  const { togglePokemonContext, isPokemonInStorage } =
    React.useContext(PokemonContext);

  const navigation = useNavigation<favouritePokemonProp>();

  const { name } = pokemon;

  useEffect(() => {
    const info = isPokemonInStorage(pokemon);
    setIsFavourite(info);
  }, [isPokemonInStorage, pokemon]);

  const handleFavourite = (actionType: boolean) => {
    setAction(actionType);
    togglePokemonContext(pokemon, actionType);
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
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            fontSize="lg"
            fontFamily="Cochin"
            color="black"
            fontWeight="bold"
          >
            {name}
          </Text>
          <IconButton
            icon={isFavourite ? blackHeart : whiteHeart}
            size={20}
            onPress={() => handleFavourite(!action)}
          />
          <Button
            height={10}
            width={20}
            onPress={
              () =>
                // eslint-disable-next-line implicit-arrow-linebreak
                navigation.push("FavouritePokemon", {
                  favouritePokemon: pokemon,
                })
              // eslint-disable-next-line react/jsx-curly-newline
            }
          >
            Zobacz
          </Button>
        </View>

        <View
          style={{
            paddingTop: 10,
          }}
        >
          <ImageOfPokemon name={name} isFullImage={false} />
        </View>
      </View>
    </View>
  );
};
