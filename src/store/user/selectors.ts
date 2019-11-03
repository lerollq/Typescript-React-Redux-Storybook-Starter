import { createSelector } from "reselect"
import { AppState } from "../rootReducer"

const getState = (state: AppState) => state.user

const selectUserName = createSelector(
  getState,
  user => user.name
)

export const selectors = {
  selectUserName
}