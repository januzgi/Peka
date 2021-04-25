import React, { ReactElement, FC } from 'react';
import { NAV_MUUT } from '../../utils/constants';

const Muut: FC<any> = (any): ReactElement => {
  return (
    <div className='muut'>
      <h1>{NAV_MUUT.meta}</h1>
    </div>
  );
};

export default Muut;
