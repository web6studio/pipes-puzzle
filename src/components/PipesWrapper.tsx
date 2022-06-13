import { FunctionComponent } from 'react';
import shortid from 'shortid';

import { PipesRow } from './PipesRow';
import { Pipes } from './styles';

type Props = {
  onRotate: Rotate,
  data: Pipes,
  level: string,
}

export const PipesWrapper: FunctionComponent<Props> = (props) => {
  const { data, level, onRotate } = props;

  const getFontSize = () => {
    switch (level) {
      case '1':
      case '2':
        return 36;
      case '3':
        return 25;
      default:
        return 6.2;
    }
  };

  return (
    <Pipes fontSize={getFontSize()}>
      {data?.map((row, index) =>
        <PipesRow onRotate={onRotate} data={row} row={index} key={`row_${shortid.generate()}`} />
      )}
    </Pipes>
  );
};
