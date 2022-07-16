import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeFavouritePokemon = async (favouritePokemon: string) => {
  try {
    await AsyncStorage.setItem("FAV_POKEMON", JSON.stringify(favouritePokemon));
  } catch (error) {
    console.log(error);
  }
};

export const getAllFavouritePokemonsFromStorage = async () => {
  try {
    const keys = await AsyncStorage.getItem("FAV_POKEMON");
    return keys;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
