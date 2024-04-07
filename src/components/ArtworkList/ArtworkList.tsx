import React from "react";
import ArtworkInfo, { Thumbnail } from "../ArtworkInfo/ArtworkInfo";
import { List } from "./ArtworkList.styled";

const ArtworkList: React.FC<ArtworkListProps> = ({ data }) => {
  return (
    <List>
      {data.map((item: Data) => (
        <ArtworkInfo
          key={item.id}
          id={item.id}
          title={item.title}
          artist={item.artist_title}
          thumbnail={item.thumbnail}
          placeOfOrigin={item.place_of_origin}
        />
      ))}
    </List>
  );
};

interface Data {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  place_of_origin: string;
  artist_title: string;
}

interface ArtworkListProps {
  data: Array<Data>;
}

export default ArtworkList;
