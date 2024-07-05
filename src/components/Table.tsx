import React from 'react';

type THead = {
  [key: string]: string;
}

type TColumn<T> = {
  values: T[];
  renderItem: (value: T) => React.ReactElement;
}

type TBody<T> = {
  [key: string]: TColumn<T>;
}

interface TableProps<T> {
  head: THead;
  body: TBody<T>;
}

const SmartTable = <T,>({ head, body }: TableProps<T>) => {
  const columnKeys = Object.keys(head);
  const rowCount = body[columnKeys[0]].values.length;

  return (
    <table>
      <thead>
        <tr>
          {columnKeys.map((key) => (
            <th key={key}>{head[key]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rowCount }).map((_, index) => (
          <tr key={index}>
            {columnKeys.map((key) => (
              <td key={key}>
                {body[key].renderItem(body[key].values[index])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const head = {
  name: 'Имя',
  monitoringPoint: 'Точка мониторинга',
  size: "Размер",
  shareType: "Тип шаринга"
};

const body: TBody<string> = {
  name: {
    values: ['pool_lvm/volume_1', 'pool_lvm/volume_2', 'pool_lvm/volume_3'],
    renderItem: (value) => <div>{value}</div>
  },
  monitoringPoint: {
    values: ["1T", "2T", "3T"],
    renderItem: (value) => <div>{value}</div>
  },
  size: {
    values: ["4T", "5T", "6T"],
    renderItem: (value) => <div>{value}</div>
  },
  shareType: {
    values: ["7T", "8T", "9T"],
    renderItem: (value) => <div>{value}</div>
  },
};

export const TestSmartTable = () => {
  return <SmartTable body={body} head={head}/>
}
