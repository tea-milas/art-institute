"use client";
import axios from "axios";
import useSWR from "swr";

export const useData = () => {
  const { data, error, isLoading } = useSWR(
    "https://api.artic.edu/api/v1/artworks",
    (url: string) => axios.get(url).then((res) => res.data.data)
  );

  return { data: data, error, isLoading };
};

export const useImage = (id: number) => {
  const { data, error, isLoading } = useSWR(
    `https://api.artic.edu/api/v1/artworks/${id}`,
    (url: string) => axios.get(url).then((res) => res.data)
  );

  const imageUrl = `${data?.config?.iiif_url}/${data?.data?.image_id}/full/843,/0/default.jpg`;

  return { imageUrl: imageUrl, error, isLoading };
};
