import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { commonConstants, routeConstants } from '@constants';

const Router = () => {
  const { ROUTE_CONSTANTS } = commonConstants;
  return (
    <BrowserRouter>
      <Routes>
        {routeConstants.map((route) => (
          <Route
            key={route[ROUTE_CONSTANTS.PATH]}
            path={route[ROUTE_CONSTANTS.PATH]}
            element={route[ROUTE_CONSTANTS.COMPONENT]}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
