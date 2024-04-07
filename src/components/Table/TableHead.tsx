const TableHead: React.FC<TableHeadProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          return <th key={accessor}>{label}</th>;
        })}
      </tr>
    </thead>
  );
};

interface TableHeadProps {
  columns: Array<{ label: string; accessor: string }>;
}

export default TableHead;
