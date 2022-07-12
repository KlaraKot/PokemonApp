import React from "react";
import { Image } from "react-native";

export const ImageOfPokemon = ({ name }: { name: string }) => (
  <Image
    style={{ width: 200, height: 150 }}
    source={{
      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`,
    }}
    key={name}
  />
);
