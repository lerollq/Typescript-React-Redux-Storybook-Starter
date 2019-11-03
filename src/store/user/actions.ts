import { ThunkResult } from "..";
import { ActionTypesKeys, ActionsTypes } from "./types";

const setUser = (): ThunkResult<ActionsTypes> => {
  return (dispatch) => dispatch({
    type: ActionTypesKeys.SET_USER,
    payload: "Bob"
  })
}

export const actions = {
  setUser
}

