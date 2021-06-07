import React from 'react';
import { Link } from 'react-router-dom';
import { DatePicker,Button } from 'antd-mobile';
import './index.scss';
const Hello = (props) => {
  console.log(props,'props');
  return (
    <div className='hello-page'>
      <aside className='page-title'>{ 'Hello world page' }</aside>
      <Button type='primary' className='page-btn'>
        <Link to='/main/demo'>Go Hello Page</Link>
      </Button>
    </div>
  )
}

export default Hello;