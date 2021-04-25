import React, { ReactElement, FC } from 'react';
import { NAV_JATA_ILMOITUS } from '../../../utils/constants';

const UusiIlmoitus: FC<any> = (any): ReactElement => {
  return (
    <div className='uusi-ilmoitus'>
      <h1>{NAV_JATA_ILMOITUS.meta}</h1>
    </div>
  );
};

export default UusiIlmoitus;
