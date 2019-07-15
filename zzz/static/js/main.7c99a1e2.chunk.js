(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(60),o=a.n(s),i=(a(69),a(63)),l=a(1),c=a(3),u=a(4),h=a(6),p=a(5),f=a(7),v=(a(70),a(61)),d=a.n(v),m=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={drawing:!1},a.mouseDownHandler=function(e){a.setState({drawing:!0});var t=a.props,n=t.onDraw,r=t.onClick;n&&n(e,a.ctx,a.canvas),r&&r(e,a.ctx,a.canvas)},a.mouseUpHandler=function(e){if(a.state.drawing){a.setState({drawing:!1}),a.prevE=null;var t=a.props,n=t.onChange,r=t.width,s=t.height;n&&n(a.ctx.getImageData(0,0,r,s))}},a.mouseLeaveHandler=function(e){a.state.drawing&&a.mouseUpHandler()},a.mouseMoveHandler=function(e){if(a.state.drawing){var t=a.props.onDraw;t&&t(e,a.ctx,a.canvas,a.prevE),a.prevE=e}},a.setImageData=function(e){return a.ctx.putImageData(e,0,0)},a.drawImage=function(){var e;return(e=a.ctx).drawImage.apply(e,arguments)},a.getCtx=function(){return a.ctx},a.getImageData=function(){return a.ctx.getImageData(0,0,a.props.width,a.props.height)},a.clear=function(){a.ctx.fillStyle="#ffffff",a.ctx.fillRect(0,0,a.props.width,a.props.height)},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.canvas=this.refs.canvas,this.ctx=this.canvas.getContext("2d"),this.canvas.addEventListener("mousedown",this.mouseDownHandler),document.addEventListener("mouseup",this.mouseUpHandler),this.canvas.addEventListener("mousemove",this.mouseMoveHandler),this.props.value&&this.ctx.putImageData(this.props.value,0,0)}},{key:"componentWillReceiveProps",value:function(e){if(e.width!==this.props.width||e.height!==this.props.height){var t=this.props,a=t.onChange,n=t.width,r=t.height,s=t.resize,o=this.ctx.getImageData(0,0,n,r);s&&(o=d()(o,e.width,e.height,s)),setTimeout(function(){return a&&a(o)},0)}if(this.props.value!==e.value)if(e.value)this.ctx.putImageData(e.value,0,0);else{this.clear();var i=this.props,l=i.onChange,c=i.width,u=i.height;l&&l(this.ctx.getImageData(0,0,c,u))}}},{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=e.readonly;return r.a.createElement("div",{className:"canvas"+(n?" readonlyCanvas":"")},r.a.createElement("canvas",{ref:"canvas",width:t>0?t:1,height:a>0?a:1}))}}]),t}(r.a.Component),g={Brush:"brush(q)",Paint:"paint(a)",Line:"line(z)"},b={Color:"color(s)",Pattern:"pattern(d)"},C={Square:"square(w)",Circle:"circle(e)",Pattern:"pattern(r)"},y={no:"",nn:"nearest-neighbor",bi:"biliniear-interpolation"};function E(e,t){var a=e-.5+Math.random()*(t-e+1);return a=Math.round(a)}var w=function(e){return function(t){for(var a=t.w,n=void 0===a?50:a,r=t.h,s=void 0===r?50:r,o=e.createImageData(n,s),i=0;i<o.data.length;i++)o.data[i]=255;for(var l=e.createImageData(n,s),c=0;c<l.data.length;c+=4)l.data[c]=0,l.data[c+1]=0,l.data[c+2]=0,l.data[c+3]=255;return{w:n,h:s,image:o,mask:l,masked:e.createImageData(n,s),resizeType:"nn"}}},k=function(e,t,a,n){e.globalCompositeOperation="destination-out",e.moveTo(t,a),e.beginPath(),e.arc(t,a,n,0,2*Math.PI,!0),e.closePath(),e.fill(),e.globalCompositeOperation="source-over"},O=function(e,t,a,n){e.moveTo(t,a),e.beginPath(),e.arc(t,a,n,0,2*Math.PI,!0),e.closePath(),e.fill()},P=function(e){return new Promise(function(t,a){var n=document.createElement("canvas"),r=n.getContext("2d");n.width=e.width,n.height=e.height,r.drawImage(e,0,0,e.width,e.height);var s=new Image;s.onload=function(){t(s)},s.src=n.toDataURL()})};function j(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3===(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),{r:(t="0x"+t.join(""))>>16&255,g:t>>8&255,b:255&t,a:Math.round(255*a)};throw new Error("Bad Hex")}var S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleChose=function(e){return function(t){var n=a.props.onChange;n&&n(e)}},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.value,n=t.items;return r.a.createElement("div",null,n.map(function(t){return r.a.createElement("button",{className:"buttonControle",key:t,onClick:e.handleChose(t)},t+(t===a?"*":""))}))}}]),t}(r.a.PureComponent),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={pressed:!1},a.createMouseHandler=function(){var e=null,t=a.props.value;return function(e,t){var a=0;return function(){var n=(new Date).getTime();if(!(n-a<e))return a=n,t.apply(void 0,arguments)}}(50,function(n){if(e){var r=t+a.props.step*(n.x-e.x);r>a.props.max&&(r=a.props.max),r<a.props.min&&(r=a.props.min),a.props.onChange(r)}else e=n})},a.keydownHandler=function(e){var t=e.key.charCodeAt(0);-1!==a.props.codes.indexOf(t)&&(a.state.pressed||(a.setState(function(e){return{pressed:!0}}),a.handler=a.createMouseHandler(),document.addEventListener("mousemove",a.handler)))},a.keyupHandler=function(e){var t=e.key.charCodeAt(0);-1!==a.props.codes.indexOf(t)&&a.state.pressed&&(a.setState(function(e){return{pressed:!1}}),document.removeEventListener("mousemove",a.handler),a.handler=null)},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler),document.addEventListener("keyup",this.keyupHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("keyup",this.keyupHandler),this.handler&&document.removeEventListener("mousemove",this.handler)}},{key:"render",value:function(){var e=this.props,t=e.hide,a=e.text;return t?null:r.a.createElement("button",{className:"moveHandlerTip"},a,this.state.pressed?"*":"")}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).setBrushSize=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{size:e}))},a.handleSizeChange=function(e){a.setBrushSize(+e.target.value)},a.setOpacity=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{opacity:e}))},a.handleOpacityChang=function(e){a.setOpacity(+e.target.value)},a.selectType=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{type:e}))},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.min,n=void 0===a?1:a,s=e.max,o=void 0===s?100:s;return r.a.createElement("div",{className:"brush"},r.a.createElement("div",null,"brush"),r.a.createElement("div",{className:"brushbody"},r.a.createElement("input",{type:"range",min:n,max:o,value:t.size,onChange:this.handleSizeChange}),r.a.createElement(x,{text:"(f)",codes:[70,102,1072,1040],value:t.size,onChange:this.setBrushSize,step:1,min:n,max:o}),r.a.createElement("input",{type:"range",min:0,max:1,step:.05,value:t.opacity,onChange:this.handleOpacityChang}),r.a.createElement(x,{text:"(g)",codes:[71,103],value:t.opacity,step:.01,onChange:this.setOpacity,min:0,max:1}),r.a.createElement(S,{items:Object.values(C),value:t.type,onChange:this.selectType})))}}]),t}(r.a.PureComponent),z=a(9),T=a.n(z),I=10,D=new Array(1e3),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){for(var e=a.props,t=e.onClick,n=e.onPip,r=e.edited,s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];if(r)t&&t.apply(void 0,o);else{var l=a.refs.canvas.getCtx();n&&n(T()(l.getImageData(o[0].offsetX,o[0].offsetY,1,1).data.slice(0,3)).hex(),Math.floor(o[0].offsetX/I)*I,Math.floor(o[0].offsetY/I)*I)}},a.handleDraw=function(){var e=a.props,t=e.onDraw;e.edited&&t&&t.apply(void 0,arguments)},a.random=function(e){var t=a.refs.canvas.getCtx();D=new Array(1e3);for(var n=0;n<40;n++)for(var r=0;r<25;r++){var s=void 0;do{var o=E(Math.max(265-3*e,0),Math.min(280+3*e,359)),i=E(Math.max(60-e*e,0),Math.min(100+e*e,100)),l=E(Math.max(25-e/E(-20,20),0),Math.min(75+e/E(-20,20),100));s=T.a.hsl([o,i,l]).hex(),t.fillStyle=s,t.fillRect(n*I,r*I,I,I)}while(-1!==D.indexOf(s));D[n]=s}},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.value!==this.props.value){var t=this.refs.canvas.getCtx();t.fillStyle=e.value;var a=e.x,n=e.y;t.fillRect(a,n,I,I)}}},{key:"render",value:function(){return r.a.createElement(m,{readonly:!this.props.edited,ref:"canvas",width:40*I,height:25*I,onClick:this.handleClick,onDraw:this.handleDraw})}}]),t}(r.a.PureComponent),N=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleChangeHSL=function(e){return function(t){var n=+t.target.value;a.setState(function(t){var a=[t.value.color[0],t.value.color[1],t.value.color[2]];return a[e]=n,{value:T.a.hsl(a)}},function(){var e=a.props,t=e.onChange,n=e.value;t&&t(Object(l.a)({},n,{value:a.state.value.hex()}))})}},a.p1000=function(e){var t=(a.state.p1000/4-67+100)%100;a.refs.palette.random(t)},a.p1000change=function(e){var t=+e.target.value;a.setState({p1000:t})},a.togglePalette=function(e){return a.setState(function(e){return{palette:!e.palette}})},a.changeColor=function(e){return function(){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{value:e}))}},a.handlePip=function(e,t,n){return a.setState({paletteX:t,paletteY:n},function(){a.changeColor(e)()})},a.paletteEdit=function(){return a.setState(function(e){return{paletteEdit:!e.paletteEdit}})};var n=e.value;return a.state={value:T()(n.value).hsl(),colors:[],currentColor:0,p1000:150,palette:!1,paletteX:0,paletteY:0,paletteEdit:!1},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.value.value!==this.props.value.value){var t=this.state.colors;t[this.state.currentColor]=T()(e.value.value).hex(),this.setState({value:T()(e.value.value).hsl(),colors:t})}}},{key:"componentDidMount",value:function(){this.p1000()}},{key:"render",value:function(){var e=this.props,t=e.value,a=e.onDraw,n=e.onClick,s=e.onWhite,o=e.onBlack,i=e.onRand;return r.a.createElement("div",{className:"color"},r.a.createElement("div",null,"color"),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"colorValue",onClick:this.togglePalette,style:{backgroundColor:t.value}}),r.a.createElement("input",{type:"range",min:0,max:359,step:1,onChange:this.handleChangeHSL(0),value:this.state.value.color[0]}),r.a.createElement("input",{type:"range",min:0,max:100,step:1,onChange:this.handleChangeHSL(1),value:this.state.value.color[1]}),r.a.createElement("input",{type:"range",min:0,max:100,step:1,onChange:this.handleChangeHSL(2),value:this.state.value.color[2]}),r.a.createElement("div",null,r.a.createElement("button",{onClick:s},"white(x)")),r.a.createElement("div",null,r.a.createElement("button",{onClick:o},"black(c)")),r.a.createElement("div",null,r.a.createElement("button",{onClick:i},"random(v)"))),r.a.createElement("div",{className:"randomnes"+(this.state.palette?"":" randomes-hide")},r.a.createElement("div",{className:"flex"},r.a.createElement("input",{type:"range",min:0,max:400,step:1,onChange:this.p1000change,value:this.state.p1000}),r.a.createElement("button",{onClick:this.p1000},"random"),r.a.createElement("button",{onClick:this.paletteEdit,className:"buttonControle"},"edit",this.state.paletteEdit?"*":"")),r.a.createElement("div",{className:"palette"},r.a.createElement(H,{ref:"palette",edited:this.state.paletteEdit,onDraw:a,onClick:n,onPip:this.handlePip,x:this.state.paletteX,y:this.state.paletteY,value:t.value}))))}}]),t}(r.a.PureComponent),A=a(14),L={no:"nn",nn:"bi",bi:"no"},B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).updateMaskedImage=function(){try{var e=a.props,t=e.onChange,n=e.value,r=a.refs.canvasMasked.getCtx();r.putImageData(a.refs.canvasMask.getImageData(),0,0),r.globalCompositeOperation="source-in",r.drawImage(a.refs.canvas.canvas,0,0,n.w,n.h),P(r.canvas).then(function(e){return t&&t(Object(l.a)({},a.props.value,{imageMasked:e}))}),P(a.refs.canvasMask.canvas).then(function(e){return t&&t(Object(l.a)({},a.props.value,{imageMask:e}))})}catch(s){}},a.maskToggle=function(e){return a.setState(function(e){return{mask:!e.mask}})},a.sizeChangeHandler=function(e){return function(t){var n=a.props,r=n.onChange,s=n.value,o=+t.target.value;a.setState(Object(A.a)({},e,t.target.value)),o<1||(r&&r(Object(l.a)({},s,Object(A.a)({},e,o))),a.updateMaskedImage())}},a.mirrorChangeHandler=function(e){return function(t){var n=a.props,r=n.onChange,s=n.value;r&&r(Object(l.a)({},s,Object(A.a)({},e,!s[e])))}},a.imageChangeHandler=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{image:e})),a.updateMaskedImage()},a.maskChangeHandler=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{mask:e})),a.updateMaskedImage()},a.resizeTypeChangeHandler=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{resizeType:L[r.resizeType]}))},a.handleFile=function(e){var t=new FileReader;t.onload=function(e){var t=new Image;t.onload=function(){a.refs.canvas.ctx.drawImage(t,0,0,a.props.value.w,a.props.value.h),a.updateMaskedImage()},t.src=e.target.result},t.readAsDataURL(e.target.files[0])},a.state={mask:!0,w:e.value.w,h:e.value.h},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.value.w!==e.value.w&&this.setState({w:e.value.w}),this.props.value.h!==e.value.h&&this.setState({h:e.value.h})}},{key:"componentDidMount",value:function(){this.updateMaskedImage()}},{key:"render",value:function(){var e=this.props,t=e.value,a=e.onPatternDraw,r=e.onMaskDraw,s=e.onPatternClick,o=e.onMaskClick,i=(e.onRemove,e.chosen),l=e.onChose;return n.createElement("div",{className:"patternEditor"},n.createElement("div",{className:t.w<63?"canvases":"canvases-col"},n.createElement(m,{ref:"canvas",resize:y[t.resizeType],value:t.image,width:t.w,height:t.h,onDraw:a,onClick:s,onChange:this.imageChangeHandler}),n.createElement("div",{style:{display:this.state.mask?"":"none"}},n.createElement(m,{ref:"canvasMask",resize:y["bi"===t.resizeType?"nn":t.resizeType],value:t.mask,width:t.w,height:t.h,onDraw:r,onClick:o,onChange:this.maskChangeHandler})),n.createElement("div",{style:{display:this.state.mask?"":"none"}},n.createElement(m,{ref:"canvasMasked",readonly:!0,resize:y["bi"===t.resizeType?"nn":t.resizeType],value:t.masked,width:t.w,height:t.h}))),n.createElement("div",{className:"btns"},n.createElement("button",{onClick:l,style:{visibility:i?"visible":""}},"c"),n.createElement("button",{onClick:this.maskToggle},this.state.mask?"hide ":"show ","mask"),n.createElement("br",null),n.createElement("input",{type:"number",step:1,min:1,max:500,value:this.state.w,onChange:this.sizeChangeHandler("w")}),n.createElement("input",{type:"number",step:1,min:1,max:500,value:this.state.h,onChange:this.sizeChangeHandler("h")}),"stretch:",n.createElement("button",{onClick:this.resizeTypeChangeHandler,className:"resizeType"},t.resizeType),n.createElement("br",null),"mirror:x",n.createElement("input",{type:"checkbox",value:t.xMirror,onChange:this.mirrorChangeHandler("xMirror")}),"y",n.createElement("input",{type:"checkbox",value:t.yMirror,onChange:this.mirrorChangeHandler("yMirror")}),n.createElement("br",null),n.createElement("input",{type:"file",id:"imageLoader",name:"imageLoader",onChange:this.handleFile})))}}]),t}(n.Component);function R(e,t,a,n,r,s,o){var i,l,c=e.length,u=[],h=4*(t+a*s),p=h,f=h,v=4*s,d=[e[h],e[h+1],e[h+2],e[h+3]];if(console.log(d,n),!X(h,d,n,e,c,r,s))return!1;u.push(h);for(;u.length;){0;if(Y(h=u.pop(),d,n,e,c,r,s)){for(p=h,f=h,i=(l=parseInt(h/v)*v-1)+v-1;l<f&&l<(f-=4)&&Y(f,d,n,e,c,r,s);)0;for(;i>p&&i>(p+=4)&&Y(p,d,n,e,c,r,s);)0;for(var m=f+4;m<p;m+=4)m-v>=0&&X(m-v,d,n,e,c,r,s)&&u.push(m-v),m+v<c&&X(m+v,d,n,e,c,r,s)&&u.push(m+v)}}return e}function X(e,t,a,n,r,s,o){return!(e<0||e>=r)&&(0===n[e+3]&&a.a>0||!(Math.abs(t[3]-a.a)<=s&&Math.abs(t[0]-a.r)<=s&&Math.abs(t[1]-a.g)<=s&&Math.abs(t[2]-a.b)<=s)&&(t[3]===n[e+3]&&t[0]===n[e]&&t[1]===n[e+1]&&t[2]===n[e+2]||Math.abs(t[3]-n[e+3])<=s&&Math.abs(t[0]-n[e])<=s&&Math.abs(t[1]-n[e+1])<=s&&Math.abs(t[2]-n[e+2])<=s))}function Y(e,t,a,n,r,s,o){return!!X(e,t,a,n,r,s)&&(n[e]=a.r,n[e+1]=a.g,n[e+2]=a.b,n[e+3]=a.a,!0)}function U(e,t,a,n,r,s,o){return!(e<0||e>=r)&&(0===n[e+3]&&a.a>0||!(Math.abs(t[3]-a.a)<=s&&Math.abs(t[0]-a.r)<=s&&Math.abs(t[1]-a.g)<=s&&Math.abs(t[2]-a.b)<=s)&&(t[3]===n[e+3]&&t[0]===n[e]&&t[1]===n[e+1]&&t[2]===n[e+2]||Math.abs(t[3]-n[e+3])<=255-s&&Math.abs(t[0]-n[e])<=s&&Math.abs(t[1]-n[e+1])<=s&&Math.abs(t[2]-n[e+2])<=s))}function W(e,t,a,n,r,s,o){return!!U(e,t,a,n,r,s)&&(n[e]=a.r,n[e+1]=a.g,n[e+2]=a.b,n[e+3]=a.a,!0)}var K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handlePaintFillChose=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{fill:e}))},a.handleToleranceChang=function(e){a.setTolerance(+e.target.value)},a.setTolerance=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{tolerance:e}))},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.value;return r.a.createElement("div",{className:"paint"},r.a.createElement("div",null,"paint"),r.a.createElement("div",{className:"brushbody"},r.a.createElement("input",{type:"range",min:0,max:255,step:1,value:e.tolerance,onChange:this.handleToleranceChang}),r.a.createElement(x,{text:"(h)",codes:[72,104],value:e.tolerance,onChange:this.setTolerance,step:.5,min:0,max:255}),r.a.createElement(S,{items:Object.values(b),value:e.fill,onChange:this.handlePaintFillChose})))}}]),t}(r.a.PureComponent),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).setBrushSize=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{size:e}))},a.handleSizeChange=function(e){a.setBrushSize(+e.target.value)},a.setOpacity=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{opacity:e}))},a.handleOpacityChang=function(e){a.setOpacity(+e.target.value)},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.min,n=e.max;return r.a.createElement("div",{className:"line"},r.a.createElement("div",null,"line"),r.a.createElement("div",{className:"brushbody"},r.a.createElement("input",{type:"range",min:1,max:100,value:t.size,onChange:this.handleSizeChange}),r.a.createElement(x,{text:"(f)",codes:[70,102,1072,1040],value:t.size,onChange:this.setBrushSize,step:.5,min:a,max:n}),r.a.createElement("input",{type:"range",min:0,max:1,step:.05,value:t.opacity,onChange:this.handleOpacityChang}),r.a.createElement(x,{text:"(g)",codes:[71,103],value:t.opacity,step:.01,onChange:this.setOpacity,min:0,max:1})))}}]),t}(r.a.PureComponent),q=a(62),F=(a(80),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).order=[2,1,2,1,2],a.state={i:0,open:!1},a.handleMouseEnter=function(e){return function(t){e===a.order[a.state.i]?(console.log(e+1,a.order[a.state.i]),a.setState(function(e){return{i:e.i+1}},function(){a.state.i===a.order.length&&(a.setState({open:!0}),a.setState({i:0}))})):e!==a.order[0]?a.setState(function(e){return{i:0}}):a.setState(function(e){return{i:1}})}},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.open?this.props.children:r.a.createElement("div",{className:"enter"},[0,1,2,3,4].map(function(t){return r.a.createElement("div",{key:t,className:"enter-door",onMouseEnter:e.handleMouseEnter(t)})}))}}]),t}(r.a.PureComponent)),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).setBrushSize=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{size:e}))},a.handleSizeChange=function(e){a.setBrushSize(+e.target.value)},a.setOpacity=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{opacity:e}))},a.handleOpacityChang=function(e){a.setOpacity(+e.target.value)},a.selectType=function(e){var t=a.props,n=t.onChange,r=t.value;n&&n(Object(l.a)({},r,{type:e}))},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onNext,a=e.onPrev,n=e.value,s=e.patterns;return r.a.createElement("div",{className:"brush"},r.a.createElement("div",null,"pattern"),r.a.createElement("div",{className:"brushbody"},0===s.length&&r.a.createElement("div",null,"none"),1===s.length&&n,s.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"patternVal"}," ",n," "),r.a.createElement("div",null,r.a.createElement("button",{onClick:t,className:"moveHandlerTip"},"<")),r.a.createElement("div",null,r.a.createElement("button",{onClick:a,className:"moveHandlerTip"},">")))))}}]),t}(r.a.PureComponent),Z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={keys:{},canvas:{w:450,h:450},brush:{size:8,opacity:1,type:C.Circle},line:{size:8,opacity:1},color:{value:"#000000"},paint:{fill:b.Color,tolerance:0},patterns:[],currentPattern:0,currentTool:g.Brush},a.handleCanvasChange=function(e){return a.setState(function(t){return{canvas:Object(l.a)({},t.canvas,{image:e})}})},a.handleBrushChange=function(e){return a.setState({brush:e})},a.handleColorChange=function(e){return a.setState({color:e})},a.handlePaintChange=function(e){return a.setState({paint:e})},a.handleLineChange=function(e){return a.setState({line:e})},a.handlePatternChange=function(e){return function(t){a.setState(function(a){return{patterns:a.patterns.map(function(a,n){return n===e?t:a})}})}},a.handleAddPattern=function(e){a.setState(function(e){return{patterns:[].concat(Object(i.a)(e.patterns),[w(a.refs.canvas.ctx)({w:50,h:50})])}})},a.removePattern=function(e){return function(){return a.setState(function(t){var n=a.state.patterns.filter(function(t,a){return a!==e});return{patterns:n,currentPattern:n[t.currentPattern]?t.currentPattern:0!==n.length?n.length-1:0}})}},a.handleCurrentPatternChose=function(e){return function(t){return a.setState({currentPattern:e})}},a.handleToolChose=function(e){return a.setState({currentTool:e})},a.drawProcessing=function(e,t,n,r){if(a.state.currentTool===g.Brush){if(t.fillStyle=function(e,t){var a=j(e,t);return"rgba(".concat(a.r,",").concat(a.g,",").concat(a.b,",").concat(a.a,")")}(a.state.color.value),t.globalAlpha=a.state.brush.opacity,a.state.brush.type===C.Square)t.fillRect(e.offsetX-a.state.brush.size/2,e.offsetY-a.state.brush.size/2,a.state.brush.size,a.state.brush.size);else if(a.state.brush.type===C.Circle)t.beginPath(),t.arc(e.offsetX,e.offsetY,a.state.brush.size/2,0,2*Math.PI),t.fill();else if(a.state.brush.type===C.Pattern&&a.state.patterns[a.state.currentPattern]){var s=a.state.patterns[a.state.currentPattern].image,o=a.state.patterns[a.state.currentPattern].imageMasked;t.drawImage(o,e.offsetX-s.width/2,e.offsetY-s.height/2,s.width,s.height)}t.globalAlpha=1}else a.state.currentTool===g.Line&&r&&(t.globalAlpha=a.state.line.opacity,t.beginPath(),t.moveTo(r.offsetX,r.offsetY),t.lineTo(e.offsetX,e.offsetY),t.strokeStyle=a.state.color.value,t.lineWidth=a.state.line.size,t.stroke(),t.globalAlpha=1,t.closePath())},a.clickProcessing=function(e,t,n){if(a.state.currentTool===g.Paint)if(a.state.paint.fill===b.Color){var r=t.getImageData(0,0,n.width,n.height),s=r.data,o=r.width,i=(r.height,j(a.state.color.value));R(s,e.offsetX,e.offsetY,i,a.state.paint.tolerance,o),t.putImageData(r,0,0)}else if(a.state.paint.fill===b.Pattern&&a.state.patterns[a.state.currentPattern]){var l=t.getImageData(0,0,n.width,n.height),c=l.data,u=l.width,h=(l.height,a.state.patterns[a.state.currentPattern]);!function(e,t,a,n,r,s,o,i,l,c){var u,h,p=l?function(e,t,a){var n=e/4%t;return Math.trunc(n/a)%2===0?n%a:a-n%a}:function(e,t,a){return e/4%t%a},f=c?function(e,t,a){var n=Math.floor(e/4/t);return Math.trunc(n/a)%2===0?n%a:a-n%a}:function(e,t,n){return a=Math.floor(e/4/t)%n},v={r:255,g:0,b:0,a:255},d=e.length,m=[],g=[],b=4*(t+a*o),C=b,y=b,E=4*o,w=[e[b],e[b+1],e[b+2],e[b+3]],k=new Uint8ClampedArray(e);if(!U(b,w,v,e,d,s))return!1;m.push(b);for(var O=0;m.length;)if(O++,W(b=m.pop(),w,v,e,d,s)){for(g.push(b),C=b,y=b,u=(h=parseInt(b/E)*E-1)+E-1;h<y&&h<(y-=4)&&W(y,w,v,e,d,s);)g.push(y);for(;u>C&&u>(C+=4)&&W(C,w,v,e,d,s);)g.push(C);for(var P=y+4;P<C;P+=4)P-E>=0&&U(P-E,w,v,e,d,s)&&m.push(P-E),P+E<d&&U(P+E,w,v,e,d,s)&&m.push(P+E)}console.log(O),g.forEach(function(t){var a=4*(p(t,o,n.width)+f(t,o,n.height)*n.width),s=[n.data[a],n.data[a+1],n.data[a+2],n.data[a+3]],i=[r.data[a],r.data[a+1],r.data[a+2],r.data[a+3]];0===i[0]&&0===i[1]&&0===i[2]&&255===i[3]?(e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3]):(e[t]=k[t],e[t+1]=k[t+1],e[t+2]=k[t+2],e[t+3]=k[t+3])})}(c,e.offsetX,e.offsetY,h.image,h.mask,a.state.paint.tolerance,u,0,h.xMirror,h.yMirror),t.putImageData(l,0,0)}},a.maskDrawProcessing=function(e,t,n,r){if(a.state.currentTool===g.Brush)if(a.state.brush.type===C.Pattern&&a.state.patterns[a.state.currentPattern]){var s=a.state.patterns[a.state.currentPattern].mask,o=a.state.patterns[a.state.currentPattern].imageMask;t.drawImage(o,e.offsetX-s.width/2,e.offsetY-s.height/2,s.width,s.height)}else"#ffffff"===a.state.color.value.toLocaleLowerCase()?a.state.brush.type===C.Square?t.clearRect(e.offsetX-a.state.brush.size/2,e.offsetY-a.state.brush.size/2,a.state.brush.size,a.state.brush.size):a.state.brush.type===C.Circle&&k(t,e.offsetX,e.offsetY,a.state.brush.size/2):(t.fillStyle="#000000",a.state.brush.type===C.Square?t.fillRect(e.offsetX-a.state.brush.size/2,e.offsetY-a.state.brush.size/2,a.state.brush.size,a.state.brush.size):a.state.brush.type===C.Circle&&O(t,e.offsetX,e.offsetY,a.state.brush.size/2));else a.state.currentTool===g.Line&&r&&("#ffffff"===a.state.color.value.toLocaleLowerCase()?(t.globalCompositeOperation="destination-out",t.beginPath(),t.moveTo(r.offsetX,r.offsetY),t.lineTo(e.offsetX,e.offsetY),t.strokeStyle="black",t.lineWidth=a.state.line.size,t.stroke(),t.closePath(),t.globalCompositeOperation="source-over"):(t.beginPath(),t.moveTo(r.offsetX,r.offsetY),t.lineTo(e.offsetX,e.offsetY),t.strokeStyle="black",t.lineWidth=a.state.line.size,t.stroke(),t.closePath()))},a.maskClickProcessing=function(e,t,n){if(a.state.currentTool===g.Paint)if(a.state.paint.fill===b.Color){var r=t.getImageData(0,0,n.width,n.height),s=r.data,o=r.width,i=(r.height,"#ffffff"===a.state.color.value.toLocaleLowerCase()?{r:0,g:0,b:0,a:0}:{r:0,g:0,b:0,a:255});R(s,e.offsetX,e.offsetY,i,a.state.paint.tolerance,o),t.putImageData(r,0,0)}else if(a.state.paint.fill===b.Pattern&&a.state.patterns[a.state.currentPattern]){var l=t.getImageData(0,0,n.width,n.height),c=l.data,u=l.width;l.height;!function(e,t,a,n,r,s,o){var i,l,c={r:255,g:0,b:0,a:255},u=e.length,h=[],p=[],f=4*(t+a*s),v=f,d=f,m=4*s,g=[e[f],e[f+1],e[f+2],e[f+3]],b=new Uint8ClampedArray(e);if(!U(f,g,c,e,u,r))return!1;h.push(f);for(var C=0;h.length;)if(C++,W(f=h.pop(),g,c,e,u,r)){for(p.push(f),v=f,d=f,i=(l=parseInt(f/m)*m-1)+m-1;l<d&&l<(d-=4)&&W(d,g,c,e,u,r);)p.push(d);for(;i>v&&i>(v+=4)&&W(v,g,c,e,u,r);)p.push(v);for(var y=d+4;y<v;y+=4)y-m>=0&&U(y-m,g,c,e,u,r)&&h.push(y-m),y+m<u&&U(y+m,g,c,e,u,r)&&h.push(y+m)}console.log(C),p.forEach(function(t){var a=4*(t/4%s%n.width+Math.floor(t/4/s)%n.height*n.width),r=[0,0,0,255],o=[n.data[a],n.data[a+1],n.data[a+2],n.data[a+3]];0===o[0]&&0===o[1]&&0===o[2]&&255===o[3]?(e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3]):(e[t]=b[t],e[t+1]=b[t+1],e[t+2]=b[t+2],e[t+3]=b[t+3])})}(c,e.offsetX,e.offsetY,a.state.patterns[a.state.currentPattern].mask,a.state.paint.tolerance,u),t.putImageData(l,0,0)}},a.save=function(){var e=a.refs.canvas.canvas.toDataURL("image/jpeg"),t=document.createElement("a");document.body.appendChild(t),t.href=e,t.download="ZzZzZzZ.jpg",t.click(),document.body.removeChild(t)},a.keyMap={PREV:"1",NEXT:"2",BRUSH:"q",BRUSH_S:"w",BRUSH_C:"e",BRUSH_P:"r",PAINT:"a",PAINT_C:"s",PAINT_P:"d",LINE:"z",WHITE:"x",BLACK:"c",RAND:"v"},a.hotKeysHandlers={NEXT:function(){return a.setState(function(e){return{currentPattern:(e.currentPattern+1)%e.patterns.length}})},PREV:function(){return a.setState(function(e){return{currentPattern:(e.currentPattern-1+e.patterns.length)%e.patterns.length}})},BRUSH:function(){return a.setState({currentTool:g.Brush})},BRUSH_S:function(){return a.setState(function(e){return{brush:Object(l.a)({},e.brush,{type:C.Square})}})},BRUSH_C:function(){return a.setState(function(e){return{brush:Object(l.a)({},e.brush,{type:C.Circle})}})},BRUSH_P:function(){return a.setState(function(e){return{brush:Object(l.a)({},e.brush,{type:C.Pattern})}})},PAINT:function(){return a.setState({currentTool:g.Paint})},PAINT_C:function(){return a.setState(function(e){return{paint:Object(l.a)({},e.paint,{fill:b.Color})}})},PAINT_P:function(){return a.setState(function(e){return{paint:Object(l.a)({},e.paint,{fill:b.Pattern})}})},LINE:function(){return a.setState({currentTool:g.Line})},WHITE:function(){return a.setState(function(e){return{color:Object(l.a)({},e.color,{value:"#ffffff"})}})},BLACK:function(){return a.setState(function(e){return{color:Object(l.a)({},e.color,{value:"#000000"})}})},RAND:function(){return a.setState(function(e){var t=E(0,255),a=E(0,255),n=E(0,255),r=T.a.rgb([t,a,n]).hex();return{color:Object(l.a)({},e.color,{value:r})}})}},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(q.GlobalHotKeys,{keyMap:this.keyMap,handlers:this.hotKeysHandlers},r.a.createElement("div",{className:"all"},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"kunteynir"},r.a.createElement(S,{items:Object.values(g),value:this.state.currentTool,onChange:this.handleToolChose}),this.state.currentTool===g.Brush&&r.a.createElement(M,{value:this.state.brush,onChange:this.handleBrushChange}),this.state.currentTool===g.Paint&&r.a.createElement(K,{value:this.state.paint,onChange:this.handlePaintChange}),this.state.currentTool===g.Line&&r.a.createElement(_,{value:this.state.line,onChange:this.handleLineChange}),r.a.createElement(V,{value:this.state.currentPattern,patterns:this.state.patterns,onNext:this.hotKeysHandlers.NEXT,onPrev:this.hotKeysHandlers.PREV}),r.a.createElement(N,{onClick:this.clickProcessing,onDraw:this.drawProcessing,value:this.state.color,onWhite:this.hotKeysHandlers.WHITE,onBlack:this.hotKeysHandlers.BLACK,onRand:this.hotKeysHandlers.RAND,onChange:this.handleColorChange}))),r.a.createElement("div",{className:"patterns"},this.state.patterns.map(function(t,a){return r.a.createElement(B,{chosen:a===e.state.currentPattern,onChose:e.handleCurrentPatternChose(a),key:a,onPatternDraw:e.drawProcessing,onPatternClick:e.clickProcessing,onMaskDraw:e.maskDrawProcessing,onMaskClick:e.maskClickProcessing,name:a,value:t,onRemove:e.removePattern(a),onChange:e.handlePatternChange(a)})}),r.a.createElement("div",{className:"patternEditor"},r.a.createElement(m,{ref:"canvas",width:this.state.canvas.w,height:this.state.canvas.h,value:this.state.canvas.image,onChange:this.handleCanvasChange,onClick:this.clickProcessing,onDraw:this.drawProcessing}),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{onClick:this.handleAddPattern},"+ pattern"),r.a.createElement("button",{onClick:this.save},"save")))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){e.exports=a(171)},69:function(e,t,a){},70:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.7c99a1e2.chunk.js.map