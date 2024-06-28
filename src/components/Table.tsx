import { ReactElement } from "react";

type TTableProps<Th, Tb> = {
  header: {
    data: Th[];
    renderItem: (item: Th, index: number) => ReactElement;
  };
  body: {
    data: Tb[];
    renderItem: (item: Tb, index: number) => ReactElement;
  };
};

export const Table = <Th, Tb>({ header, body }: TTableProps<Th, Tb>) => {
  return (
    <table>
      <thead>
        <tr>{header.data.map((item, index) => header.renderItem(item, index))}</tr>
      </thead>
      <tbody>{body.data.map((item, index) => body.renderItem(item, index))}</tbody>
    </table>
  );
};
