import { useState } from "react";
import { AvailableMeals } from "./components/AvailableMeals";
import { Cart } from "./components/Cart";
import { ContextProvider } from "./store/ContextProvider";
import { Header } from "./components/Header";
import { MealsSummary } from "./components/MealsSummary";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  }

  const hideModalHandler = () => {
    setShowModal(false);
  }

  return (
     <ContextProvider>
        {showModal && <Cart onClose={hideModalHandler} />}
        <Header onShowModal={showModalHandler} />
        <MealsSummary />
        <AvailableMeals />
     </ContextProvider>
  );
}

export default App;
