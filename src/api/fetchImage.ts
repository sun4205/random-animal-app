import { DogApiResponse, CatApiResponse } from "../types";

export const fetchDogImage = async (): Promise<string> => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data: DogApiResponse = await res.json();
  return data.message;
};

export const fetchCatImage = async (): Promise<string> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data: CatApiResponse[] = await res.json();
  return data[0].url;
};
