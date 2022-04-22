import { FunctionComponent, useState, useCallback, useEffect } from 'react';

import { useWebsocket } from '../api/socket';
import { convertData } from '../utils';
import { COMMANDS } from '../constants';
import { PipesWrapper } from '../components/PipesWrapper';

const Home: FunctionComponent = () => {
  const [pipes, setPipes] = useState<Pipes>([]);
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

  const handleStartClick = useCallback(() => {
    ws.send(`${COMMANDS.NEW} 1`);
    ws.send(COMMANDS.MAP);
  }, [ws]);

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
  }, [ws, getData, handleStartClick]);

  const handleHelpClick = () => {
    ws.send(COMMANDS.HELP);
  };

  const handleVerifyClick = () => {
    ws.send(COMMANDS.VERIFY);
  };

  const handleRotate = useCallback((x: number, y: number) => {
    ws.send(`${COMMANDS.ROTATE} ${x} ${y}`);
    ws.send(COMMANDS.MAP);
  }, [ws]);

  return (
    <div>
      <h1>Pipes Puzzle</h1>
      <PipesWrapper onRotate={handleRotate} data={pipes} />
      <button onClick={handleStartClick}>Start New Game</button>
      <button onClick={handleHelpClick}>Help</button>
      <button onClick={handleVerifyClick}>Verify</button>
    </div>
  );
}

export default Home;
