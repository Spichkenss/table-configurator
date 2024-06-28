import { memo, ReactElement } from "react";

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

const Table = <Th, Tb>({ header, body }: TTableProps<Th, Tb>) => {
  return (
    <table>
      <thead>
        <tr>{header.data.map((item, index) => header.renderItem(item, index))}</tr>
      </thead>
      <tbody>{body.data.map((item, index) => body.renderItem(item, index))}</tbody>
    </table>
  );
};

const HeaderItem = memo(({ item }: { item: string }) => <th>{item}</th>);

const BodyItem = memo(({ item }: { item: { name: string; age: number; country: string } }) => (
  <tr>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.country}</td>
  </tr>
));

const headerData = ["Name", "Age", "Country"];
const bodyData = [
  { name: "Alice", age: 25, country: "USA" },
  { name: "Bob", age: 30, country: "UK" },
  { name: "Charlie", age: 35, country: "Canada" },
];

export function App() {
  return (
    <Table
      header={{
        data: headerData,
        renderItem: (item, index) => <HeaderItem item={item} key={index} />,
      }}
      body={{
        data: bodyData,
        renderItem: (item, index) => <BodyItem item={item} key={index} />,
      }}
    />
  );
}
