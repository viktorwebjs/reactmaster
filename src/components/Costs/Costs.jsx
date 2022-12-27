import CostItem from './CostItem';
import './Costs.scss';
import Card from '../UI/Card';
import CostsFilter from '../CostsFilter/CostsFilter';
import { useState } from 'react';

const Costs = (props) => {
  const [selectYear, setSelectYear] = useState('2021');

  let db = props.costs;
  const changeYear = (e) => {
    setSelectYear(e);
  };

  return (
    <>

      <Card className='costs'>
        <CostsFilter year={selectYear} onChangeYear={changeYear} />
        {db.map((item, index) => (
          <CostItem
            key={index}
            date={item.date}
            description={item.description}
            amount={item.amount}
          />
        ))}
      </Card>
    </>
  );
};
export default Costs;
