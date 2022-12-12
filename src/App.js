import Costs from './components/Costs/Costs';
import TestProps from './components/TestProps/TestProps';

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Refrigerator',
      amount: 999.99,
    },
    {
      date: new Date(2021, 8, 12),
      description: 'Smartphone',
      amount: 599.99,
    },
    {
      date: new Date(2021, 4, 12),
      description: 'TV Set',
      amount: 99.99,
    },
  ];
  return (
    <div>
      <TestProps name='Test 1' />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
