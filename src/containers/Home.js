import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import Skeleton from '@mui/material/Skeleton';

import Button from '@components/Button';
import Avatar from '@components/Avatar';
import Typography from '@components/Typography';
import Card from '@components/Card';
import MerchantsCard from '@components/MerchantsCard';
import PaymentMethod from '@components/PaymentMethod';
import { icons } from '@constants';
import ZomatoLogo from '@assets/images/zomato.png';
import DunzoLogo from '@assets/images/dunzo.png';
import BigbasketLogo from '@assets/images/bigbasket.png';
import GrofersLogo from '@assets/images/grofers.png';
import PayTMLogo from '@assets/images/paytm.png';
import InvoiceImage from '@assets/images/invoice.png';

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

const paymentData = [
  {
    isPaid: true,
    date: 'April 18',
    amount: 5000,
    times: 0,
  },
  {
    isPaid: true,
    date: 'April 19',
    amount: 5000,
    times: 2,
  },
  {
    isPaid: false,
    date: 'April 19',
    amount: 5000,
    times: 5,
  },
  {
    isPaid: false,
    date: 'April 19',
    amount: 1000,
    times: 0,
  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box>
      <Grid
        component='header'
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
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
      <Card component='main' sx={{ mt: '24px' }} raised>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          wrap='nowrap'
          className='pb-20 dashed-border-bottom'
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
            {isLoading ? (
              <>
                <Skeleton variant='rounded' width={110} height={40} />
                <Skeleton className='mt-8' variant='rounded' width={75} height={14} />
              </>
            ) : (
              <>
                <Typography className='grey2' variant='h1'>
                  <span className='currency'>₹</span>26,000
                </Typography>
                <Typography className='grey2 mb-0' paragraph sx={{ mr: '3px' }}>
                  Due by April 20
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          wrap='nowrap'
          className='pt-16 pb-16 border-bottom'
        >
          <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='flex-start'
            sx={{ opacity: 0.6 }}
          >
            <img src={InvoiceImage} alt='Bill Amount' />
            <Typography paragraph className='grey2 ml-4 variant1'>
              Bill amount
            </Typography>
          </Grid>
          {isLoading ? (
            <Skeleton variant='rounded' width={75} height={14} />
          ) : (
            <Typography paragraph className='grey2 variant1' sx={{ opacity: 0.6 }}>
              <span className='currency'>₹</span>41,000
            </Typography>
          )}
        </Grid>
        {isLoading &&
          Array(4)
            .fill()
            .map(() => (
              <Grid
                container
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                wrap='nowrap'
                className='mt-20'
                key={Math.random() * 1000}
              >
                <Skeleton variant='rounded' width={120} height={15} />
                <Skeleton variant='rounded' width={75} height={15} />
              </Grid>
            ))}
        {!isLoading &&
          paymentData.map(({ isPaid, date, amount, times }) => (
            <Grid
              container
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              wrap='nowrap'
              className='mt-16'
              key={Math.random() * 1000}
            >
              <Grid
                container
                direction='row'
                alignItems='center'
                justifyContent='flex-start'
                sx={{
                  opacity: isPaid && (times ? 1 : 0.6),
                }}
              >
                {isPaid ? (
                  <SvgIcon color='grey2' viewBox='0 0 14 14' sx={{ height: 14, width: 14 }}>
                    {icons.check}
                  </SvgIcon>
                ) : (
                  <SvgIcon color='error' viewBox='0 0 14 14' sx={{ height: 14, width: 14 }}>
                    {icons.alert}
                  </SvgIcon>
                )}
                <Typography paragraph className={`${isPaid ? 'grey2' : 'error'} ml-4 variant1`}>
                  {isPaid ? `Paid on ${date}` : 'Autopay failed'}
                </Typography>
              </Grid>
              <Typography
                paragraph
                className={`${isPaid ? 'grey2' : 'error'} variant1`}
                sx={{
                  opacity: isPaid && (times ? 1 : 0.6),
                }}
              >
                {Boolean(times) && (
                  <>
                    <span>{times}</span>
                    <Box component='span' sx={{ ml: '4px', mr: '5.25px' }}>
                      x
                    </Box>
                  </>
                )}
                <span className='currency'>₹</span>
                {amount}
              </Typography>
            </Grid>
          ))}
        <PaymentMethod name='PayTM' image={PayTMLogo} classes='mt-32' isLoading={isLoading} />
        <Button
          sx={{ marginTop: '18.6px' }}
          variant='contained'
          color='primary'
          fullWidth
          disabled={isLoading}
        >
          PAY NOW
        </Button>
      </Card>
      <MerchantsCard classes='mt-24' merchantsData={merchantsData} isLoading={isLoading} />
    </Box>
  );
};

export default Home;
