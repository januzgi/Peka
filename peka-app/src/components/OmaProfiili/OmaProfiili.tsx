import React, { ReactElement, FC } from 'react';
import { NAV_PROFIILI } from '../../utils/constants';

const OmaProfiili: FC<any> = (any): ReactElement => {
  return (
    <div className='oma-profiili'>
      <h1>{NAV_PROFIILI.meta}</h1>
    </div>
  );
};

export default OmaProfiili;
