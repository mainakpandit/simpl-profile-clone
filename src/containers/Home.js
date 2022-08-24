import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';

import Button from '@components/Button';
import Avatar from '@components/Avatar';
import Typography from '@components/Typography';
import Card from '@components/Card';
import MerchantBadge from '@components/MerchantBadge';
import { icons } from '@constants';
import ZomatoLogo from '@assets/images/zomato.png';
import DunzoLogo from '@assets/images/dunzo.png';
import BigbasketLogo from '@assets/images/bigbasket.png';
import GrofersLogo from '@assets/images/grofers.png';

const Home = () => {
  const merchantsData = [
    {
      name: 'Zomato',
      image: ZomatoLogo,
      colors: {
        backgroundColor: '#FFF7F7',
        borderColor: '#FFE8E8',
      },
    },
    {
      name: 'Dunzo',
      image: DunzoLogo,
      colors: {
        backgroundColor: '#F8FFFA',
        borderColor: '#DEF9E5',
      },
    },
    {
      name: 'Big Basket',
      image: BigbasketLogo,
      colors: {
        backgroundColor: '#FAFFEE',
        borderColor: '#F5FFDC',
      },
    },
    {
      name: 'Grofers',
      image: GrofersLogo,
      colors: {
        backgroundColor: '#FFF4F0',
        borderColor: '#FFE8DF',
      },
    },
    {
      name: 'Sample 1',
      image: ZomatoLogo,
      colors: {
        backgroundColor: '#F4F9FF',
        borderColor: '#DDECFF',
      },
    },
    {
      name: 'Sample 2',
      image: GrofersLogo,
      colors: {
        backgroundColor: '#FFF4F0',
        borderColor: '#FFE8DF',
      },
    },
  ];
  return (
    <Box component='header'>
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Button type='text'>
          <Avatar>RM</Avatar>
          <Grid
            container
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            sx={{ ml: '7px' }}
          >
            <Typography className='opacity56' sx={{ mb: '1px' }}>
              Hello
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            >
              Rohan<SvgIcon viewBox='0 0 6 9'>{icons.chevronLeft}</SvgIcon>
            </Typography>
          </Grid>
        </Button>
        <Button>
          <Grid
            container
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-end'
            sx={{ ml: '7px' }}
          >
            <Typography className='opacity56' sx={{ mb: '1px' }}>
              Upgrade credit limit
            </Typography>
            <Typography
              className='shadow'
              variant='subtitle1'
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            >
              ₹15,000<SvgIcon viewBox='0 0 6 9'>{icons.chevronLeft}</SvgIcon>
            </Typography>
          </Grid>
        </Button>
      </Grid>
      <Card sx={{ mt: '24px' }} raised>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          wrap='nowrap'
          className='pb-20'
        >
          <Typography className='grey4 mb-16' variant='h2'>
            Amount due
          </Typography>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='flex-end'
            wrap='nowrap'
            sx={{ width: 'auto' }}
          >
            <Typography className='grey2' variant='h1'>
              <span className='currency'>₹</span>26,000
            </Typography>
            <Typography className='grey2' paragraph>
              Due by April 20
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className='mt-24 pt-16 pr-0'>
        <Typography className='grey1 mb-16' variant='h3'>
          Use Simpl on 4500+ merchants
        </Typography>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify-content='flex-start'
          wrap='nowrap'
          sx={{ overflowX: 'auto' }}
          className='hide-scrollbar'
        >
          {merchantsData.map(({ name, image, colors }, index) => (
            <MerchantBadge
              key={name}
              image={image}
              name={name}
              colors={colors}
              sx={{ mr: index !== merchantsData.length - 1 ? '4.66px' : 0 }}
            />
          ))}
        </Grid>
      </Card>
    </Box>
  );
};

export default Home;
