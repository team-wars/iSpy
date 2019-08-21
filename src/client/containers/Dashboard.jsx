import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import ISpyContainer from './iSpyContainer';
import FormContainer from './FormContainer';

const mapPropsToState = (store) => ({
  sessionID: store.game.sessionID,
});
const Dashboard = ({ sessionID }) => {
  const routes = [
    {
      path: '/',
      exact: true,
      main: () => (!sessionID ? <FormContainer /> : <Redirect to={`/session/${sessionID}`} />),
    },
    {
      path: '/session/:sessionID',
      exact: true,
      main: () => <ISpyContainer />,
    },
  ];
  return (
    <div>
      <div>{sessionID}</div>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  );
};

export default connect(mapPropsToState)(Dashboard);
