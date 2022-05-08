import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { Button, Dropdown, DropdownButton, Spinner } from 'react-bootstrap';

import { PipesWrapper } from '../components/PipesWrapper';
import { VerifyModal } from '../components/VerifyModal';
import { HomePage, Heading, ButtonWrapper, SpinnerContainer } from '../components/styles';
import { useWebsocket } from '../api/socket';
import { COMMANDS } from '../constants';
import { convertData } from '../utils';

interface Props {
  onSetLevel(level: string): void;
  onGetMap(pipes: Pipes): void,
  onFetchMap(): void,
  map: Pipes,
  isLoading: boolean,
  level: string,
};

const Home: FunctionComponent<Props> = (props: Props) => {
  const { onSetLevel, onFetchMap, onGetMap, isLoading, level, map } = props;
  const [code, setCode] = useState<Code>(null);
  const [showModal, setShowModal] = useState(false);
  const { ws } = useWebsocket();

  const processData = useCallback((data: string) => {
    if (data.includes(`${COMMANDS.MAP}:`)) {
      onGetMap(convertData(data.split(`${COMMANDS.MAP}:\n`)[1]));
    };

    if (data.includes(`${COMMANDS.VERIFY}:`)) {
      const code = data.split('Password: ')[1];
      setCode(code);
      setShowModal(true);
    };
  }, [onGetMap]);

  const handleStartClick = () => {
    onFetchMap();
    ws.send(`${COMMANDS.NEW} ${level}`);
    ws.send(COMMANDS.MAP);
  };

  useEffect(() => {
    if (!map.length && ws.readyState === WebSocket.OPEN) {
      handleStartClick();
    };

    ws.onopen = () => {
      handleStartClick();
    };

    ws.onmessage = e => {
      processData(e.data);
    };
  }, [ws]);

  const handleLevelChange = (level: string | null) => {
    if (level) {
      onSetLevel(level);
      onFetchMap();
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
        {isLoading
          ? (
            <SpinnerContainer>
              <Spinner animation='border' variant='primary' />
            </SpinnerContainer>
          )
          : (
            <>
              <Heading>Pipes Puzzle</Heading>
              <ButtonWrapper>
                <Button onClick={handleStartClick} variant='secondary'>New Game</Button>{' '}
                <DropdownButton onSelect={handleLevelChange} title={`Level ${level}`} variant='secondary'>
                  <Dropdown.Item eventKey='1'>Level 1</Dropdown.Item>
                  <Dropdown.Item eventKey='2'>Level 2</Dropdown.Item>
                  <Dropdown.Item eventKey='3'>Level 3</Dropdown.Item>
                  <Dropdown.Item eventKey='4'>Level 4</Dropdown.Item>
                  <Dropdown.Item disabled eventKey='5'>Level 5</Dropdown.Item>
                  <Dropdown.Item disabled eventKey='6'>Level 6</Dropdown.Item>
                </DropdownButton>
                <Button onClick={handleVerifyClick} variant='secondary'>Verify</Button>{' '}
              </ButtonWrapper>
              <PipesWrapper onRotate={handleRotate} data={map} level={level} />
            </>
          )
        }
      </div>
      <VerifyModal onClose={handleClose} show={showModal} code={code} />
    </HomePage>
  );
};

export default Home;
