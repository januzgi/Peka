import React, { ReactElement, FC } from 'react';
import Ilmoitus from './Ilmoitus/Ilmoitus';
import { format } from 'date-fns';

import {
  SportsHockey,
  SportsSoccer,
  SportsBasketball,
} from '@material-ui/icons';

interface Props {
  props: ReactElement;
}

const Ilmoitukset: FC<Props> = (props: Props): ReactElement => {
  const ilmoitukset = {
    ilmoitus1: {
      id: 1,
      laji: <SportsHockey />,
      otsikko: 'Jääkiekko, höntsy',
      paikka: 'Koulukadun kenttä, Eteläpuisto',
      aika: format(new Date(), 'd.M., H:mm'),
    },
    ilmoitus2: {
      id: 2,
      laji: <SportsSoccer />,
      otsikko: 'Jalkapallo, höntsy',
      paikka: 'Kiovanpuisto kenttä, Kaleva',
      aika: format(new Date(), 'd.M., H:mm'),
    },
    ilmoitus3: {
      id: 3,
      laji: <SportsBasketball />,
      otsikko: 'Koripallo, höntsy',
      paikka: 'Tammelan ala-aste, Tammela',
      aika: format(new Date(), 'd.M., H:mm'),
    },
  };

  const ilmoituksetComponents = Object.values(ilmoitukset).map((item) => {
    return (
      <Ilmoitus
        key={item.id}
        laji={item.laji}
        otsikko={item.otsikko}
        aika={item.aika}
        paikka={item.paikka}
      />
    );
  });

  return (
    <div className='ilmoitukset'>
      {ilmoituksetComponents}
      {ilmoituksetComponents}
      {ilmoituksetComponents}
    </div>
  );
};

export default Ilmoitukset;
