import { FunctionComponent } from 'react';

import { Pipe } from './styles';

type Props = {
  onRotate: Rotate,
  data: Pipe,  
  row: number,
}

export const PipesRow: FunctionComponent<Props> = (props) => {
  const { row, data, onRotate } = props;
  const handleClick = (index: number) => {
    onRotate(index, row)
  };

  return (
    <div>
      {data?.map((value, index) => (
        <Pipe onClick={() => handleClick(index)} key={index}>{value}</Pipe>
      ))}
    </div>
  );
};
