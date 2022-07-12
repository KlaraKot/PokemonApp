import React, { useEffect, useState } from "react";
import { Text, Button } from "native-base";
import { View } from "react-native";
import { ImageOfPokemon } from "./ImageOfPokemon";
import { IconButton } from "react-native-paper";
import { checkFavouritePokemon } from "../Storage/pokemonStorage";
import { PokemonContext } from "../Context/context";
// @ts-ignore
import blackHeart from "../assets/iconmonstr-favorite-3-240.png";
// @ts-ignore
import whiteHeart from "../assets/iconmonstr-heart-thin-240.png";
import { Pokemon } from "../Types/pokemon";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { StackParamList } from "../Types/StackParams";

interface Props {
  name: string;
}
type favouritePokemonProp = StackNavigationProp<
  StackParamList,
  "FavouritePokemon"
>;

const convertToPokemonObject = (newName: string) => {
  const pokemon: Pokemon = {
    name: newName,
  };
  return pokemon;
};

export const SinglePokemon = ({ name }: Props) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const { savePokemon, deletePokemon } = React.useContext(PokemonContext);

  const navigation = useNavigation<favouritePokemonProp>();

  useEffect(() => {
    const getPokemons = async () => {
      const isPokemonInStorage = await checkFavouritePokemon(name);
      setIsFavourite(isPokemonInStorage);
    };
    getPokemons();
  }, [name]);

  const handleFavourite = (action: boolean) => {
    const favouritePokemon = convertToPokemonObject(name);
    if (action === false) {
      deletePokemon(favouritePokemon);
      setIsFavourite(false);
    } else {
      savePokemon(favouritePokemon);
      setIsFavourite(true);
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
            onPress={() => handleFavourite(!isFavourite)}
          />
          <Button
            height={10}
            width={20}
            onPress={
              () =>
                // eslint-disable-next-line implicit-arrow-linebreak
                navigation.push("FavouritePokemon", { pokemon: name })
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
          <ImageOfPokemon name={name} />
        </View>
      </View>
    </View>
  );
};
