
import React from 'react';

import './index.scss';
// import { ImagePicker } from 'antd-mobile';
// import { Module } from "@utils/armakeup";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessRightVisible: false,
    };
  }

  componentDidMount() {
    this.query = '';
    console.log(window.Module, '---------Module----');

    // eslint-disable-next-line no-underscore-dangle
    // console.log(typeof window.Module._emLandmarkDetect, 'typeof  Module._emLandmarkDetect');
    const Module = window.Module;
    const landmarkCxt = Module._emLandmarkContextInit(127);
    
    
    console.log(landmarkCxt,'------landmarkCxt');
    // eslint-disable-next-line no-underscore-dangle
    // this.detectFn = window.Module._emLandmarkDetect;
    // const detectParams = [
    //   landmarkCxt, // 检测库实例上下文
    //   0, // 图片内存访问指针
    //   300,  // 检测帧宽度
    //   300, // 检测帧高度
    //   0, // 图片帧的拍摄朝向
    //   4, // 1=rgb 4=rgba
    //   0 // 关键点访问指针
    // ];
    // this.detectFn(detectParams)

  }

  componentDidUpdate(){
    debugger
    console.log(window.Module, '---------Module-2---');
  }

  render() {
    return (
      <aside>
        <canvas id="canvas2d" style={{width: '300px', height: '400px'}}>111</canvas>
        <div className="canvas-title">Hello,canvas</div>
      </aside>
    );
  }
}

export default Canvas;
