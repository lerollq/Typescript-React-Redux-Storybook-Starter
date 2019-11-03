import { createStore, applyMiddleware, Action } from 'redux'
import thunk, { ThunkDispatch, ThunkAction } from 'redux-thunk'
import rootReducer, { AppState } from './rootReducer'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({}))
)

export type ThunkDispatch = ThunkDispatch<AppState, {}, Action>

export type ThunkResult<R> = ThunkAction<R, AppState, {}, Action>

export default store