import React from "react";
import UserLogin from "./pages/UserLogin";
import MainScreen from "./pages/MainScreen";
import "/Users/rafaeljordao/Documents/my-codes/codeleap/src/index.css"
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from './mainRoutes';


function App() {
  return (
    <div className="App">

      <Router>
        <MainRoutes />
      </Router>
      {/* <UserLogin /> */}
    </div>
  );
}

export default App;
