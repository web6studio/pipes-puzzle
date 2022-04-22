import { FunctionComponent } from 'react';

type Props = {
  onRotate: Rotate,
  data: Pipe,  
  row: number,
}

// TODO: remove className, use StyledComponents
export const PipesRow: FunctionComponent<Props> = (props) => {
  const { row, data, onRotate } = props;
  const handleClick = (index: number) => {
    onRotate(index, row)
  };

  return (
    <div>
      {data?.map((value, index) => (
        <div className='pipe' onClick={() => handleClick(index)} key={index}>{value}</div>
      ))}
    </div>
  );
};
