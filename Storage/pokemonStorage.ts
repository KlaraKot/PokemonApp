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

// // getting favourite pokemon by key - name

// export const getFavouritePokemon = async (selectedFavouritePokemon: string) => {
//   try {
//     const favouritePokemon = await AsyncStorage.getItem(
//       selectedFavouritePokemon,
//     );
//     if (favouritePokemon !== null) {
//       return favouritePokemon;
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return undefined;
// };

// // removing pokemon from storage
// export const removePokemon = async (pokemon: string) => {
//   try {
//     await AsyncStorage.removeItem(pokemon);
//     console.log("usunieto pokemona");
//   } catch (error) {
//     console.log(error);
//   }
// };

// // checking if pokemon is in storage
// export const checkFavouritePokemon = async (pokemon: Pokemon) => {
//   const favouritePokemon = await AsyncStorage.getItem(pokemon.name);
//   const info = !!favouritePokemon;

//   return info;
// };
