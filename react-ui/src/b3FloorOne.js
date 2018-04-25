import React from 'react';
import {PinchView} from 'react-pinch-zoom-pan'

//import ReactDOM from 'react-dom';

export default class FloorOne extends React.Component {
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
          viewBox="0 0 643.80249 192.25542"
          height="192.25542mm"
          width="643.80249mm">
          <g  fill = "#f2f2f2"
            transform="translate(240.30879,-67.198951)"
            id="layer1">
            <g   fill = "#ff6600"
              transform="translate(-9.260417,11.906263)"
              id="g4960">
              <path
                ////style="fill:#f2f2f2;stroke:#000000;stroke-width:0.86500001;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                d="m -230.88048,70.277271 v 92.604169 l 43.65625,-1e-5 v -30.42708 l 168.010413,1.32292 -2e-6,42.33333 h -18.520833 v 7.9375 h 18.520833 v 52.91667 H 224.20285 v -50.27084 h 21.16667 -2.64584 v -23.81249 h 2.64584 -21.16667 v -2.64584 h 18.52083 V 141.71477 H 224.20285 V 112.6106 h 129.64583 v 7.9375 -2.64583 h 21.16667 v 46.30208 h 37.04166 V 68.954351 H 225.52577 V 55.725191 H 180.5466 V 162.88144 h -54.23958 v -7.9375 H 78.682013 v 7.9375 H 23.119514 V 57.048101 h -41.010417 v 13.22917 z"
                id="path129" />
              <path
                ////style="fill:none;stroke:#000000;stroke-width:0.76499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                d="M -32.442986,133.77727 V 176.1106"
                id="path4956" />
            </g>
            <path onClick = {this.onClick}
              id="b1_7"
              d="m -139.33464,83.241848 v 29.589282 h 34.39586 V 99.381453 h -21.16669 V 83.241848 Z"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.26719937;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.9391933;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title965">Storage Room 2</title>
            </path>
            <path  onClick = {this.onClick}
              id="b1_8"
              d="m -125.04715,83.241848 v 14.816688 h 20.10837 V 83.241848 Z"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.26917523;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.96092769;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title880">UPs Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_10"
              d="m -103.61587,83.241848 v 14.816688 h 19.84375 V 83.241848 Z"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.26739845;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.94138315;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title878">Server Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_9"
              d="m -103.61587,99.116848 v 13.493772 h 19.84375 V 99.116848 h -19.84375"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.26763704;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.94400772;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title967">Storage Room 3</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_11"
              d="m -82.44921,83.241848 v 29.368772 h 41.010424 V 83.241848 Z"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.26620188;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.92822097;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title876">iThink Room</title>
            </path>
            <g
              transform="translate(-10.31873,18.520845)"
              id="g1337" />
            <path onClick = {this.onClick}
              id="b1_14"
              d="M -25.563797,70.012678 V 95.412703 H 12.800796 V 70.012678 h -38.364593"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.24507852;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.69586372;stroke-dashoffset:0;stroke-opacity:1" 
              />
            <path onClick = {this.onClick}
              id="b1_16"
              d="M -17.890897,125.57519 V 174.7877 H 12.800796 V 125.57519 H -17.890897"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.27054933;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.97604247;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title874">Toshiba Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_15"
              d="M -17.890897,97.529348 V 123.98767 H 12.800796 V 97.529348 h -30.691693"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.26614979;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.92764787;stroke-dashoffset:0;stroke-opacity:1" 
              />
            <path onClick = {this.onClick}
              id="b1_18"
              d="m -14.451285,184.04811 v 11.37707 h 9.2604165 v -11.37707 h -9.2604165"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.2747578;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 3.02233586;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title971">Copy shop</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_21"
              d="M 0.100796,185.37654 V 247.8127 H 13.329963 V 234.52841 H 27.882035 V 247.8127 H 129.7466 V 184.04811 H 87.413286 v 6.64213 H 70.215369 v -6.64213 H 0.100796 Z"
             // //style="fill:#ff6600;stroke:#000000;stroke-width:0.26555148;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.92106645;stroke-dashoffset:0;stroke-opacity:1"
             >
              <title
                id="title870">Conference hall</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_22"
              d="m 14.65288,235.64186 v 11.90625 H 26.559119 V 235.64186 H 14.65288"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.91500003;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter995)"
              >
              <title
                id="title872">Toilet F1_02</title>
            </path>
            <path onClick = {this.onClick} 
              id="b1_23"
              d="m 131.06952,198.60021 v 34.66039 h 13.22916 v -34.66039 z"
              ////style="fill:#ff6600;stroke:#000000;stroke-width:0.26601717;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.92618919;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title onClick = {this.onClick}
                id="title1001">Conference Room 116/3</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_24"
              d="m 144.82785,198.60021 v 34.39582 h 11.90625 v -34.39582 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.91500003;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title999">Hall of Frame</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_25"
              d="m 131.06952,234.58352 v 13.22918 h 26.45833 v -13.22918 h -26.45833"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.91500003;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1003">Conference Room 116/2</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_26"
              d="m 158.85077,198.60021 v 49.21249 h 27.78125 v -13.30067 h -15.875 v -35.91182 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26571518;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.92286715;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1005">
        Engineering museum</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_28"
              d="m 201.1841,199.39393 v 11.90625 h 13.22917 v -11.90625 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.91500003;stroke-dashoffset:0;stroke-opacity:1"
              >
              <desc
                id="desc1023">Female Toilet</desc>
              <title
                id="title1011">Toilet(F) F1_04</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_29"
              d="m 201.1841,212.62312 v 21.16665 h 13.22917 v -21.16665 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.91500003;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1013">System Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_30"
              d="m 201.1841,234.58352 v 13.22918 h 13.22917 V 234.58352 H 201.1841"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.91500003;stroke-dashoffset:0;stroke-opacity:1"
              >
              <desc
                id="desc1025">Male Toilet</desc>
              <title
                id="title1009">Toilet(M) F1_03</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_42"
              d="m 222.87994,154.15019 v 16.66876 h 9.26041 v -16.66876 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.45438045;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 4.99818533;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1043">Elevator F1_02</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_31"
              d="m 172.6091,140.39184 v 34.39584 h 31.75 v -34.39584 h -31.75"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.91500003;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1015">Register Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_32"
              d="m 172.6091,125.83977 v 13.22916 h 31.75 v -13.22916 h -31.75"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.91500003;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1029">Academic Affairs Director Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_33"
              d="m 172.6091,91.371797 v 33.674243 h 31.75 v -13.4697 h 10.58334 V 69.483537 H 204.3591 v 21.88826 h -31.75"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.29896021;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 3.28856267;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1019">Deputy Dean and Secretary Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_34"
              d="m 172.6091,68.954341 v 21.166695 h 30.42709 V 68.954341 Z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.23131111;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.54442235;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1021">Dean Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_35"
              d="M 216.26535,81.918925 V 111.2877 h 41.01042 V 81.918925 Z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.24971953;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.74691507;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1027">Human Resource and Public relations room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_36"
              d="M 258.59869,81.918925 V 111.2877 H 299.6091 V 81.918925 Z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.24971953;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.74691507;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1033">Physical Resources Management Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_37"
              d="M 300.93202,81.918925 V 111.2877 h 43.65625 V 81.918925 Z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.24971953;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.74691507;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1031">Financial and Supplies Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_39"
              d="m 353.05494,81.918925 v 6.879195 h 11.90625 v -6.879195 h -11.90625"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.20659712;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.27256848;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1037">Toilet(Staff) F1_05</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_40"
              d="m 365.75494,81.918925 v 18.785445 h 15.34583 V 81.918925 h -15.34583"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.31047645;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 3.41524121;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1041">Staff Room</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_41"
              d="m 382.61704,81.389758 v 29.104172 h -14.21627 v 64.82293 h 33.60209 V 81.389758 h -19.38582"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26192445;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.88116912;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1035">Office of Student Affairs</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_20"
              d="m -45.672123,188.81062 v 6.61456 h 11.906226 v -6.61456 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.35553434;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 3.9108782;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title969">Elevator F1_01</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_17"
              d="m -18.420035,184.04811 v 14.81665 h 17.1979156 v -14.81665 h -2.6458331 v 12.12274 H -15.774202 v -12.12273 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26739815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.94137988;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title973">Stair F1_01</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_27"
              d="m 173.40285,198.65104 v 34.6604 l 6.87916,-0.0509 5.50334,-6.70612 -6.87916,0.0509 v -21.32948 l 8.255,-0.061 v -6.66546 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.27128536;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.98413911;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1007">Stair F1_02</title>
            </path>
            <path onClick = {this.onClick}
              id="b1_38"
              d="m 345.91119,81.918925 v 12.170861 h 6.35 V 81.918925 h -6.35"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.29350123;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 3.22851356;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title1039">Stair F1_03</title>
            </path>
            <path onClick = {this.onClick}
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.27793196px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.02811243"
              d="M -17.890897,203.89186 V 246.2252 H -2.015899 V 203.89186 Z"
              id="b1_19">
              <title
                id="title1051">
        Prayer room</title>
            </path>
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.77367973;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_1tof1_1"
              width="1.3229166"
              height="5.2916694"
              x="-220.29713"
              y="112.61062" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_2tof1_1"
              width="1.3229166"
              height="6.614583"
              x="-220.29713"
              y="119.2252" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_3tof1_2"
              width="1.3229166"
              height="6.614583"
              x="-201.77632"
              y="119.2252" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.96709919;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_1tof1_2"
              width="19.843742"
              height="1.3229166"
              x="-220.29713"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.99881583;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_2tof1_3"
              width="21.16666"
              height="1.3229166"
              x="-201.77631"
              y="117.90229" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.77367973;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_4tof1_3"
              width="1.3229166"
              height="5.2916698"
              x="-181.93257"
              y="112.61061" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.99881601;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_3tof1_4"
              width="21.166668"
              height="1.3229166"
              x="-181.93256"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.67002636;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_5tof1_4"
              width="1.3229166"
              height="3.9687533"
              x="-162.08882"
              y="119.2252" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.77367973;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_6tof1_4"
              width="1.3229166"
              height="5.2916698"
              x="-162.08881"
              y="112.61062" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.90032047;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_4tof1_5"
              width="17.197914"
              height="1.3229166"
              x="-162.08881"
              y="117.90229" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.90032047;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_5tof1_6"
              width="17.197914"
              height="1.3229166"
              x="-146.21381"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.90032059;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_6tof1_7"
              width="17.197916"
              height="1.3229166"
              x="-130.33881"
              y="117.90229" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.77367973;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_7tof1_7"
              width="1.3229166"
              height="5.2916698"
              x="-114.46381"
              y="112.61061" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.90032047;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_7tof1_8"
              width="17.197914"
              height="1.3229166"
              x="-114.46381"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.77367973;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_9tof1_8"
              width="1.3229166"
              height="5.2916698"
              x="-98.588814"
              y="112.61061" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.74911189;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_8tof1_9"
              width="11.906246"
              height="1.3229166"
              x="-98.588814"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.78963345;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_9tof1_10"
              width="13.229171"
              height="1.3229166"
              x="-88.005486"
              y="117.90229" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.67002577;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_12tof1_10"
              width="1.3229166"
              height="3.9687505"
              x="-76.099228"
              y="119.2252" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.74911195;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_10tof1_11"
              width="11.90625"
              height="1.3229166"
              x="-76.099236"
              y="117.90229" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.7062695;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_11tof1_12"
              width="10.583332"
              height="1.3229166"
              x="-65.5159"
              y="117.90229" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.96709949;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_12tof1_13"
              width="19.843748"
              height="1.3229166"
              x="-56.255478"
              y="117.90229" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.77367973;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_11tof1_12"
              width="1.3229166"
              height="5.2916703"
              x="-56.255482"
              y="112.61062" />
            <rect fill = "#000000"
              //style="fill:#ff5555;stroke-width:0.82817453;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_13tof1_14"
              width="14.552083"
              height="1.3229166"
              x="-37.734646"
              y="117.90229" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.92472404;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_14tof1_15"
              width="1.3229166"
              height="10.583336"
              x="-24.50548"
              y="108.64187" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.77367985;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_15tof1_15"
              width="5.2916713"
              height="1.3229166"
              x="-23.182564"
              y="108.64187" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:1.43444085;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_14tof1_15"
              width="1.3229166"
              height="14.552096"
              x="-24.505476"
              y="95.412697" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_14tof1_16"
              width="1.3229166"
              height="15.875"
              x="-24.505476"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_16tof1_17"
              width="1.3229166"
              height="13.229166"
              x="-24.505476"
              y="132.45438" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_17tof1_18"
              width="1.3229166"
              height="15.875"
              x="-24.505476"
              y="144.36061" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_16tof1_18"
              width="5.2916665"
              height="1.3229166"
              x="-23.18256"
              y="158.9127" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_18tof1_19"
              width="1.3229166"
              height="21.166666"
              x="-24.505476"
              y="158.9127" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_18tof1_22"
              width="11.90625"
              height="1.3229166"
              x="-35.088814"
              y="158.91269" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.58765167;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_13tof1_22"
              width="1.3229166"
              height="15.87499"
              x="-35.08881"
              y="144.36063" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.80083436;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_19tof1_23"
              width="7.9374952"
              height="1.3229138"
              x="-24.505476"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_19tof1_20"
              width="1.3229166"
              height="14.552083"
              x="-24.505476"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.70626968;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_20tof1_20"
              width="10.583337"
              height="1.3229166"
              x="-33.765896"
              y="191.98561" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_20tof1_21"
              width="1.3229166"
              height="30.427082"
              x="-24.505476"
              y="191.98561" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_19tof1_21"
              width="6.614583"
              height="1.3229166"
              x="-24.505476"
              y="221.08978" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_21too1_1"
              width="1.3229166"
              height="38.364582"
              x="-24.505476"
              y="221.08978" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="o1_1too1_2"
              width="46.302082"
              height="1.3229166"
              x="-24.505476"
              y="258.13144" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_22too1_3"
              width="1.3229166"
              height="11.90625"
              x="20.47369"
              y="247.54811" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_17tof1_23"
              width="1.3229166"
              height="3.96875"
              x="-17.890892"
              y="180.07936" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_23tof1_23-2"
              width="9.260417"
              height="1.3229166"
              x="-17.890892"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_18tof1_23-2"
              width="1.3229166"
              height="5.2916665"
              x="-9.953393"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_23-2tof1_24"
              width="13.229166"
              height="1.3229166"
              x="-9.953393"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_24tof1_25"
              width="18.520834"
              height="1.3229166"
              x="1.9528574"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_25tof1_26"
              width="19.84375"
              height="1.3229166"
              x="19.150774"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_26tof1_27"
              width="21.166666"
              height="1.3229166"
              x="37.671593"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_27tof1_28"
              width="21.166666"
              height="1.3229166"
              x="57.515339"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_21tof1_28"
              width="1.3229166"
              height="11.90625"
              x="77.359085"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_28tof1_29"
              width="19.84375"
              height="1.3229166"
              x="77.359085"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_29tof1_30"
              width="17.197916"
              height="1.3229166"
              x="95.879913"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_30tof1_31"
              width="15.875"
              height="1.3229166"
              x="111.75491"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.82223988;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_31tof1_32"
              width="13.148918"
              height="1.3229166"
              x="126.307"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_23tof1_32"
              width="1.3229166"
              height="19.84375"
              x="138.21327"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.90721929;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_32tof1_33"
              width="14.552071"
              height="1.3229166"
              x="138.21327"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_24tof1_33"
              width="1.3229166"
              height="19.84375"
              x="151.44243"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_33tof1_34"
              width="14.552083"
              height="1.3229166"
              x="151.44243"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_26tof1_34"
              width="1.3229166"
              height="19.84375"
              x="164.6716"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_34tof1_35"
              width="15.875"
              height="1.3229166"
              x="164.6716"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_35tof1_36"
              width="17.197916"
              height="1.3229166"
              x="179.22368"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_31tof1_36"
              width="1.3229166"
              height="3.96875"
              x="195.09868"
              y="174.7877" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.82474518;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_36tof1_37"
              width="1.3229166"
              height="13.229168"
              x="195.09868"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.91178983;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_37tof1_38"
              width="1.3229166"
              height="13.229159"
              x="195.09868"
              y="190.6627" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_27tof1_38"
              width="9.260417"
              height="1.3229166"
              x="187.16118"
              y="202.56895" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_28tof1_38"
              width="6.614583"
              height="1.3229166"
              x="195.09868"
              y="202.56895" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_38tof1_39"
              width="1.3229166"
              height="14.552083"
              x="195.09868"
              y="202.56895" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_39tof1_40"
              width="1.3229166"
              height="15.875"
              x="195.09868"
              y="215.79811" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_29tof1_40"
              width="6.614583"
              height="1.3229166"
              x="195.09868"
              y="230.3502" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_40tof1_41"
              width="1.3229166"
              height="14.552083"
              x="195.09868"
              y="230.3502" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_30tof1_41"
              width="6.614583"
              height="1.3229166"
              x="195.09868"
              y="243.57936" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_36tof1_42"
              width="15.875"
              height="1.3229166"
              x="195.09868"
              y="178.75645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_42tof1_43"
              width="1.3229166"
              height="18.520834"
              x="209.65076"
              y="161.55853" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.78963375;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_42tof1_43"
              width="13.229179"
              height="1.3229166"
              x="209.65076"
              y="161.55853" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_43tof1_44"
              width="1.3229166"
              height="15.875"
              x="209.65076"
              y="147.00645" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_44tof1_45"
              width="1.3229166"
              height="15.875"
              x="209.65076"
              y="132.45438" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_32tof1_45"
              width="6.614583"
              height="1.3229166"
              x="204.35909"
              y="132.45438" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_45tof1_46"
              width="1.3229166"
              height="15.875"
              x="209.65076"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_33tof1_46"
              width="6.614583"
              height="1.3229166"
              x="204.35909"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_34tof1_46"
              width="1.3229166"
              height="7.9375"
              x="209.65077"
              y="111.2877" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_46tof1_47"
              width="14.552083"
              height="1.3229166"
              x="209.65076"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_47tof1_48"
              width="15.875"
              height="1.3229166"
              x="222.87993"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_48tof1_49"
              width="14.552083"
              height="1.3229166"
              x="237.43201"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_35tof1_48"
              width="1.3229166"
              height="6.614583"
              x="237.43201"
              y="111.2877" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_49tof1_50"
              width="15.875"
              height="1.3229166"
              x="250.66116"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_50tof1_51"
              width="17.197916"
              height="1.3229166"
              x="265.21326"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_36tof1_51"
              width="1.3229166"
              height="6.614583"
              x="281.08826"
              y="111.2877" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_51tof1_52"
              width="15.875"
              height="1.3229166"
              x="281.08826"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_52tof1_53"
              width="25.135416"
              height="1.3229166"
              x="295.64035"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_37tof1_53"
              width="1.3229166"
              height="7.9375"
              x="319.45285"
              y="111.2877" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_53tof1_54"
              width="18.520834"
              height="1.3229166"
              x="319.45285"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_54tof1_55"
              width="14.552083"
              height="1.3229166"
              x="336.65076"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:1.04322922;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_55tof1_57-2"
              width="1.3229166"
              height="21.166666"
              x="349.87991"
              y="98.058533" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_55tof1_56"
              width="13.229166"
              height="1.3229166"
              x="349.87991"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:1.04322934;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_56tof1_57"
              width="1.3229166"
              height="21.16667"
              x="361.78616"
              y="98.058533" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_41tof1_56"
              width="6.614583"
              height="1.3229166"
              x="361.78616"
              y="117.90228" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="f1_57tof1_57-2"
              width="13.229166"
              height="1.3229166"
              x="349.87991"
              y="98.058533" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_40tof1_57"
              width="3.96875"
              height="1.3229166"
              x="361.78616"
              y="98.058533" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_39tof1_57"
              width="1.3229166"
              height="9.260417"
              x="361.78616"
              y="88.798119" />
            <rect fill = "#000000"
              //style="fill:#ff5555;fill-opacity:1;stroke-width:0.86500001;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
              id="b1_38tof1_57-2"
              width="1.3229166"
              height="3.96875"
              x="349.87991"
              y="94.089783" />
            <path onClick = {this.onClick}
              id="b1_2"
              d="m -238.81798,125.83979 v 11.90624 h 25.13542 v -11.90624 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.25140104;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.76541166;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title884">Toilet F1_01</title>
            </path>


            <path onClick = {this.onClick}
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26646814;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.01204822"
              d="m -238.81798,139.21594 v 34.77801 h 41.01042 v -48.15416 h -14.55209 v 13.37615 z"
              id="b1_3">
              <title
                id="title963">MBE Room</title>
            </path>

            <path onClick = {this.onClick}
              id="b1_1"
              d="m -238.2888,82.977264 h 42.06874 v 29.633356 h -42.06874 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.2406172;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.64678938;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title894">Storage Room 1</title>
            </path>

            <path onClick = {this.onClick}
              id="b1_4"
              d="m -194.89714,83.241848 v 29.368772 h 26.45834 V 83.241848 Z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26620188;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.92822097;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title892">Associate Dean Room</title>
            </path>

            <path onClick = {this.onClick}
              id="b1_6"
              d="m -167.11589,83.241848 v 29.368772 h 26.45833 V 83.241848 Z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26620188;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.92822097;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title882">OD Room</title>
            </path>

            <path onClick = {this.onClick}
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 2.91500003;stroke-dashoffset:0;stroke-opacity:1"
              d="m -189.87006,123.19392 v 19.84378 h 48.94791 v -19.84378 z"
              id="b1_5">
              <title
                id="title888">Conference Room 2</title>
            </path>

            <path onClick = {this.onClick}
              id="b1_12"
              d="m -99.911734,123.19396 v 21.16666 h 41.01042 v -21.16666 z"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.27369079;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 3.01059893;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title890">Conference Room 1</title>
            </path>

            <path onClick = {this.onClick}
              id="b1_13"
              d="m -57.313787,123.19395 v 21.16666 h 27.78125 v -21.16666 h -27.78125"
              //style="fill:#ff6600;stroke:#000000;stroke-width:0.27369079;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0, 3.01059909;stroke-dashoffset:0;stroke-opacity:1"
              >
              <title
                id="title5247">Amazon Cafe'</title>
            </path>
           


          </g>
        </svg>
        </PinchView>
      );
    }
  }

