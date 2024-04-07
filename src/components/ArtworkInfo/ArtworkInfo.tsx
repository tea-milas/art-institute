import Image from "next/image";
import React from "react";
import { useImage } from "@/hooks/useData";
import * as S from "./ArtworkInfo.styled";
const ArtworkInfo: React.FC<ArtworkInfoProps> = ({
  id,
  title,
  artist,
  thumbnail,
  placeOfOrigin,
}) => {
  const { imageUrl, error, isLoading } = useImage(id);

  if (error !== undefined) return <p>Sorry, there has been an error!</p>;
  return (
    <S.ListItem>
      {isLoading ? (
        <S.LoadingSpinner />
      ) : (
        <Image
          src={imageUrl}
          alt={thumbnail.alt_text}
          width={thumbnail.width}
          height={thumbnail.height}
          style={{ maxWidth: "600px", height: "auto", width: "auto" }}
        />
      )}
      <p>
        Title: <b>{title}</b>
      </p>
      <p>
        Artist: <b>{artist}</b>
      </p>
      <p>{placeOfOrigin}</p>
    </S.ListItem>
  );
};

export interface Thumbnail {
  alt_text: string;
  width: number;
  height: number;
}

interface ArtworkInfoProps {
  id: number;
  title: string;
  artist: string;
  thumbnail: Thumbnail;
  placeOfOrigin: string;
}
export default ArtworkInfo;
