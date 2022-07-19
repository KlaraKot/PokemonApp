import React from "react";
import { Image } from "react-native";

interface ImageOfPokemonProps {
  name: string;
  isFullImage: boolean;
}

export const ImageOfPokemon = ({ name, isFullImage }: ImageOfPokemonProps) => (
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
