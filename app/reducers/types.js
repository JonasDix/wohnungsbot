import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import type { electronStateType } from './electron';
import type { overlayStateType } from './overlay';
import type { dataStateType } from './data';
import type { configurationStateType } from './configuration';

export type stateType = {
  electron: electronStateType,
  animations: overlayStateType,
  data: dataStateType,
  configuration: configurationStateType
};

export type Action = {
  +type: string,
  // eslint-disable-next-line flowtype/no-weak-types
  payload: any,
  meta?: {
    target: string
  }
};

export type GetState = () => stateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<stateType, Action>;
