import React, { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';

import {
  NotificationsNone,
  Create,
  Person,
  ChatBubbleOutlineOutlined,
  MoreHorizOutlined,
} from '@material-ui/icons';

import {
  NAV_ILMOITUKSET,
  NAV_JATA_ILMOITUS,
  NAV_PROFIILI,
  NAV_VIESTIT,
  NAV_MUUT,
} from '../utils/constants';

const Footer: FC<any> = (): ReactElement => {
  return (
    <footer>
      <ul>
        <li className='nav-link'>
          <Link to='/ilmoitukset'>
            <NotificationsNone />
            {NAV_ILMOITUKSET.meta}
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/jatailmoitus'>
            <Create />
            {NAV_JATA_ILMOITUS.meta}
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/omaprofiili'>
            <Person />
            {NAV_PROFIILI.meta}
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/viestit'>
            <ChatBubbleOutlineOutlined />
            {NAV_VIESTIT.meta}
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/muut'>
            <MoreHorizOutlined />
            {NAV_MUUT.meta}
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
