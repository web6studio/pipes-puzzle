import { SET_LEVEL } from '../actions/levelActions';

export type LevelState = {
  level: string,
};

const initialState: LevelState = {
  level: '1',
};

export default function mapReducer(
  state: LevelState = initialState,
  action: SetLevelAction
): LevelState {
  switch (action.type) {
    case SET_LEVEL:
      return {
        level: action.level,
      };
    default:
      return state;
  };
};
