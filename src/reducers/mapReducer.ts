import { GET_MAP_REQUEST, GET_MAP_SUCCESS } from '../actions/mapActions';

export type MapState = {
  map: Pipes,
  isLoading: boolean,
};

const initialState: MapState = {
  map: [],
  isLoading: false,
};

export default function mapReducer(
  state: MapState = initialState,
  action: GetMapSuccessAction
): MapState {
  switch (action.type) {
    case GET_MAP_REQUEST:
      return {
        map: [],
        isLoading: true,
      };
    case GET_MAP_SUCCESS:
      return {
        map: action.map,
        isLoading: false,
      };
    default:
      return state;
  };
};
