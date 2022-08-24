import Layout from '@layout';

import BottomNavigation from '@components/BottomNavigation';

const withBottomNavigation = (Component) => (props) => {
  const bottomNavButton = [
    {
      label: 'Home',
      icon: 'homeSolid',
      showBadge: false,
    },
    {
      label: 'Passbook',
      icon: 'passbookOutline',
      showBadge: false,
    },
    {
      label: 'Billbox',
      icon: 'billboxOutline',
      showBadge: true,
    },
    {
      label: 'More',
      icon: 'moreOutline',
      showBadge: false,
    },
  ];

  return (
    <Layout>
      <>
        <Component {...props} />
        <BottomNavigation buttonsConfig={bottomNavButton} />
      </>
    </Layout>
  );
};

export default withBottomNavigation;
