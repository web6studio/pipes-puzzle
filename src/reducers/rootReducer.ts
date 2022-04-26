import { combineReducers } from 'redux';

import levelReducer from './levelReducer';
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
  level: levelReducer,
  map: mapReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
