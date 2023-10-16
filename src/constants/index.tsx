import { BeefIcon, CarrotIcon, HomeIcon, ListIcon } from 'lucide-react';

export const routes = [
  {
    label: 'Home',
    route: '/',
    icon: <HomeIcon />,
  },
  {
    label: 'List',
    route: '/list',
    icon: <ListIcon />,
  },
  {
    label: 'Meat',
    route: '/meat',
    icon: <BeefIcon />,
  },
  {
    label: 'Vegetables',
    route: '/vegetables',
    icon: <CarrotIcon />,
  },
];
