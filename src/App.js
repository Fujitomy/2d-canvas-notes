
import './App.css';
import Routes from '@routes';
// import { Link } from 'react-router-dom';
// import { DatePicker,Button } from 'antd-mobile';
// import logo from './logo.svg';
import 'antd-mobile/dist/antd-mobile.css';
const FastClick = require('fastclick');
FastClick.attach(document.body);
// require('es6-promise/auto'); // 全局引入es6-promise pollify

// function goPage(url){
// }

function App() {
  return (
    <main className="App">
      <Routes />
    </main>
  );
}

export default App;
