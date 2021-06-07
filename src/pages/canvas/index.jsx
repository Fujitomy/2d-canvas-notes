
import React from "react";
import './index.scss';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessRightVisible: false
    }
  }
  componentDidMount() {
    this.query = '';
  }
  render() {
    const {accessRightVisible} = this.state;
    return (
      <aside>
        <canvas id='canvas2d' style={{width:'300px',height: '400px'}}>111</canvas>
        <div className='canvas-title'>Hello,canvas</div>
      </aside>
    )
  }
}

export default Canvas;
