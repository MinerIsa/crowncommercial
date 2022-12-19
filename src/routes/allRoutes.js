import React from 'react';
import { Redirect } from 'react-router-dom';

//Main Index

// Import all components

import Construction from '../pages/Construction/index';

//Components
import Buttons from '../pages/Components/Buttons';
import Badges from '../pages/Components/Badges';
import Alerts from '../pages/Components/Alerts';
import Dropdowns from '../pages/Components/Dropdowns';
import Typography from '../pages/Components/Typography';
import Background from '../pages/Components/Background';
import TextColors from '../pages/Components/TextColors';
import Accordions from '../pages/Components/Accordions';
import BoxShadows from '../pages/Components/BoxShadows';
import Borders from '../pages/Components/Borders';
import Carousel from '../pages/Components/Carousel';
import Lightbox from '../pages/Components/Lightbox';
import Tooltips from '../pages/Components/Tooltips';
import Cards from '../pages/Components/Cards';
import Forms from '../pages/Components/Forms';
import Breadcrumbs from '../pages/Components/Breadcrumbs';
import Paginations from '../pages/Components/Paginations';
import Avatar from '../pages/Components/Avatar';
import NavTabs from '../pages/Components/NavTabs';
import Modals from '../pages/Components/Modals';
import Tables from '../pages/Components/Tables';
import Icons from '../pages/Components/Icons';
import Progressbar from '../pages/Components/Progressbar';

const routes = [
  //Index Main
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/index" />,
  },
  { path: '/index', component: Construction, isTopbarDark: true },
];

export default routes;
