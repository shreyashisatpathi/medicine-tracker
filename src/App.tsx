import './App.css';
import React, { useState } from 'react';

import InputWeight from './InputWeight';
import DisplayWeight from './DisplayWeight';

type Weight = {
  date: Date;
  weight: number;
};

const App = () => {
  const [weights, setweight] = useState<Weight[]>([]);
  const inputWeightCB = (weight: number) => {
    const dailyWeight = [...weights, { date: new Date(), weight }];
    setweight(dailyWeight);
  };

  // const weights = [
  //   { date: new Date(), weight: 65 },
  //   { date: new Date(), weight: 64 },
  //   { date: new Date(), weight: 63 },
  // ];

  return (
    <div>
      <InputWeight inputWeightCB={inputWeightCB} />
      <DisplayWeight weights={weights} />
    </div>
  );
};

export default App;
