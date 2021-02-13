import React from 'react'
import { Provider } from 'react-redux'
import store from "./redux/store";
import Cake from './components/Cake'
import HooksCake from './components/HooksCake'
import './App.css';
import IceCream from './components/IceCream';
import HooksIceCream from "./components/HooksIceCream";
import Users from './components/Users'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCake />
        <Cake />
        <IceCream />
        <HooksIceCream /> */}
        <Users />
      </div>
    </Provider>
  );
}

export default App;
