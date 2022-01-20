import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

const expenses = [
  {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
];

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {
        //We need to send each object as new, that's why we use map function
      }
      <div>{expenses.map((e,i) => {        
        //Each component should have a unique key property
        return (<ExpenseItem key={e.id} id={e.id} title={e.title} date={e.date} amount={e.amount} />);
      })}</div>
    </div>
  );
};

export default App;
