import React from 'react';
//import ReactDOM from 'react-dom';

export default class FloorOne extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
      this.state = {
        startPoint : "",
        Color : ""
      };
    }
  
    onClick(e){
      if(e){
        
        if(e.target.id === 'path25') this.setState( {Color:"	#FFA07A",})
        alert(e.target.id);
        // console.log(this.State.Color)
      }
    }
    
    render() {
      return (
      <div className="game">
        <svg className = "buliding3"
        xmlns="http://www.w3.org/2000/svg"
        id="map"
        preserveAspectRatio="xMinYMin meet"
        version="1.1"
        viewBox="0 0 643.80249 182.10458"
        height="182.10458mm"
        width="643.80249mm">
       <g 
       transform="translate(240.30879,-67.198951)"
       id="layer1">
      <g 
       fill = "#f2f2f2" 
         transform="translate(-10.31873,18.520845)"
         id="g5245">
        <g 
         fill = "#ff6600"
           id="g4960"
           transform="translate(1.322917,-6.6145854)">
          <path
             id="path129"
             d="m -230.88048,70.277271 v 92.604169 l 43.65625,-1e-5 v -30.42708 l 168.010413,1.32292 -2e-6,42.33333 h -18.520833 v 7.9375 h 18.520833 v 52.91667 H 224.20285 v -50.27084 h 21.16667 -2.64584 v -23.81249 h 2.64584 -21.16667 v -2.64584 h 18.52083 V 141.71477 H 224.20285 V 112.6106 h 129.64583 v 7.9375 -2.64583 h 21.16667 v 46.30208 h 37.04166 V 68.954351 H 225.52577 V 55.725191 H 180.5466 V 162.88144 h -54.23958 v -7.9375 H 78.682013 v 7.9375 H 23.119514 V 57.048101 h -41.010417 v 13.22917 z" />
          <path
             id="path4956"
             d="M -32.442986,133.77727 V 176.1106" />
        </g>
        <path onClick={this.onClick} 
           d="m -228.23466,64.721003 h 42.33334 v 35.718747 h -42.33334 z"
           id="b1_1"
           data-info="<div>Storage Room 1</div><div>Storage Room of First Floor</div>">
          <title
             id="title894">Storage Room 1</title>
        </path>
        <path onClick={this.onClick} //fill = {this.state.Color}
           d="m -184.57841,64.721003 v 29.10417 h 26.45834 v -29.10417 z"
           id="b1_4">
          <title
             id="title892">Associate Dean Room</title>
        </path>
        <path onClick={this.onClick} //fill = {this.state.Color}
           d="m -156.79716,64.721003 v 29.10417 h 26.45833 v -29.10417 z"
           id="b1_6">
          <title
             id="title882">OD Room</title>
        </path>
        <path onClick={this.onClick} //fill = {this.state.Color}
           d="m -129.01591,64.721003 v 29.10417 h 34.395857 v -13.22917 h -21.166687 v -15.875 z"
           id="b1_7">
          <title
             id="title965">Storage Room 2</title>
        </path>
        <path onClick={this.onClick} //fill = {this.state.Color}
           d="m -114.46383,64.721003 v 14.55208 h 19.843777 v -14.55208 z"
           id="b1_8">
          <title
             id="title880">UPs Room</title>
        </path>
        <path onClick={this.onClick} //fill = {this.state.Color}
           d="m -93.297143,64.721003 v 14.55208 h 19.843753 v -14.55208 z"
           id="b1_10">
          <title
             id="title878">Server Room</title>
        </path>
        <path onClick={this.onClick} //fill = {this.state.Color}
           d="m -93.297143,80.596003 v 13.22917 h 19.843753 v -13.22917 h -19.843753"
           id="b1_9">
          <title
             id="title967">Storage Room 3</title>
        </path>
        <path onClick={this.onClick} 
           d="m -72.13048,64.721003 v 29.10417 h 41.010424 v -29.10417 z"
           id="b1_11">
          <title
             id="title876">iThink Room</title>
        </path>
        <path onClick={this.onClick} 
           d="m -228.49925,107.31894 v 11.90625 h 25.13542 v -11.90625 z"
           id="b1_2">
          <title
             id="title884">Toilet F1_01</title>
        </path>
        <path onClick={this.onClick} 
           d="m -89.328394,105.20224 v 19.84375 h 41.01042 v -19.84375 z"
           id="b1_12">
          <title
             id="title890">Conference Room 1</title>
        </path>
        <path onClick={this.onClick} 
           d="m -46.995057,105.20224 v 19.84375 h 27.78125 v -19.84375 h -27.78125"
           id="b1_13">
          <title
             id="title5247">Amazon Cafe'</title>
        </path>
        <path onClick={this.onClick} 
           d="m -180.0805,104.67307 v 19.84375 h 48.94791 v -19.84375 z"
           id="b1_5">
          <title
             id="title888">Conference Room 2</title>
        </path>
        <path onClick={this.onClick} 
           d="m -15.245067,51.491833 v 25.92917 h 38.364593 v -25.92917 h -38.364593"
           id="b1_11">
          <title
             id="title1055">Room 123</title>
        </path>
        <path onClick={this.onClick} 
           d="m -7.3075551,107.05434 v 49.21251 H 23.119526 V 107.05434 H -7.3075551"
           id="b1_16">
          <title
             id="title874">Toshiba Room</title>
        </path>
        <path onClick={this.onClick} 
           d="M -7.3075551,79.008503 V 105.46683 H 23.119526 V 79.008503 H -7.3075551"
           id="b1_15">
          <title
             id="title1053">Room 124</title>
        </path>
        <path onClick={this.onClick} 
           d="m -4.1325552,166.32102 v 10.58332 h 9.2604167 v -10.58332 h -9.2604167"
           id="b1_18">
          <title
             id="title971">Copy shop</title>
        </path>
        <path onClick={this.onClick} 
           d="m 10.419526,167.11475 v 62.1771 h 13.229167 v -13.22917 h 14.552072 v 13.22917 H 140.06533 v -63.5 H 97.732016 v 6.61457 H 80.534099 v -6.61457 H 10.419526 Z"
           id="b1_21">
          <title
             id="title870">Conference hall</title>
        </path>
        <path onClick={this.onClick} 
           d="m 24.97161,217.12102 v 11.90625 H 36.877849 V 217.12102 H 24.97161"
           id="b1_22">
          <title
             id="title872">Toilet F1_02</title>
        </path> 
        <path onClick={this.onClick} 
           d="m 141.38825,180.34392 v 34.39583 h 13.22916 v -34.39583 z"
           id="b1_23">
          <title
             id="title1001">Conference Room 116/3</title>
        </path>
        <path onClick={this.onClick} 
           d="m 155.14658,180.07936 v 34.39583 h 11.90625 v -34.39583 z"
           id="b1_24">
          <title
             id="title999">Hall of Frame</title>
        </path>
        <path onClick={this.onClick} 
           d="m 141.38825,216.06268 v 13.22917 h 26.45833 v -13.22917 h -26.45833"
           id="b1_25">
          <title
             id="title1003">Conference Room 116/2</title>
        </path>
        <path onClick={this.onClick} 
           d="m 169.1695,180.34392 v 48.94793 h 27.78125 v -13.22917 h -15.875 v -35.71876 z"
           id="b1_26">
          <title
             id="title1005">Engineering museum</title>
        </path>
        <path onClick={this.onClick} 
           d="m 211.50283,180.87309 v 11.90625 H 224.732 v -11.90625 z" 
           id="b1_28">
          <title
             id="title1011">Toilet(F) F1_04</title>
        </path>
        <path onClick={this.onClick} 
           d="m 211.50283,194.10227 v 21.16665 H 224.732 v -21.16665 z"
           id="b1_29">
          <title
             id="title1013">System Room</title>
        </path>
        <path onClick={this.onClick} 
           d="m 211.50283,216.06268 v 13.22917 H 224.732 v -13.22917 h -13.22917"
           id="b1_30">
          <desc
             id="desc1025">Male Toilet</desc>
          <title
             id="title1009">Toilet(M) F1_03</title>
        </path> 
        <path onClick={this.onClick} 
           d="m 235.8445,144.36059 v 7.9375 h 6.61458 v -7.9375 h -6.61458"
           id="b1_42">
          <title
             id="title1045">Elevator F1_03</title>
        </path>
        <path onClick={this.onClick} 
           d="m 235.8445,136.15851 v 7.9375 h 6.61458 v -7.9375 z"
           id="b1_42">
          <title
             id="title1043">Elevator F1_02</title>
        </path>
        <path onClick={this.onClick} 
           d="m 182.92783,121.871 v 34.39584 h 31.75 V 121.871 h -31.75"
           id="b1_31">
          <title
             id="title1015">Register Room</title>
        </path>
        <path onClick={this.onClick} 
           d="m 182.92783,107.31892 v 13.22917 h 31.75 v -13.22917 h -31.75"
           id="b1_32">
          <title
             id="title1029">Academic Affairs Director Room</title>
        </path>
        <path onClick={this.onClick} 
           d="m 182.92783,72.321785 v 33.674235 h 31.75 V 92.526328 h 10.58334 V 50.433525 h -10.58334 v 21.88826 h -31.75"
           id="b1_33">
          <title
             id="title1019">Deputy Dean and Secretary Room</title>
        </path>
        <path onClick={this.onClick} 
           d="m 182.92783,50.433496 v 21.166695 h 30.42709 V 50.433496 Z"
           id="b1_34">
          <title
             id="title1021">Dean Room</title>
        </path> 
        <path onClick={this.onClick} 
           d="M 226.58408,63.39808 V 92.766858 H 267.5945 V 63.39808 Z"
           id="b1_35">
          <title
             id="title1027">Human Resource and Public relations room</title>
        </path>
        <path onClick={this.onClick} 
           d="m 268.91742,63.39808 v 29.368778 h 41.01041 V 63.39808 Z"
           id="b1_36">
          <title
             id="title1033">Physical Resources Management Room</title>
        </path>
        <path onClick={this.onClick} 
           d="M 311.25075,63.39808 V 92.766858 H 354.907 V 63.39808 Z"
           id="b1_37">
          <title
             id="title1031">Financial and Supplies Room</title>
        </path>
        <path onClick={this.onClick} 
           d="m 362.8445,63.39808 v 9.26042 h 14.55208 V 63.39808 H 362.8445"
           id="b1_39">
          <title
             id="title1037">Toilet(Staff) F1_05</title>
        </path>
        <path onClick={this.onClick} 
           d="m 378.19033,63.39808 v 15.875 h 13.22917 v -15.875 h -13.22917"
           id="b1_40">
          <title
             id="title1041">Staff Room</title>
        </path>
        <path onClick={this.onClick} 
           d="m 392.47784,62.868913 v 29.10417 h -14.55209 v 64.822927 h 34.39584 V 62.868913 h -19.84375"
           id="b1_41">
          <title
             id="title1035">Office of Student Affairs</title>
        </path>
        <path onClick={this.onClick} 
           d="m -35.353393,170.28977 v 6.61457 h 6.614586 v -6.61457 z"
           id="b1_20">
          <title
             id="title969">Elevator F1_01</title>
        </path>
        <path onClick={this.onClick} 
           d="m -8.1013051,165.79185 v 14.55207 H 9.0966106 V 165.79185 H 6.4507775 V 177.6981 H -5.4554722 v -11.90625 z"
           id="b1_17">
          <title
             id="title973">Stair F1_01</title>
        </path>
        <path onClick={this.onClick} 
           d="m 183.72158,180.34392 v 34.39583 h 6.61458 l 5.29167,-6.61457 h -6.61458 V 186.9585 h 7.9375 v -6.61458 z"
           id="b1_27">
          <title
             id="title1007">Stair F1_02</title>
        </path>
        <path onClick={this.onClick} 
           d="m 356.22992,63.39808 v 11.90625 h 5.29166 V 63.39808 h -5.29166"
           id="b1_38">
          <title
             id="title1039">Stair F1_03</title>
        </path>
        <path onClick={this.onClick} 
           id="b1_3"
           d="m -228.49925,120.6951 v 34.77801 h 41.01042 v -48.15417 h -14.55209 v 13.37616 z">
          <title
             id="title963">MBE Room</title>
        </path>
        <path onClick={this.onClick} 
           id="b1_19"
           d="m -7.572167,185.37102 v 42.33334 H 8.302831 v -42.33334 z">
          <title
             id="title1051">Prayer room</title>
        </path>
      </g>
    </g>
     </svg>

      </div>
      );
    }
  }

