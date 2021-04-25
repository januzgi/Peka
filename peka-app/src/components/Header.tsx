import React, { ReactElement, FC } from 'react';
import {
  SportsHockey,
  EventOutlined,
  PlaceOutlined,
  PeopleAltOutlined,
  SearchOutlined,
} from '@material-ui/icons';
import { HEADER_TITLE } from '../utils/constants';

interface Props {
  otsikko: String;
}

const Header: FC<Props> = ({ otsikko }): ReactElement => {
  return (
    <header>
      <h2 className='app-title'>{otsikko}</h2>
      <ul>
        <li className='menu-filter'>
          <button>
            <SportsHockey />
            {HEADER_TITLE.laji}
          </button>
        </li>
        <li className='menu-filter'>
          <button>
            <EventOutlined />
            {HEADER_TITLE.aika}
          </button>
        </li>
        <li className='menu-filter'>
          <button>
            <PlaceOutlined />
            {HEADER_TITLE.paikka}
          </button>
        </li>
        <li className='menu-filter'>
          <button>
            <PeopleAltOutlined />
            {HEADER_TITLE.ilmoitustyyppi}
          </button>
        </li>
        <li className='menu-filter search'>
          <button>
            <SearchOutlined />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
