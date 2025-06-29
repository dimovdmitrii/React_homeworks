import "./App.css";
import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";

import OrderStatus from "./OrderStatus";

function App() {
  const products = ["Meat", "Bread", "Milk", "Eggs", "Chease"];
  const orders = [
    { orderId: 101, status: "в пути" },
    { orderId: 102, status: "обработан" },
    { orderId: 103, status: "доставлен" },
  ];

  return (
    <div className="App">
      <Greeting name="Дмитрий" />
      <ShoppingList items={products} />
      <h2>Статусы звказов:</h2>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
