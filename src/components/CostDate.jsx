import './CostDate.scss';

export default function CostDate(props) {
  const month = props.date.toLocaleString('ru-RU', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('ru-RU', { day: '2-digit' });
  return (
    <div className='cost_date'>
      <div className='cost_date__day'>{day}</div>
      <div className='cost_date__month'>{month}</div>
      <div className='cost_date__year'>{year}</div>
    </div>
  );
}
