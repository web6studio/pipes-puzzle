import { FunctionComponent } from 'react';

import { PipesRow } from './PipesRow';
import { Pipes } from './styles';

type Props = {
  onRotate: Rotate,
  data: Pipes,
}

export const PipesWrapper: FunctionComponent<Props> = (props) => {
  const { data, onRotate } = props;

  return (
    <Pipes>
      {data?.map((row, index) => (
        <PipesRow onRotate={onRotate} data={row}  row={index} key={index} />
      ))}
    </Pipes>
  );
};
