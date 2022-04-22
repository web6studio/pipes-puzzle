import React from 'react';
import { SOCKET_URL } from '../constants';

const ws = new WebSocket(SOCKET_URL);

const SocketContext = React.createContext({
  ws,
});

export const useWebsocket = () => React.useContext(SocketContext);
