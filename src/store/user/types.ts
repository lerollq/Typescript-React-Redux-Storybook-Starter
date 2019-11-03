
export interface InitialState {
  name: string
}

export enum ActionTypesKeys {
  SET_USER = "SET_USER",
}

interface ISetUserAction {
  readonly type: ActionTypesKeys.SET_USER
  readonly payload: string
}

export type ActionsTypes = ISetUserAction