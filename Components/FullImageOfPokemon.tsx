import React from "react";
import { Image } from "react-native";

export const FullImageOfPokemon = ({ name }: { name: string }) => (
  <Image
    style={{ width: "70%", height: "50%" }}
    source={{
      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`,
    }}
    key={name}
  />
);
