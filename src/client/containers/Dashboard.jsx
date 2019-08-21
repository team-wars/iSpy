import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ISpyContainer from './iSpyContainer';
import FormContainer from './FormContainer';

const Dashboard = () => {
  const { sessionID } = useSelector((store) => store.game);
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

export default Dashboard;
