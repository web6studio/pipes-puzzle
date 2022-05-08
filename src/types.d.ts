declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';

type Code = string | null;

type Pipe = Array<string>;

type Pipes = Array<Pipe>;

type Rotate = (x: number, y: number) => void;

type PipeProps = {
  fontSize: number,
};

type SetLevelAction = {
  type: typeof SET_LEVEL,
  level: string,
};

type GetMapRequestAction = {
  type: typeof GET_MAP_REQUEST,
};

type GetMapSuccessAction = {
  type: typeof GET_MAP_SUCCESS,
  map: Pipes,
};

type Action = SetLevelAction | GetMapRequestAction | GetMapSuccessAction;
