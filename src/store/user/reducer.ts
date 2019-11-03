import { Reducer } from "redux"
import { InitialState, ActionsTypes, ActionTypesKeys } from "./types"

const initialState: InitialState = {
  name: ""
}

export const reducer: Reducer<InitialState, ActionsTypes> = (state = initialState, action: ActionsTypes) => {
  switch(action.type) {
    case ActionTypesKeys.SET_USER:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}