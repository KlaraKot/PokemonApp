import React from "react";
import { Box, Text } from "native-base";

// To Do: Implement this component

export const FavouritePokemon = () => {
  const www = "Mamma mia";
  // zebranie pokemonow z local

  return (
    <Box
      style={{
        justifyContent: "center",
        height: "100%",
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: "#aaf0d1",
        borderRadius: 10,
      }}
    >
      <Text>{www}</Text>
    </Box>
  );
};
