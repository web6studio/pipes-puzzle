import { FunctionComponent } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { ModalText } from './styles';

type Props = {
  onClose: () => void,
  code: Code,
  show: boolean,
};

export const VerifyModal: FunctionComponent<Props> = (props) => {
  const { show, code, onClose } = props;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code!);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton />
      {code ? (
        <>
          <Modal.Body>
            <ModalText>
              Woohoo, you passed this level!<br />
              Your password code is: {code}
            </ModalText>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCopyCode}>Copy password code</Button>
          </Modal.Footer>
        </>
      ) : (
        <Modal.Body><ModalText>Incorrect, try it again!</ModalText></Modal.Body>
      )}
    </Modal>
  );
};
