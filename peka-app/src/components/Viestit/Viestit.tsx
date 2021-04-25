import React, { ReactElement, FC } from 'react';
import { NAV_VIESTIT } from '../../utils/constants';

const Viestit: FC<any> = (any): ReactElement => {
  return (
    <div className='viestit'>
      <h1>{NAV_VIESTIT.meta}</h1>
    </div>
  );
};

export default Viestit;
