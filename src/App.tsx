import React, { useEffect } from 'react';
import { AppState } from './store/rootReducer';
import { userSelectors, userActions } from './store/user';
import { ThunkDispatch } from './store';
import { connect } from 'react-redux';

type AppProps = {
  userName: string
  setUser(): void
}

const App: React.FC<AppProps> = ({setUser, userName}) => {

  useEffect(() => {
    setUser()
  })

  return (
    <div className="App">
      <span>{userName}</span>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  userName: userSelectors.selectUserName(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  setUser: () => dispatch(userActions.setUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
