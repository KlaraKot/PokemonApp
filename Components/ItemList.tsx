import React, { Component } from "react";
import { NativeBaseProvider, Text, Box } from "native-base";

export const ItemList = ({ name }: { name: string }) => {
  return (
    <Box>
      <Text fontSize="md" color="#FFC300" style={{ padding: 20 }}>
        {name}
      </Text>
    </Box>
  );
};
