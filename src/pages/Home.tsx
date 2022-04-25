import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

import { PipesWrapper } from '../components/PipesWrapper';
import { VerifyModal } from '../components/VerifyModal';
import { HomePage, Heading, ButtonWrapper } from '../components/styles';
import { useWebsocket } from '../api/socket';
import { COMMANDS } from '../constants';
import { convertData } from '../utils';

const Home: FunctionComponent = () => {
  const [pipes, setPipes] = useState<Pipes>([]);
  const [level, setLevel] = useState('1');
  const [code, setCode] = useState<Code>(null);
  const [showModal, setShowModal] = useState(false);
  const { ws } = useWebsocket();

  const processData = useCallback((data: string) => {
    if (data.search(`${COMMANDS.MAP}:`) !== -1) {
      setPipes(convertData(data.split(`${COMMANDS.MAP}:\n`)[1]));
    }

    if (data.search(`${COMMANDS.VERIFY}:`) !== -1) {
      const code = data.split('Password: ')[1];
      setCode(code);
      setShowModal(true);
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
      processData(e.data);
    };

    return () => {
      ws.close();
    };
    // eslint-disable-next-line
  }, [ws, processData]);

  const handleLevelChange = (level: string | null) => {
    if (level) {
      setLevel(level);
      ws.send(`${COMMANDS.NEW} ${level}`);
      ws.send(COMMANDS.MAP);
    }
  };

  const handleVerifyClick = () => {
    ws.send(COMMANDS.VERIFY);
  };

  const handleRotate = (x: number, y: number) => {
    ws.send(`${COMMANDS.ROTATE} ${x} ${y}`);
    ws.send(COMMANDS.MAP);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <HomePage>
      <div>
        <Heading>Pipes Puzzle</Heading>
        <ButtonWrapper>
          <Button onClick={handleStartClick} variant='outline-primary'>New Game</Button>{' '}
          <DropdownButton onSelect={handleLevelChange} title={`Level ${level}`} variant='outline-primary'>
            <Dropdown.Item eventKey='1'>Level 1</Dropdown.Item>
            <Dropdown.Item eventKey='2'>Level 2</Dropdown.Item>
            <Dropdown.Item eventKey='3'>Level 3</Dropdown.Item>
            <Dropdown.Item eventKey='4'>Level 4</Dropdown.Item>
            <Dropdown.Item disabled eventKey='5'>Level 5</Dropdown.Item>
            <Dropdown.Item disabled eventKey='6'>Level 6</Dropdown.Item>
          </DropdownButton>
          <Button onClick={handleVerifyClick} variant='outline-primary'>Verify</Button>{' '}
        </ButtonWrapper>
        <PipesWrapper onRotate={handleRotate} data={pipes} level={level} />
      </div>
      <VerifyModal onClose={handleClose} show={showModal} code={code} />
    </HomePage>
  );
}

export default Home;
