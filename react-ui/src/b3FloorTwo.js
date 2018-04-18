import React from 'react';
import {PinchView} from 'react-pinch-zoom-pan'

class FloorTwo extends React.Component{
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        startPoint: '',
        endPoint: '',
        Color :''
      };
    }

    handleChange(event) {
      this.setState({[event.target.id]: event.target.value});
  }

    onClick = (e) => {
      //console.log(e.target.id);
      this.props.callbackSelectPoint(e.target.id);
    };

   render(){
     return(
      <PinchView debug backgroundColor='#ddd' maxScale={4} containerRatio={40}>
    <svg
       xmlns="http://www.w3.org/2000/svg"
       id="map"
       preserveAspectRatio="xMinYMin meet"
       version="1.1"
       viewBox="0 0 479.1604 140.49374"
       height="140.49374mm"
       width="479.1604mm">
      <g fill = "#f2f2f2" 
         transform="translate(289.28408,-74.617723)"
         id="layer1">
        <path  fill = "#ff6600"
           id="path828"
           d="m -289.15179,85.333355 v 68.791655 h 31.75 v -37.04167 h 127 v 50.27084 h -13.22917 v 7.9375 h 13.22917 v 39.6875 H 52.160706 v -39.6875 h 5.291667 v -21.16667 h -5.291667 v -2.64583 H 62.744039 V 138.25001 H 52.160706 V 117.08334 H 163.2857 v 26.45834 h 26.45834 V 82.687515 H 52.160706 v -7.9375 H 17.764873 v 79.374995 h -39.687499 v -26.45833 h -34.395833 v 26.45833 H -96.005958 V 74.750015 h -34.395832 v 7.9375 h -158.75 z" />
    <path onClick = {this.onClick} 
       id="b2_222"
       d="m -289.15179,82.687496 v 23.812494 h 31.75 V 82.687496 Z"
        />
    <path onClick = {this.onClick}
       id="b2_224"
       d="M -289.15179,127.66666 V 154.125 h 31.75 v -26.45834 h -31.75"
        />
    <path onClick = {this.onClick}
       id="b2_221"
       d="m -257.40179,82.687496 v 23.812494 h 21.16667 V 82.687496 c 0,0 -21.16667,0 -21.16667,0 z"
       />
    <path onClick = {this.onClick}
       id="b2_220"
       d="M -236.23512,82.687506 V 106.5 h 31.75 V 82.687506 Z"
      />
    <path onClick = {this.onClick}
       id="b2_219"
       d="M -204.48512,82.687506 V 106.5 h 31.75 V 82.687506 Z"
        />
    <path onClick = {this.onClick}
       id="b2_218"
       d="m -172.73512,82.687496 v 23.812494 h 31.75 V 82.687496 Z"
        />
    <path onClick = {this.onClick}
       id="b2_215"
       d="m -130.40179,74.750011 v 79.374999 h 34.395833 V 74.750011 Z"
        />
    <path onClick = {this.onClick}
       id="b2_01"
       d="m -142.57264,168.94167 v 4.7625 h 4.23335 v -4.7625 z"
        />
    <path onClick = {this.onClick}
       id="b2_03"
       d="m -118.23096,163.38541 h -4.35323 v 11.90625 h 15.96183 v -11.90625 h -4.35323 v 7.9375 h -7.25537 z"
        />
    <path onClick = {this.onClick}
       id="b2_209"
       d="m 17.764872,117.08334 v 37.04167 h 26.458333 v -37.04167 z"
        />
    <path onClick = {this.onClick}
       id="b2_206"
       d="m 52.160705,82.68751 v 26.45833 H 85.233628 V 82.68751 Z"
        />
    <path onClick = {this.onClick}
       id="b2_205"
       d="M 85.233628,82.689895 V 109.14345 H 116.98363 V 82.689895 Z"
        />
    <path onClick = {this.onClick}
       id="b2_204"
       d="m 116.98363,82.68751 v 26.45833 H 147.4107 V 82.68751 Z"
       />
    <path onClick = {this.onClick}
       id="b2_207"
       d="m 17.764877,74.749996 v 23.8125 H 52.16071 v -23.8125 z"
       />
    <path onClick = {this.onClick}
       id="b2_208"
       d="m 17.764877,101.20834 v 15.875 H 44.22321 V 98.562511 H 17.764877 Z"
        />
    <path onClick = {this.onClick}
       id="b2_07"
       d="M 147.4107,93.270844 V 82.68751 h 15.875 v 10.583334 h -5.29166 v -5.291667 h -5.29167 v 5.291667 z"
        />
    <path onClick = {this.onClick}
       id="b2_203"
       d="m 163.2857,82.68751 v 15.875 h 13.22917 v -15.875 z"
        />
    <path onClick = {this.onClick}
       id="b2_202"
       d="m 176.51487,82.68751 v 23.8125 h 13.22917 v -23.8125 z"
        />
    <path onClick = {this.onClick}
       id="b2_201"
       d="M 189.74404,106.50001 H 163.2857 v 37.04167 h 26.45834 z"
       />
    <path onClick = {this.onClick}
       id="b2_06"
       d="m 56.129461,139.57291 v 10.8479 h 5.291667 v -10.8479 z"
        />
    <path onClick = {this.onClick}
       id="b2_210"
       d="m 40.254455,176.61459 v 9.26041 h 11.90625 v -9.26041 z"
        />
    <path onClick = {this.onClick}
       id="b2_211"
       d="m 40.25446,185.87501 v 9.2604 h 11.90625 v -9.2604 z"
        />
    <path onClick = {this.onClick}
       id="b2_05"
       d="m 40.25446,195.13543 v 10.58332 h 11.90625 v -10.58332 z"
        />
    <path onClick = {this.onClick}
       id="b2_212"
       d="m 40.254461,205.71875 v 9.26041 h 11.90625 v -9.26041 z"
       />
    <path onClick = {this.onClick}
       id="b2_213"
       d="m -12.662211,176.61459 v 38.36459 h 31.75 v -38.36459 z"
        />
    <path onClick = {this.onClick}
       id="b2_04"
       d="M 29.671122,176.61459 H 19.087789 v 29.76561 h 10.583333 v -5.95312 h -5.291666 v -17.85936 h 5.291666 z"
        />
    <path onClick = {this.onClick}
       id="b2_223"
       d="m -289.15179,127.66666 h 11.24479 v -2.57023 h 11.24479 v -6.42558 h -22.48958 z"
        />
    <g
       transform="matrix(1.5434783,0,0,1.3448274,8.9235341,-74.130719)"
       id="g940">
      <title
         id="title1516">
Floating floor Conference Hall</title>
      <path
         d="m -13.985127,176.61459 v 38.36459 h -60.854166 v -38.36459 l 60.854166,38.36459 h -60.854166 v -38.36459 z"
         id="path931" />
      <path
         d="m -74.839293,214.97918 60.854166,-38.36459"
         id="path933" />
    </g>
    <path onClick = {this.onClick}
       id="b2_214"
       d="m -106.58929,175.29166 h -15.875 v 39.6875 h 15.875 z" />
    <path onClick = {this.onClick}
       id="b2_02"
       d="m -130.40179,175.29166 v 39.6875 h 7.9375 v -39.6875 z"/>
  </g>
    </svg>

      </PinchView>
     );
   }
    
  }

  export default FloorTwo;