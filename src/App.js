import logo from './logo.svg';
import './App.css';
import View from './components/View';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
     {/* <View></View> */}
 
     <NavBar></NavBar>
     <Routes>
      <Route path='/'element={<View/>} />
      <Route path='/add'
      element={<Add data={{ id:'', name:'', grade:''}}
      method="post"/>} />
     </Routes>
    </div>
  );
}

export default App;
