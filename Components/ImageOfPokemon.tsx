import React from "react";
import { Image } from "react-native";

export const ImageOfPokemon = ({
  name,
  isFullImage,
}: {
  name: string;
  isFullImage: boolean;
}) => (
  <Image
    style={
      isFullImage
        ? { width: "70%", height: "50%" }
        : { width: 200, height: 150 }
    }
    source={{
      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`,
    }}
    key={JSON.stringify(name)}
  />
);
