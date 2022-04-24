import { FunctionComponent, useState, useCallback, useEffect, ChangeEvent } from 'react';

import { useWebsocket } from '../api/socket';
import { convertData } from '../utils';
import { COMMANDS } from '../constants';
import { PipesWrapper } from '../components/PipesWrapper';
import { HomePage } from '../components/styles';

const Home: FunctionComponent = () => {
  const [pipes, setPipes] = useState<Pipes>([]);
  const [level, setLevel] = useState('1');
  const { ws } = useWebsocket();

  const getData = useCallback((data: string) => {
    if (data.search(`${COMMANDS.MAP}:`) !== -1) {
      setPipes(convertData(data.split(`${COMMANDS.MAP}:\n`)[1]));
    }

    if (data.search(`${COMMANDS.VERIFY}:`) !== -1) {
      const result = data.split(`${COMMANDS.VERIFY}: `)[1];
      alert(result);
    }
  }, []);

  const handleStartClick = () => {
    ws.send(`${COMMANDS.NEW} ${level}`);
    ws.send(COMMANDS.MAP);
  };

  useEffect(() => {
    ws.onopen = () => {
      handleStartClick();
    };

    ws.onmessage = e => {
      getData(e.data)
    };

    return () => {
      ws.close();
    };
    // eslint-disable-next-line
  }, [ws, getData]);

  const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
  };

  const handleVerifyClick = () => {
    ws.send(COMMANDS.VERIFY);
  };

  const handleRotate = (x: number, y: number) => {
    ws.send(`${COMMANDS.ROTATE} ${x} ${y}`);
    ws.send(COMMANDS.MAP);
  };

  return (
    <HomePage>
      <div>
        <h1>Pipes Puzzle</h1>
        <button onClick={handleStartClick}>Start New Game</button>
        <select name='level' value={level} onChange={handleLevelChange}>
          <option value={1}>Level 1</option>
          <option value={2}>Level 2</option>
          <option value={3}>Level 3</option>
          <option value={4}>Level 4</option>
          <option value={5}>Level 5</option>
          <option value={6}>Level 6</option>
        </select>
        <button onClick={handleVerifyClick}>Verify</button>
        <PipesWrapper onRotate={handleRotate} data={pipes} />
      </div>
    </HomePage>
  );
}

export default Home;
