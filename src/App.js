import React from "react";
import UserLogin from './components/userLogin/index';
import MainScreen from "./components/MainScreen";
import FormItem from "./components/FormItem";



function App() {
  return (
    <div className="App">

      <UserLogin />

      <MainScreen />

      <FormItem />

    </div>
  );
}

export default App;
