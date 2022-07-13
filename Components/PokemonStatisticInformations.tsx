import React, { useEffect, useState } from "react";
import { Text } from "react-native";

interface statistic {
  type: string;
  effort: number;
  baseStat: number;
}

export const PokemonStatisticInformations = ({ name }: { name: string }) => {
  // eslint-disable-next-line operator-linebreak
  const [listOfStatistics, setListOfStatistics] = useState<
    Array<{ stat: Array<string> }>
  >([]);

  useEffect(() => {
    const getInformations = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const list = await response.json();
      console.log(list);
      // setListOfStatistics(list.stats);
    };
    getInformations();
  }, [name]);

  // setListOfStatistics(newList);

  //   console.log(listOfStatistics);
  return <Text>mmmm</Text>;
};
