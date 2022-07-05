import React, { Component } from "react";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { View, Image } from "react-native";
import { IconButton } from "react-native-paper";
import { mdiCardsHeart, mdiCardsHeartOutline } from "@mdi/js";

export const ItemList = ({ name }: { name: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#aaf0d1",
          borderRadius: 10,
        }}
      >
        <Text padding="2" fontSize="md" color="#A55318">
          {name}
        </Text>
        <Text>tu zdjecie</Text>
        <IconButton icon="heart" size={20} />
      </View>
    </View>
  );
};
