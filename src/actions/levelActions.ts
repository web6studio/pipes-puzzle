export const SET_LEVEL = 'SET_LEVEL';

export function setLevel(level: string): SetLevelAction {
  return {
    type: SET_LEVEL,
    level,
  };
};
