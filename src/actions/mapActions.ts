export const GET_MAP_SUCCESS = 'GET_MAP_SUCCESS';
export const GET_MAP_REQUEST = 'GET_MAP_REQUEST';

export function getMapRequest(): GetMapRequestAction {
  return {
    type: GET_MAP_REQUEST,
  };
};

export function getMapSuccess(
  map: Pipes
): GetMapSuccessAction {
  return {
    type: GET_MAP_SUCCESS,
    map,
  };
};
