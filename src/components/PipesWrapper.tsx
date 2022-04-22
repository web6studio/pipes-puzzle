import { FunctionComponent } from 'react';

import { PipesRow } from './PipesRow';

type Props = {
  onRotate: Rotate,
  data: Pipes,
}

export const PipesWrapper: FunctionComponent<Props> = (props) => {
  const { data, onRotate } = props;

  return (
    <div className='pipes-wrapper'>
      {data?.map((row, index) => (
        <PipesRow onRotate={onRotate} data={row}  row={index} key={index} />
      ))}
    </div>
  );
};
