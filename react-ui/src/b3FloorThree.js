import React from 'react';
import {PinchView} from 'react-pinch-zoom-pan'

export default class FloorThree extends React.Component {
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
        viewBox="0 0 477.8375 129.91041"
        height="129.91042mm"
        width="477.83749mm">
        <g fill = "#f2f2f2" 
          transform="translate(83.287057,-151.72486)"
          id="layer1">
          <path fill = "#ff6600"
            id="path1453"
            d="m -83.154765,159.79465 v 66.14583 h 31.749999 V 191.54465 H 75.595233 v 44.97917 H 62.366066 v 7.9375 h 13.229167 v 37.04166 H 258.15774 v -37.04166 h 5.29166 v -18.52084 h -5.29166 v -2.64583 h 10.58333 V 211.3884 h -10.58333 v -19.84375 h 109.80208 v 22.48958 h 26.45833 V 159.79465 H 256.83482 v -7.9375 H 223.7619 v 74.08333 H 108.66815 V 151.85715 H 74.272316 v 7.9375 z"/>
          <path onClick = {this.onClick} 
            id="b3_322"
            d="m -83.15477,159.79465 v 23.8125 h 31.749999 v -23.8125 z"
             />
          <path onClick = {this.onClick} 
            id="b3_324"
            d="m -83.15477,199.48214 v 26.45834 h 31.749999 v -26.45834 z"
             />
          <path onClick = {this.onClick} 
            id="b3_323"
            d="m -83.15477,190.2217 v 9.26044 h 10.583333 v -3.0868 h 10.583333 v -6.17364 z"
             />
          <path onClick = {this.onClick} 
            id="b3_321"
            d="m -51.404771,159.79465 v 23.8125 h 21.166667 v -23.8125 z"
             />
          <path onClick = {this.onClick} 
            id="b3_320"
            d="m -30.238104,159.79465 v 23.8125 H 1.5118952 v -23.8125 z"
             />
          <path onClick = {this.onClick} 
            id="b3_319"
            d="m 1.5118952,159.79465 v 23.8125 H 33.261895 v -23.8125 z"
             />
          <path onClick = {this.onClick} 
            id="b3_318"
            d="m 33.261895,159.79465 v 23.8125 h 31.749999 v -23.8125 z"
             />
          <path onClick = {this.onClick} 
            id="b3_317"
            d="m 74.272313,151.85715 v 22.48958 h 34.395837 v -22.48958 z"
             />
          <path onClick = {this.onClick} 
            id="b3_315"
            d="m 83.536181,174.35018 v 51.5903 h 25.075129 v -51.5903 z"
             />
          <path onClick = {this.onClick} 
            id="b3_02"
            d="m 65.011894,159.79465 v 11.90625 h 9.260417 v -11.90625 z"
             />
          <path onClick = {this.onClick} 
            id="b3_01"
            d="m -83.15477,183.60714 v 6.61459 h 13.229166 v -6.61459 z"
             />
          <path onClick = {this.onClick} 
            id="b3_04"
            d="m 83.532728,235.2009 v 11.1125 h 15.119051 v -11.1125 h -4.535716 v 6.94531 h -6.047621 v -6.94531 z"
             />
          <path onClick = {this.onClick} 
            id="b3_03"
            d="m 63.688978,237.84673 v 5.29167 h 5.291666 v -5.29167 z"
             />
          <path onClick = {this.onClick} 
            id="b3_314"
            d="m 98.084813,235.2009 v 10.89461 H 75.59523 v 35.40747 h 95.25 v -12.25643 h 5.29166 v 9.53279 h 1.32292 v -2.72365 l 3.96875,1.36182 v 4.08547 h 52.91667 v -8.17095 H 192.01189 V 235.2009 Z"
             />
          <path onClick = {this.onClick} 
            id="b3_313"
            d="m 192.27647,245.78423 v 27.51667 h 30.42708 v -27.51667 z"
             />
          <path onClick = {this.onClick} 
            id="b3_06"
            d="m 233.55148,245.78423 h -10.58333 v 27.61416 h 10.58333 v -5.81351 h -6.61458 v -15.98713 h 6.61458 z"
             />
          <path onClick = {this.onClick} 
            id="b3_310"
            d="m 245.9869,244.46132 v 9.26041 h 11.90625 v -9.26041 z"
             />
          <path onClick = {this.onClick} 
            id="b3_311"
            d="m 245.9869,253.72173 v 17.19792 h 11.90625 v -17.19792 z"
             />
          <path onClick = {this.onClick} 
            id="b3_312"
            d="m 245.9869,270.91965 v 10.58333 h 11.90625 v -10.58333 z"
             />
          <path onClick = {this.onClick} 
            id="b3_309"
            d="m 223.76189,191.54465 v 34.39583 h 25.13542 v -34.39583 z"
             />
          <path onClick = {this.onClick} 
            id="b3_308"
            d="m 223.76189,173.02382 v 18.52083 h 25.13542 v -18.52083 z"
             />
          <path onClick = {this.onClick} 
            id="b3_307"
            d="m 223.76189,151.85715 v 21.16667 h 33.07292 v -21.16667 z"
             />
          <path onClick = {this.onClick} 
            id="b3_306"
            d="m 256.83481,159.79465 v 25.13542 h 30.42708 v -25.13542 z"
             />
          <path onClick = {this.onClick} 
            id="b3_305"
            d="m 287.2619,159.79465 v 25.13542 h 30.42709 v -25.13542 z"
             />
          <path onClick = {this.onClick} 
            id="b3_304"
            d="m 317.68898,159.79465 v 25.13542 h 30.42709 v -25.13542 z"
             />
          <path onClick = {this.onClick} 
            id="b3_08"
            d="m 348.11607,170.37798 v -10.58333 h 15.875 v 10.58333 h -5.29167 v -5.29166 h -5.29167 v 5.29166 z"
             />
          <path onClick = {this.onClick} 
            id="b3_303"
            d="m 363.99106,159.79465 v 14.55208 h 17.19791 v -14.55208 z"
             />
          <path onClick = {this.onClick} 
            id="b3_302"
            d="m 381.18897,159.79465 v 21.16667 h 13.22917 v -21.16667 z"
             />
          <path onClick = {this.onClick} 
            id="b3_301"
            d="m 394.41814,180.96132 h -26.45833 v 33.07291 h 26.45833 z"
             />
          <path onClick = {this.onClick} 
            id="b3_07"
            d="m 263.44939,212.71131 v 8.99583 h 3.96875 v -8.99583 z"
             />
          <path onClick = {this.onClick} 
            id="b3_05"
            d="m 170.84523,281.50298 v -11.90625 h 5.29166 v 9.26042 h 1.32292 v -2.64584 l 3.96875,1.32292 v 3.96875 z"
             />
        </g>
      </svg>


      </PinchView>
      );
    }
  }