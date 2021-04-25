import React, { ReactElement, FC } from 'react';

interface Props {
  laji: ReactElement;
  otsikko: String;
  paikka: String;
  aika: String;
}

const Ilmoitus: FC<Props> = (props: Props): ReactElement => {
  return (
    <div className='ilmoitus'>
      {props.laji}
      <div className='tekstit'>
        <h2>{props.otsikko}</h2>
        <p>{props.paikka}</p>
        <p>{props.aika}</p>
      </div>
    </div>
  );
};

export default Ilmoitus;
