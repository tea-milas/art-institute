import React from "react";
import * as S from "./Table.styled";

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Title</th>
          <th>Origin</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <S.Data>{item.artist_title}</S.Data>
            <S.Data>{item.title}</S.Data>
            <S.Data>{item.place_of_origin}</S.Data>
            <S.Data>{item.department_title}</S.Data>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};

interface Data {
  id: number;
  title: string;
  artist_title: string;
  place_of_origin: string;
  department_title: string;
}

interface TableProps {
  data: Array<Data>;
}

export default Table;
