import commonConstants from './commonConstants';

import Home from '@scenes/Home';

const routeConstants = [
  {
    [commonConstants.ROUTE_CONSTANTS.PATH]: commonConstants.ROUTE_PATHS.HOME,
    [commonConstants.ROUTE_CONSTANTS.COMPONENT]: <Home />,
  },
];

export default routeConstants;
