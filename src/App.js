import React from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {increment,decrement,login,logout} from './actions'

import Home from './components/home'
import authReducer from './reducers/auth';

function App() {

  const auth = useSelector( state => state.authReducer);
  const counter = useSelector( state => state.counterReducer);
  const dispatch = useDispatch();
  const store = useStore();

  const incrementCounter = () => {
    dispatch(increment());
    console.log(store.getState())
  }

  const logged_in_message = <h2> you are authenticated</h2>;
  const logged_out_message = <h2>login to view secret message</h2>;
  return (
    
    <div className="App">

      <h1>Hello world {counter}</h1>

      {auth ? logged_in_message : logged_out_message}
      

      <button onClick={incrementCounter}> increment +</button>  
      <button onClick={()=> dispatch(decrement())}> decrement -</button>  
      
      <br/>

      <button onClick={()=>dispatch(login())}>LogIn</button>
      <button onClick={()=>dispatch(logout())}>LogOut</button>


      <Home />

    </div>
  );
}

export default App;
