(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1364:function(t,e,C){"use strict";C.r(e);C(1316);var l=C(7),r=(C(66),C(1315)),o=C(1317),c={mixins:[r.validationMixin],name:"IndexPage",data:function(){return{form:{email:"",password:""}}},validations:{form:{email:{required:o.required},password:{required:o.required}}},methods:{submit:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$v.$touch(),t.$v.$invalid?t.$notyf.error("Invalid Form."):t.userLogin();case 2:case"end":return e.stop()}}),e)})))()},userLogin:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("local",{data:t.form});case 3:e.sent,t.$nuxt.$loading.finish(),t.$router.push("/dashboard"),e.next=16;break;case 8:if(e.prev=8,e.t0=e.catch(0),t.$nuxt.$loading.finish(),console.log(e.t0),"otp"!=e.t0.response.data.status){e.next=15;break}return t.$router.push("/otp?email="+t.form.email),e.abrupt("return");case 15:t.$notyf.error(e.t0.response.data.message);case 16:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},d=C(60),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col items-center justify-center"},[e("svg",{staticStyle:{"shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"},attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"49px",height:"62px","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",[e("path",{staticStyle:{opacity:"0.11"},attrs:{fill:"#e1e6f5",d:"M 35.5,15.5 C 34.2801,13.9504 34.2801,12.2837 35.5,10.5C 38.0835,8.58089 37.7502,6.91422 34.5,5.5C 33.8165,5.86273 33.1499,6.19607 32.5,6.5C 33.8278,4.25542 35.6612,3.92208 38,5.5C 38.6667,7.16667 38.6667,8.83333 38,10.5C 36.6283,11.9101 35.795,13.5767 35.5,15.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#292465",d:"M 35.5,10.5 C 35.5,9.5 35.5,8.5 35.5,7.5C 34.209,7.26269 33.209,7.59603 32.5,8.5C 31.8333,8.5 31.5,8.83333 31.5,9.5C 30.5084,9.67158 29.8417,9.33825 29.5,8.5C 30.5,7.83333 31.5,7.16667 32.5,6.5C 33.1499,6.19607 33.8165,5.86273 34.5,5.5C 37.7502,6.91422 38.0835,8.58089 35.5,10.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#221c61",d:"M 19.5,8.5 C 17.6329,9.75984 16.2995,11.4265 15.5,13.5C 14.7777,14.5511 13.7777,15.2178 12.5,15.5C 13.1667,11.5 15.5,9.16667 19.5,8.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#020160",d:"M 19.5,8.5 C 22.4951,8.29379 25.1617,8.96046 27.5,10.5C 27.8333,11.1667 28.1667,11.8333 28.5,12.5C 26.1667,12.5 23.8333,12.5 21.5,12.5C 19.7839,12.6287 18.1172,12.962 16.5,13.5C 16.1667,13.5 15.8333,13.5 15.5,13.5C 16.2995,11.4265 17.6329,9.75984 19.5,8.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#160e62",d:"M 19.5,8.5 C 22.7307,7.21846 26.0641,7.21846 29.5,8.5C 29.8417,9.33825 30.5084,9.67158 31.5,9.5C 30.4324,10.4345 29.099,10.7678 27.5,10.5C 25.1617,8.96046 22.4951,8.29379 19.5,8.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#585095",d:"M 21.5,13.5 C 21.5,13.1667 21.5,12.8333 21.5,12.5C 23.8333,12.5 26.1667,12.5 28.5,12.5C 29.1667,12.5 29.5,12.8333 29.5,13.5C 29.5,14.5 29.5,15.5 29.5,16.5C 27.4548,14.0156 24.7882,13.0156 21.5,13.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#030268",d:"M 32.5,8.5 C 33.3764,8.36912 34.0431,8.70245 34.5,9.5C 33.0944,11.026 31.9277,12.6927 31,14.5C 30.6174,13.944 30.1174,13.6107 29.5,13.5C 29.5,12.8333 29.1667,12.5 28.5,12.5C 28.1667,11.8333 27.8333,11.1667 27.5,10.5C 29.099,10.7678 30.4324,10.4345 31.5,9.5C 31.5,8.83333 31.8333,8.5 32.5,8.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#1f1766",d:"M 21.5,12.5 C 21.5,12.8333 21.5,13.1667 21.5,13.5C 20.5,14.1667 19.5,14.8333 18.5,15.5C 17.0399,18.6272 17.3732,21.6272 19.5,24.5C 18.8333,24.5 18.1667,24.5 17.5,24.5C 16.6993,22.9582 16.366,21.2915 16.5,19.5C 16.5,17.5 16.5,15.5 16.5,13.5C 18.1172,12.962 19.7839,12.6287 21.5,12.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#010160",d:"M 15.5,13.5 C 15.8333,13.5 16.1667,13.5 16.5,13.5C 16.5,15.5 16.5,17.5 16.5,19.5C 15.8826,19.3893 15.3826,19.056 15,18.5C 14.7216,19.4158 14.2216,20.0825 13.5,20.5C 12.5489,19.0813 12.2155,17.4147 12.5,15.5C 13.7777,15.2178 14.7777,14.5511 15.5,13.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#060561",d:"M 32.5,8.5 C 33.209,7.59603 34.209,7.26269 35.5,7.5C 35.5,8.5 35.5,9.5 35.5,10.5C 34.2801,12.2837 34.2801,13.9504 35.5,15.5C 35.5,17.8333 35.5,20.1667 35.5,22.5C 34.8333,22.1667 34.1667,21.8333 33.5,21.5C 33.9118,19.0274 32.9118,17.6941 30.5,17.5C 30.5,16.8333 30.1667,16.5 29.5,16.5C 29.5,15.5 29.5,14.5 29.5,13.5C 30.1174,13.6107 30.6174,13.944 31,14.5C 31.9277,12.6927 33.0944,11.026 34.5,9.5C 34.0431,8.70245 33.3764,8.36912 32.5,8.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#030068",d:"M 16.5,19.5 C 16.366,21.2915 16.6993,22.9582 17.5,24.5C 17.5,25.8333 16.8333,26.5 15.5,26.5C 14.8333,24.5 14.1667,22.5 13.5,20.5C 14.2216,20.0825 14.7216,19.4158 15,18.5C 15.3826,19.056 15.8826,19.3893 16.5,19.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#02015c",d:"M 30.5,17.5 C 32.9118,17.6941 33.9118,19.0274 33.5,21.5C 32.8333,21.5 32.5,21.8333 32.5,22.5C 31.8333,22.8333 31.1667,23.1667 30.5,23.5C 30.5,21.5 30.5,19.5 30.5,17.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"0.092"},attrs:{fill:"#e7edfa",d:"M 11.5,16.5 C 11.5751,19.2062 11.9084,21.8728 12.5,24.5C 12.5,25.1667 12.5,25.8333 12.5,26.5C 11.0277,24.8825 10.361,22.8825 10.5,20.5C 10.5108,18.9549 10.8442,17.6216 11.5,16.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#40347f",d:"M 33.5,21.5 C 34.1667,21.8333 34.8333,22.1667 35.5,22.5C 35.2503,24.674 34.2503,26.3406 32.5,27.5C 32.5,25.8333 32.5,24.1667 32.5,22.5C 32.5,21.8333 32.8333,21.5 33.5,21.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"0.396"},attrs:{fill:"#e5ecf9",d:"M 18.5,15.5 C 17.9783,20.4715 19.9783,23.8048 24.5,25.5C 22.7085,25.634 21.0418,25.3007 19.5,24.5C 17.3732,21.6272 17.0399,18.6272 18.5,15.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#1e1661",d:"M 12.5,15.5 C 12.2155,17.4147 12.5489,19.0813 13.5,20.5C 14.1667,22.5 14.8333,24.5 15.5,26.5C 15.5,26.8333 15.5,27.1667 15.5,27.5C 14.2719,26.6935 13.2719,25.6935 12.5,24.5C 11.9084,21.8728 11.5751,19.2062 11.5,16.5C 11.5,15.8333 11.8333,15.5 12.5,15.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#484084",d:"M 29.5,16.5 C 30.1667,16.5 30.5,16.8333 30.5,17.5C 30.5,19.5 30.5,21.5 30.5,23.5C 29.8333,24.1667 29.1667,24.8333 28.5,25.5C 27.8333,25.5 27.1667,25.5 26.5,25.5C 29.0762,23.1125 30.0762,20.1125 29.5,16.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#0a0666",d:"M 32.5,22.5 C 32.5,24.1667 32.5,25.8333 32.5,27.5C 32.5,27.8333 32.5,28.1667 32.5,28.5C 32.1667,28.5 31.8333,28.5 31.5,28.5C 31.2172,27.7109 30.7172,27.0442 30,26.5C 28.9887,27.3366 27.8221,27.67 26.5,27.5C 27.1667,26.8333 27.8333,26.1667 28.5,25.5C 29.1667,24.8333 29.8333,24.1667 30.5,23.5C 31.1667,23.1667 31.8333,22.8333 32.5,22.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#e3e7fa",d:"M 12.5,24.5 C 13.2719,25.6935 14.2719,26.6935 15.5,27.5C 16.6594,29.2503 18.326,30.2503 20.5,30.5C 20.5,30.8333 20.5,31.1667 20.5,31.5C 19.8333,31.8333 19.1667,32.1667 18.5,32.5C 16.1939,30.8606 14.1939,28.8606 12.5,26.5C 12.5,25.8333 12.5,25.1667 12.5,24.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#07055e",d:"M 17.5,24.5 C 18.1667,24.5 18.8333,24.5 19.5,24.5C 19.8102,26.1436 20.8102,27.1436 22.5,27.5C 21.1667,28.5 21.1667,29.5 22.5,30.5C 21.8333,30.5 21.1667,30.5 20.5,30.5C 18.326,30.2503 16.6594,29.2503 15.5,27.5C 15.5,27.1667 15.5,26.8333 15.5,26.5C 16.8333,26.5 17.5,25.8333 17.5,24.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#100f5b",d:"M 19.5,24.5 C 21.0418,25.3007 22.7085,25.634 24.5,25.5C 25.1667,25.5 25.8333,25.5 26.5,25.5C 27.1667,25.5 27.8333,25.5 28.5,25.5C 27.8333,26.1667 27.1667,26.8333 26.5,27.5C 26.1667,27.5 25.8333,27.5 25.5,27.5C 24.5,27.5 23.5,27.5 22.5,27.5C 20.8102,27.1436 19.8102,26.1436 19.5,24.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#030266",d:"M 22.5,27.5 C 23.5,27.5 24.5,27.5 25.5,27.5C 26.1834,29.1765 27.5168,29.8432 29.5,29.5C 27.3926,30.4682 25.0593,30.8016 22.5,30.5C 21.1667,29.5 21.1667,28.5 22.5,27.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#010068",d:"M 31.5,28.5 C 31.1583,29.3382 30.4916,29.6716 29.5,29.5C 27.5168,29.8432 26.1834,29.1765 25.5,27.5C 25.8333,27.5 26.1667,27.5 26.5,27.5C 27.8221,27.67 28.9887,27.3366 30,26.5C 30.7172,27.0442 31.2172,27.7109 31.5,28.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#141061",d:"M 31.5,28.5 C 31.8333,28.5 32.1667,28.5 32.5,28.5C 35.6472,30.3129 37.6472,32.9796 38.5,36.5C 36.9826,36.4894 35.8159,35.8228 35,34.5C 34.5065,36.1341 34.3398,37.8008 34.5,39.5C 34.1667,39.5 33.8333,39.5 33.5,39.5C 33.6716,38.5084 33.3382,37.8417 32.5,37.5C 31.0692,33.2766 28.0692,31.2766 23.5,31.5C 22.5,31.5 21.5,31.5 20.5,31.5C 20.5,31.1667 20.5,30.8333 20.5,30.5C 21.1667,30.5 21.8333,30.5 22.5,30.5C 25.0593,30.8016 27.3926,30.4682 29.5,29.5C 30.4916,29.6716 31.1583,29.3382 31.5,28.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"0.878"},attrs:{fill:"#d7fefe",d:"M 20.5,31.5 C 21.5,31.5 22.5,31.5 23.5,31.5C 23.5,31.8333 23.5,32.1667 23.5,32.5C 20.3855,32.5548 18.0522,33.8881 16.5,36.5C 16.1667,36.5 15.8333,36.5 15.5,36.5C 15.3723,34.8708 16.3723,33.5375 18.5,32.5C 19.1667,32.1667 19.8333,31.8333 20.5,31.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#bbedfa",d:"M 23.5,32.5 C 23.5,32.1667 23.5,31.8333 23.5,31.5C 28.0692,31.2766 31.0692,33.2766 32.5,37.5C 32.1667,37.5 31.8333,37.5 31.5,37.5C 29.8073,34.3182 27.1407,32.6516 23.5,32.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#4bf2f1",d:"M 23.5,32.5 C 27.1407,32.6516 29.8073,34.3182 31.5,37.5C 31.1667,37.5 30.8333,37.5 30.5,37.5C 28.6675,36.7515 27.0009,35.7515 25.5,34.5C 23.1016,34.2594 21.1016,34.9261 19.5,36.5C 18.5,36.5 17.5,36.5 16.5,36.5C 18.0522,33.8881 20.3855,32.5548 23.5,32.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#03fcfd",d:"M 25.5,34.5 C 25.4142,35.4959 25.7476,36.3292 26.5,37C 25.5842,37.2784 24.9175,37.7784 24.5,38.5C 22.6776,38.1692 21.0109,37.5025 19.5,36.5C 21.1016,34.9261 23.1016,34.2594 25.5,34.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#23f3fb",d:"M 15.5,36.5 C 15.8333,36.5 16.1667,36.5 16.5,36.5C 17.5,36.5 18.5,36.5 19.5,36.5C 21.0109,37.5025 22.6776,38.1692 24.5,38.5C 26.7354,38.7947 28.7354,38.4614 30.5,37.5C 30.8333,37.5 31.1667,37.5 31.5,37.5C 31.6716,38.4916 31.3382,39.1583 30.5,39.5C 29.209,39.2627 28.209,39.596 27.5,40.5C 26.8333,40.5 26.1667,40.5 25.5,40.5C 24.5,39.1667 23.5,39.1667 22.5,40.5C 21.5,41.8333 20.5,41.8333 19.5,40.5C 19.1583,39.6618 18.4916,39.3284 17.5,39.5C 16.8333,39.5 16.1667,39.5 15.5,39.5C 15.5,39.1667 15.5,38.8333 15.5,38.5C 15.5,37.8333 15.5,37.1667 15.5,36.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#04fdfb",d:"M 25.5,34.5 C 27.0009,35.7515 28.6675,36.7515 30.5,37.5C 28.7354,38.4614 26.7354,38.7947 24.5,38.5C 24.9175,37.7784 25.5842,37.2784 26.5,37C 25.7476,36.3292 25.4142,35.4959 25.5,34.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#98ecf3",d:"M 31.5,37.5 C 31.8333,37.5 32.1667,37.5 32.5,37.5C 33.3382,37.8417 33.6716,38.5084 33.5,39.5C 33.702,41.9496 33.3686,44.283 32.5,46.5C 32.1667,46.5 31.8333,46.5 31.5,46.5C 31.5,45.8333 31.5,45.1667 31.5,44.5C 31.7678,42.901 31.4345,41.5676 30.5,40.5C 30.5,40.1667 30.5,39.8333 30.5,39.5C 31.3382,39.1583 31.6716,38.4916 31.5,37.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#03025e",d:"M 38.5,36.5 C 38.5,37.1667 38.5,37.8333 38.5,38.5C 35.5689,37.0441 34.9022,37.8774 36.5,41C 35.9152,42.3024 35.2485,43.469 34.5,44.5C 34.5,42.8333 34.5,41.1667 34.5,39.5C 34.3398,37.8008 34.5065,36.1341 35,34.5C 35.8159,35.8228 36.9826,36.4894 38.5,36.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"0.945"},attrs:{fill:"#00035f",d:"M 8.5,40.5 C 9.83333,40.5 11.1667,40.5 12.5,40.5C 12.5,41.5 12.5,42.5 12.5,43.5C 11.1667,43.5 9.83333,43.5 8.5,43.5C 8.5,42.5 8.5,41.5 8.5,40.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#053a6c",d:"M 17.5,39.5 C 18.4916,39.3284 19.1583,39.6618 19.5,40.5C 19.3328,43.9571 18.3328,44.2904 16.5,41.5C 16.8627,40.8165 17.1961,40.1499 17.5,39.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#064079",d:"M 25.5,40.5 C 25.4431,41.609 25.1098,42.609 24.5,43.5C 22.9519,43.1788 22.2852,42.1788 22.5,40.5C 23.5,39.1667 24.5,39.1667 25.5,40.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#25dbf3",d:"M 25.5,40.5 C 26.1667,40.5 26.8333,40.5 27.5,40.5C 28.7542,44.31 29.7542,44.31 30.5,40.5C 31.4345,41.5676 31.7678,42.901 31.5,44.5C 31.1667,44.5 30.8333,44.5 30.5,44.5C 28.3881,43.7249 26.3881,43.7249 24.5,44.5C 24.5,44.1667 24.5,43.8333 24.5,43.5C 25.1098,42.609 25.4431,41.609 25.5,40.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#043a6f",d:"M 30.5,39.5 C 30.5,39.8333 30.5,40.1667 30.5,40.5C 29.7542,44.31 28.7542,44.31 27.5,40.5C 28.209,39.596 29.209,39.2627 30.5,39.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"0.981"},attrs:{fill:"#221c62",d:"M 13.5,39.5 C 13.448,41.9029 13.7814,44.2362 14.5,46.5C 13.2921,45.7659 11.9587,45.4326 10.5,45.5C 10.7215,47.6636 11.7215,49.3303 13.5,50.5C 13.5,51.5 13.5,52.5 13.5,53.5C 10.2586,51.0174 8.59195,47.6841 8.5,43.5C 9.83333,43.5 11.1667,43.5 12.5,43.5C 12.5,42.5 12.5,41.5 12.5,40.5C 11.1667,40.5 9.83333,40.5 8.5,40.5C 10.1741,37.746 11.8408,37.4127 13.5,39.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"0.867"},attrs:{fill:"#bff2fc",d:"M 15.5,38.5 C 15.5,38.8333 15.5,39.1667 15.5,39.5C 15.4013,42.2372 15.7347,44.9039 16.5,47.5C 15.8333,47.1667 15.1667,46.8333 14.5,46.5C 13.7814,44.2362 13.448,41.9029 13.5,39.5C 13.4088,37.3023 14.0755,36.9689 15.5,38.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#42e1f1",d:"M 15.5,39.5 C 16.1667,39.5 16.8333,39.5 17.5,39.5C 17.1961,40.1499 16.8627,40.8165 16.5,41.5C 18.3328,44.2904 19.3328,43.9571 19.5,40.5C 20.5,41.8333 21.5,41.8333 22.5,40.5C 22.2852,42.1788 22.9519,43.1788 24.5,43.5C 24.5,43.8333 24.5,44.1667 24.5,44.5C 22.076,44.1924 19.7427,44.5258 17.5,45.5C 18.1272,46.4168 18.4606,47.4168 18.5,48.5C 17.8333,48.5 17.1667,48.5 16.5,48.5C 16.5,48.1667 16.5,47.8333 16.5,47.5C 15.7347,44.9039 15.4013,42.2372 15.5,39.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#0afcfa",d:"M 30.5,44.5 C 29.3093,46.5218 27.4759,47.8552 25,48.5C 23.3067,47.7971 21.8067,47.7971 20.5,48.5C 19.8333,48.5 19.1667,48.5 18.5,48.5C 18.4606,47.4168 18.1272,46.4168 17.5,45.5C 19.7427,44.5258 22.076,44.1924 24.5,44.5C 26.3881,43.7249 28.3881,43.7249 30.5,44.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#080363",d:"M 38.5,38.5 C 37.3559,42.3596 36.6893,46.3596 36.5,50.5C 36.5,51.1667 36.1667,51.5 35.5,51.5C 34.5318,49.3926 34.1984,47.0593 34.5,44.5C 35.2485,43.469 35.9152,42.3024 36.5,41C 34.9022,37.8774 35.5689,37.0441 38.5,38.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#332f75",d:"M 38.5,36.5 C 40.0973,41.4475 39.4306,46.1142 36.5,50.5C 36.6893,46.3596 37.3559,42.3596 38.5,38.5C 38.5,37.8333 38.5,37.1667 38.5,36.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"0.995"},attrs:{fill:"#030064",d:"M 14.5,46.5 C 14.5394,47.5832 14.8728,48.5832 15.5,49.5C 15.0431,50.2975 14.3764,50.6309 13.5,50.5C 11.7215,49.3303 10.7215,47.6636 10.5,45.5C 11.9587,45.4326 13.2921,45.7659 14.5,46.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#353275",d:"M 33.5,39.5 C 33.8333,39.5 34.1667,39.5 34.5,39.5C 34.5,41.1667 34.5,42.8333 34.5,44.5C 34.1984,47.0593 34.5318,49.3926 35.5,51.5C 34.8333,52.8333 33.8333,53.8333 32.5,54.5C 32.5,53.5 32.5,52.5 32.5,51.5C 33.0965,50.0646 33.0965,48.398 32.5,46.5C 33.3686,44.283 33.702,41.9496 33.5,39.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#46f3f0",d:"M 30.5,44.5 C 30.8333,44.5 31.1667,44.5 31.5,44.5C 31.5,45.1667 31.5,45.8333 31.5,46.5C 31.1667,47.5 30.5,48.1667 29.5,48.5C 26.3962,49.7752 23.3962,49.7752 20.5,48.5C 21.8067,47.7971 23.3067,47.7971 25,48.5C 27.4759,47.8552 29.3093,46.5218 30.5,44.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"0.875"},attrs:{fill:"#abf4f8",d:"M 16.5,48.5 C 17.1667,48.5 17.8333,48.5 18.5,48.5C 19.1667,48.5 19.8333,48.5 20.5,48.5C 23.3962,49.7752 26.3962,49.7752 29.5,48.5C 29.5,49.1667 29.5,49.8333 29.5,50.5C 27.1944,50.9926 24.861,51.3259 22.5,51.5C 21.5,51.5 20.5,51.5 19.5,51.5C 18.6935,50.2719 17.6935,49.2719 16.5,48.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#0e0a5d",d:"M 14.5,46.5 C 15.1667,46.8333 15.8333,47.1667 16.5,47.5C 16.5,47.8333 16.5,48.1667 16.5,48.5C 17.6935,49.2719 18.6935,50.2719 19.5,51.5C 17.5168,51.1568 16.1834,51.8235 15.5,53.5C 14.8333,53.5 14.1667,53.5 13.5,53.5C 13.5,52.5 13.5,51.5 13.5,50.5C 14.3764,50.6309 15.0431,50.2975 15.5,49.5C 14.8728,48.5832 14.5394,47.5832 14.5,46.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#211d65",d:"M 29.5,50.5 C 30.791,50.2627 31.791,50.596 32.5,51.5C 32.5,52.5 32.5,53.5 32.5,54.5C 32.5,55.1667 32.1667,55.5 31.5,55.5C 30.1667,55.8333 28.8333,56.1667 27.5,56.5C 27.5,56.1667 27.5,55.8333 27.5,55.5C 28.3984,54.8423 29.3984,54.1757 30.5,53.5C 27.9135,52.52 25.2469,52.1866 22.5,52.5C 22.5,52.1667 22.5,51.8333 22.5,51.5C 24.861,51.3259 27.1944,50.9926 29.5,50.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#04035e",d:"M 19.5,51.5 C 20.5,51.5 21.5,51.5 22.5,51.5C 22.5,51.8333 22.5,52.1667 22.5,52.5C 21.325,52.281 20.325,52.6143 19.5,53.5C 21.8511,55.2289 24.5178,55.8956 27.5,55.5C 27.5,55.8333 27.5,56.1667 27.5,56.5C 27.1667,56.5 26.8333,56.5 26.5,56.5C 23.0977,56.6576 19.7644,56.3242 16.5,55.5C 16.1667,54.8333 15.8333,54.1667 15.5,53.5C 16.1834,51.8235 17.5168,51.1568 19.5,51.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#030065",d:"M 22.5,52.5 C 25.2469,52.1866 27.9135,52.52 30.5,53.5C 29.3984,54.1757 28.3984,54.8423 27.5,55.5C 24.5178,55.8956 21.8511,55.2289 19.5,53.5C 20.325,52.6143 21.325,52.281 22.5,52.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#7e7bb5",d:"M 13.5,53.5 C 14.1667,53.5 14.8333,53.5 15.5,53.5C 15.8333,54.1667 16.1667,54.8333 16.5,55.5C 14.9731,55.573 13.9731,54.9063 13.5,53.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"1"},attrs:{fill:"#8b90c1",d:"M 16.5,55.5 C 19.7644,56.3242 23.0977,56.6576 26.5,56.5C 26.1583,57.3382 25.4916,57.6716 24.5,57.5C 22.1432,57.6633 19.8098,57.4966 17.5,57C 16.944,56.6174 16.6107,56.1174 16.5,55.5 Z"}})]),t._v(" "),e("g",[e("path",{staticStyle:{opacity:"0.027"},attrs:{fill:"#edf2fc",d:"M 31.5,55.5 C 31.4226,56.7498 30.756,57.5831 29.5,58C 27.6131,58.7796 25.9464,58.6129 24.5,57.5C 25.4916,57.6716 26.1583,57.3382 26.5,56.5C 26.8333,56.5 27.1667,56.5 27.5,56.5C 28.8333,56.1667 30.1667,55.8333 31.5,55.5 Z"}})])]),t._v(" "),t._m(0),t._v(" "),e("form",{staticClass:"w-full px-5",on:{submit:function(e){return e.preventDefault(),t.submit()}}},[e("div",{staticClass:"mb-4 w-full"},[e("label",{staticClass:"mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]",attrs:{for:"email"}},[t._v("Admin Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.email.$model,expression:"$v.form.email.$model",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#00154A] text-black text-lg w-full p-2",class:{"border-red-400":t.$v.form.email.$error},attrs:{type:"text",id:"email",placeholder:"e.g. admin@super.com"},domProps:{value:t.$v.form.email.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.email,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),!t.$v.form.email.required&&t.$v.form.email.$error?e("div",{staticClass:"text-[10px] font-medium text-red-400"},[t._v(" Admin email is required.")]):t._e()]),t._v(" "),e("div",{staticClass:"mb-4 w-full"},[e("label",{staticClass:"mb-4 text-md text-[1rem] font-normal text-[#00154A] leading-[150%]",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.password.$model,expression:"$v.form.password.$model",modifiers:{trim:!0}}],staticClass:"bg-white border border-[#D1D1D1] h-10 placeholder:text-[0.9rem] font-light activeinput leading-[150%] placeholder:text-[#868685] focus-visible:outline-none rounded-[0.5rem] focus-visible:border-[#072C5C] text-black text-lg w-full p-2",class:{"border-red-400":t.$v.form.password.$error},attrs:{type:"password",id:"password",placeholder:"Set your password"},domProps:{value:t.$v.form.password.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.password,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),!t.$v.form.password.required&&t.$v.form.password.$error?e("div",{staticClass:"text-[10px] font-medium text-red-400"},[t._v(" Password is required.")]):t._e()]),t._v(" "),e("button",{staticClass:"hover:transition-all hover:bg-[#072C5C] text-white h-10 bg-[#072C5C] focus-visible:outline-none font-normal leading-[150%] rounded-[0.5rem] w-full px-5 py-2 text-center",attrs:{type:"submit"}},[t._v("Login to your dashboard")])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-6 flex items-center justify-center flex-col"},[e("h4",{staticClass:"text-[1.3rem] font-semibold leading-[150%] text-[#00154A] mb-0"},[t._v("Log in to your account")]),t._v(" "),e("p",{staticClass:"text-[1rem] font-light leading-[150%] text-[#868685]"},[t._v("Fill in the details below to get started")])])}],!1,null,null,null);e.default=component.exports}}]);