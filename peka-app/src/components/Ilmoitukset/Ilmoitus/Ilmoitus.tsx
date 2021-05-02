import React, { ReactElement, FC } from 'react';

interface Props {
  laji: ReactElement;
  lajiKuva: string;
  otsikko: string;
  paikka: string;
  aika: string;
}

const Ilmoitus: FC<Props> = (props: Props): ReactElement => {
  return (
    <div className='ilmoitus'>
      <div className='laji-kuva'>
        <img alt={props.otsikko} src={props.lajiKuva} />
      </div>
      <div className='tekstit'>
        <h2 className='laji-ikoni'>{props.laji}</h2>
        <h2>{props.otsikko}</h2>
        <p>{props.paikka}</p>
        <p>{props.aika}</p>
      </div>
    </div>
  );
};

export default Ilmoitus;
