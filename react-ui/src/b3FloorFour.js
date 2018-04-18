import React from 'react';
import {PinchView} from 'react-pinch-zoom-pan'

export default class FloorFour extends React.Component {
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
    
    render() {
      return (
        <PinchView debug backgroundColor='#ddd' maxScale={4} containerRatio={40}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="map"
          preserveAspectRatio="xMinYMin meet"
          version="1.1"
          viewBox="0 0 484.45209 133.87916"
          height="133.87917mm"
          width="484.45209mm">
          <g fill = "#f2f2f2" 
            transform="translate(180.42694,-150.40196)"
            id="layer1">
            <path fill = "#ff6600"
              id="path828"
              d="m -180.29465,225.94049 h 37.04167 V 194.1905 h 126.999993 v 47.62499 h -15.875 v 5.29167 h 15.875 v 37.04167 H 164.9866 v -35.71875 h 6.61458 v -21.16667 h -6.61458 v -2.64583 h 11.90625 V 212.71133 H 164.9866 v -19.84375 h 111.125 v 22.48958 h 27.78125 v -55.5625 H 164.9866 v -9.26041 h -34.39584 v 76.72916 H 15.497013 v -75.40625 h -34.395834 v 7.9375 H -180.29465 Z"/>
            <path onClick = {this.onClick} 
              id="b4_422"
              d="m -180.29465,159.79465 v 23.28333 h 33.07291 v -23.28333 z"
               />
            <path onClick = {this.onClick} 
              id="b4_424"
              d="m -180.29465,202.12797 v 23.81251 h 37.04166 v -23.81251 z"
               />
            <path onClick = {this.onClick} 
              id="b4_423"
              d="m -180.29465,191.54465 v 10.58333 h 11.90625 v -3.0238 h 11.90625 v -7.55953 z"
               />
            <path onClick = {this.onClick} 
              id="b4_421"
              d="m -147.22174,159.79465 v 23.28333 h 19.84375 v -23.28333 z"
              />
            <path onClick = {this.onClick} 
              id="b4_420"
              d="m -127.37799,159.79465 v 23.28333 h 31.750002 v -23.28333 z"
               />
            <path onClick = {this.onClick} 
              id="b4_419"
              d="m -95.627986,159.79465 v 23.28333 h 31.749998 v -23.28333 z"
               />
            <path onClick = {this.onClick} 
              id="b4_418"
              d="m -63.877986,159.79465 v 23.28333 h 35.71875 v -23.28333 z"
               />
            <path onClick = {this.onClick} 
              id="b4_417"
              d="m -18.898819,151.85715 v 23.8125 h 34.395833 v -23.8125 z"
               />
            <path onClick = {this.onClick} 
              id="b4_02"
              d="m -28.159235,159.79465 v 12.7 h 9.260416 v -12.7 z"
               />
            <path onClick = {this.onClick} 
              id="b4_416"
              d="m -11.225905,175.66965 v 22.48958 h 26.722919 v -22.48958 z"
               />
            <path onClick = {this.onClick} 
              id="b4_415"
              d="M -11.225905,198.15924 V 227.2634 H 15.497014 V 198.15924 Z"
               />
            <path onClick = {this.onClick} 
              id="b4_03"
              d="m -31.59882,242.60925 v 3.96875 h 5.291667 v -3.96875 z"
               />
            <path onClick = {this.onClick} 
              id="b4_04"
              d="m -10.318756,236.52381 v 11.00667 H 5.1782609 V 236.52381 H 0.52915503 v 7.86191 H -5.6696523 v -7.86191 z"
               />
            <path onClick = {this.onClick} 
              id="b4_06"
              d="m 144.61371,246.31339 h -12.17089 v 28.57501 h 12.17089 v -7.14375 h -6.08545 v -15.71626 h 6.08545 v -5.715"
              />
            <path onClick = {this.onClick} 
              id="b4_05"
              d="m 80.319931,276.49795 v 7.45243 h 11.112498 v -14.61825 h -5.263815 v 10.31876 h -0.877303 v -5.15938 z"
              />
            <path onClick = {this.onClick} 
              id="b4_410"
              d="m 152.55119,248.43006 v 11.90625 h 12.43541 v -11.90625 z"
               />
            <path onClick = {this.onClick} 
              id="b4_411"
              d="m 152.55119,260.33632 v 12.17082 h 12.43541 v -12.17082 z"
               />
            <path onClick = {this.onClick} 
              id="b4_412"
              d="m 152.55119,272.24256 v 11.90625 h 12.43541 v -11.90625 z"
              />
            <path onClick = {this.onClick} 
              id="b4_409"
              d="m 130.59077,182.28423 -1e-5,44.97917 h 26.45834 l 1e-5,-44.97917 z"
               />
            <path onClick = {this.onClick} 
              id="b4_408"
              d="m 130.59076,150.53423 v 31.75 h 17.19793 v -31.75 z"
               />
            <path onClick = {this.onClick} 
              id="b4_407"
              d="m 147.78868,150.53423 v 25.13542 h 17.19792 v -25.13542 z"
              />
            <path onClick = {this.onClick} 
              id="b4_406"
              d="m 164.9866,159.79465 v 24.60625 h 21.16666 v -24.60625 z"
              />
            <path onClick = {this.onClick} 
              id="b4_405"
              d="m 186.15326,159.79465 v 24.60625 h 21.16667 v -24.60625 z"
              />
            <path onClick = {this.onClick} 
              id="b4_404"
              d="m 207.31993,159.79465 v 24.60625 h 31.75 v -24.60625 z"
              />
            <path onClick = {this.onClick} 
              id="b4_403"
              d="m 239.06993,159.79465 v 24.60625 h 22.48958 v -24.60625 z"
              />
            <path onClick = {this.onClick} 
              id="b4_08"
              d="m 261.55951,159.79465 v 9.26042 h 3.96875 v -5.29167 h 6.61459 v 5.29167 h 3.96875 v -9.26042 z"
              />
            <path onClick = {this.onClick} 
              id="b4_402"
              d="m 276.1116,159.79465 v 22.48959 h 27.78125 v -22.48959 z"
              />
            <path onClick = {this.onClick} 
              id="b4_401"
              d="m 276.11439,182.28702 v 33.01396 h 27.77567 v -33.01396 z"
               />
            <path onClick = {this.onClick} 
              id="b4_07"
              d="m 171.60119,214.03423 v 9.525 h 3.96875 v -9.525 z"
              />
            <path onClick = {this.onClick} 
              id="b4_314"
              d="m 5.102668,236.52381 v 10.88572 h -21.355654 v 36.73928 h 96.100443 v -14.96786 h 12.012561 v 14.96786 H 133.2366 v -46.26428 -1.36072 z"
              />
            <path onClick = {this.onClick} 
              id="b4_01"
              d="m -180.29465,183.07798 v 8.46667 h 18.78541 v -8.46667 z"
              />
          </g>
      </svg>


      </PinchView>
      );
    }
  }