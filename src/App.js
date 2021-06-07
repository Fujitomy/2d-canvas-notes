import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Routers from './routers';
import { DatePicker,Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
const FastClick = require('fastclick');
FastClick.attach(document.body);



// require('es6-promise/auto'); // 全局引入es6-promise pollify
function goPage(url){

}

function App() {
  return (
    <main className="App">
      <Routers />
    </main>
  );
}

export default App;
