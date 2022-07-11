import React from "react";
import { View, Image } from "react-native";

export const ImageOfPokemon = ({ name }: { name: string }) => (
  <View>
    <Image
      style={{ width: 200, height: 150 }}
      source={{
        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`,
      }}
      key={name}
    />
  </View>
);
