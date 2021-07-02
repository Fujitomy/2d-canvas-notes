import React from 'react';
import { Link } from 'react-router-dom';
// import { DatePicker,Button } from 'antd-mobile';
import './index.scss';


const Hello = (props) => {
  console.log(props, 'props');
  return (
    <div className="hello-page">
      <aside className="page-title">{ 'Hello welcome' }</aside>
      <Link to="/demo" className="jump-href">Go demo page</Link>
      <Link to="/canvas" className="jump-href">Go canvas page</Link>
    </div>
  );
};

export default Hello;