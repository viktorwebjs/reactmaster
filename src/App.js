import Costs from './components/Costs';

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Хододильник',
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
      <Costs costs={costs} />
    </div>
  );
}

export default App;
