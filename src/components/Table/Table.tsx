import React from "react";
import * as S from "./Table.styled";

const Table: React.FC<TableProps> = ({ data }) => {
  const [tableData, setTableData] = React.useState(data);

  const columns = [
    { label: "Artist", accessor: "artist_title" },
    { label: "Title", accessor: "title" },
    { label: "Origin", accessor: "place_of_origin" },
    { label: "Department", accessor: "department_title" },
  ];

  return (
    <S.Table>
      <TableHead columns={columns} />
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
