import React, { FC, useState, useEffect } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm'
import Pizza from './models/Pizza'
import DisplayPizzas from './components/DisplayPizzas';


const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>(() => {
    const saved = localStorage.getItem('pizzasList');
    if (saved) {
      try {
        return JSON.parse(saved) as Pizza[];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('pizzasList', JSON.stringify(pizzasList));
  }, [pizzasList]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }
  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)))
  }

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newPizzasList)
  }

  console.log('pizzasList: ', pizzasList)
  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>REACT PIZZA</span>
        <AddPizzaForm 
        addPizza={addPizza}/>
        <DisplayPizzas
        pizzasList={pizzasList}
        deletePizza={deletePizza}
        updatePizza={updatePizza}
        />
      </div>
    </div>
  );
}

export default App;
