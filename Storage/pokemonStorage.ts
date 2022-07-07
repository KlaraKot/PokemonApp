import AsyncStorage from "@react-native-async-storage/async-storage";

// storing favourite pokemon

export const storeFavouritePokemon = async (favouritePokemon: string) => {
  try {
    await AsyncStorage.setItem(
      `${favouritePokemon}`,
      JSON.stringify(favouritePokemon),
    );
  } catch (error) {
    console.log(error);
  }
};

// getting favourite pokemon by key - name

export const getFavouritePokemon = async (selectedFavouritePokemon: string) => {
  try {
    const favouritePokemon = await AsyncStorage.getItem(
      selectedFavouritePokemon,
    );
    if (favouritePokemon !== null) {
      console.log(favouritePokemon);
      return favouritePokemon;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

// removing pokemon from storage
export const removePokemon = async (pokemon: string) => {
  try {
    await AsyncStorage.removeItem(pokemon);
    console.log("usunieto pokemona");
  } catch (error) {
    console.log(error);
  }
};

// checking if pokemon is in storage
export const checkFavouritePokemon = async (pokemon: string) => {
  const favouritePokemon = await AsyncStorage.getItem(pokemon);
  const info = !!favouritePokemon;

  return info;
};
