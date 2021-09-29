(this.webpackJsonpproduct=this.webpackJsonpproduct||[]).push([[14],{223:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(21)),u=r(a(22)),o=r(a(27)),d=r(a(29)),s=r(a(28)),i=r(a(30)),c=r(a(10)),f=l(a(0)),p=r(a(5)),v=r(a(224)),m={player:c.default.object,actions:c.default.object,rates:c.default.array,className:c.default.string},h=function(e){function t(e,a){var l;return(0,n.default)(this,t),(l=(0,o.default)(this,(0,d.default)(t).call(this,e,a))).handleSelectItem=l.handleSelectItem.bind((0,s.default)(l)),l}return(0,i.default)(t,e),(0,u.default)(t,[{key:"handleSelectItem",value:function(e){var t=this.props,a=t.rates,l=t.actions;e>=0&&e<a.length&&l.changeRate(a[e])}},{key:"render",value:function(){var e=this.props,t=e.rates,a=e.player,l=t.map((function(e){return{label:"".concat(e,"x"),value:e}})),r=t.indexOf(a.playbackRate)||0;return f.default.createElement(v.default,{className:(0,p.default)("video-react-playback-rate",this.props.className),onSelectItem:this.handleSelectItem,items:l,selectedIndex:r},f.default.createElement("span",{className:"video-react-control-text"},"Playback Rate"),f.default.createElement("div",{className:"video-react-playback-rate-value"},"".concat(a.playbackRate.toFixed(2),"x")))}}]),t}(f.Component);h.propTypes=m,h.defaultProps={rates:[2,1.5,1.25,1,.5,.25]},h.displayName="PlaybackRateMenuButton";var y=h;t.default=y},304:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(220)),u=r(a(21)),o=r(a(22)),d=r(a(27)),s=r(a(29)),i=r(a(28)),c=r(a(30)),f=r(a(10)),p=l(a(0)),v=r(a(5)),m=r(a(305)),h=r(a(310)),y=r(a(311)),k=r(a(313)),b=r(a(314)),g=r(a(315)),N=r(a(316)),T=r(a(317)),M=r(a(318)),C=r(a(319)),E=r(a(223)),x=a(70),P={children:f.default.any,autoHide:f.default.bool,autoHideTime:f.default.number,disableDefaultControls:f.default.bool,disableCompletely:f.default.bool,className:f.default.string},w=function(e){function t(e){var a;return(0,u.default)(this,t),(a=(0,d.default)(this,(0,s.default)(t).call(this,e))).getDefaultChildren=a.getDefaultChildren.bind((0,i.default)(a)),a.getFullChildren=a.getFullChildren.bind((0,i.default)(a)),a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"getDefaultChildren",value:function(){return[p.default.createElement(h.default,{key:"play-toggle",order:1}),p.default.createElement(C.default,{key:"volume-menu-button",order:4}),p.default.createElement(N.default,{key:"current-time-display",order:5.1}),p.default.createElement(M.default,{key:"time-divider",order:5.2}),p.default.createElement(T.default,{key:"duration-display",order:5.3}),p.default.createElement(m.default,{key:"progress-control",order:6}),p.default.createElement(b.default,{key:"fullscreen-toggle",order:8})]}},{key:"getFullChildren",value:function(){return[p.default.createElement(h.default,{key:"play-toggle",order:1}),p.default.createElement(k.default,{key:"replay-control",order:2}),p.default.createElement(y.default,{key:"forward-control",order:3}),p.default.createElement(C.default,{key:"volume-menu-button",order:4}),p.default.createElement(N.default,{key:"current-time-display",order:5}),p.default.createElement(M.default,{key:"time-divider",order:6}),p.default.createElement(T.default,{key:"duration-display",order:7}),p.default.createElement(m.default,{key:"progress-control",order:8}),p.default.createElement(g.default,{key:"remaining-time-display",order:9}),p.default.createElement(E.default,{rates:[1,1.25,1.5,2],key:"playback-rate",order:10}),p.default.createElement(b.default,{key:"fullscreen-toggle",order:11})]}},{key:"getChildren",value:function(){var e=p.default.Children.toArray(this.props.children),t=this.props.disableDefaultControls?[]:this.getDefaultChildren(),a=this.props,l=(a.className,(0,n.default)(a,["className"]));return(0,x.mergeAndSortChildren)(t,e,l)}},{key:"render",value:function(){var e=this.props,t=e.autoHide,a=e.className,l=e.disableCompletely,r=this.getChildren();return l?null:p.default.createElement("div",{className:(0,v.default)("video-react-control-bar",{"video-react-control-bar-auto-hide":t},a)},r)}}]),t}(p.Component);t.default=w,w.propTypes=P,w.defaultProps={autoHide:!0,disableCompletely:!1},w.displayName="ControlBar"},305:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(132)),u=r(a(21)),o=r(a(22)),d=r(a(27)),s=r(a(29)),i=r(a(28)),c=r(a(30)),f=r(a(10)),p=l(a(0)),v=r(a(5)),m=l(a(162)),h=r(a(306)),y={player:f.default.object,className:f.default.string},k=function(e){function t(e,a){var l;return(0,u.default)(this,t),(l=(0,d.default)(this,(0,s.default)(t).call(this,e,a))).state={mouseTime:{time:null,position:0}},l.handleMouseMoveThrottle=l.handleMouseMove.bind((0,i.default)(l)),l}return(0,c.default)(t,e),(0,o.default)(t,[{key:"handleMouseMove",value:function(e){if(e.pageX){var t=this.props.player.duration,a=this.seekBar,l=m.getPointerPosition(a,e).x*t,r=e.pageX-m.findElPosition(a).left;this.setState({mouseTime:{time:l,position:r}})}}},{key:"render",value:function(){var e=this,t=this.props.className;return p.default.createElement("div",{onMouseMove:this.handleMouseMoveThrottle,className:(0,v.default)("video-react-progress-control video-react-control",t)},p.default.createElement(h.default,(0,n.default)({mouseTime:this.state.mouseTime,ref:function(t){e.seekBar=t}},this.props)))}}]),t}(p.Component);t.default=k,k.propTypes=y,k.displayName="ProgressControl"},306:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(21)),u=r(a(22)),o=r(a(27)),d=r(a(29)),s=r(a(28)),i=r(a(30)),c=r(a(10)),f=l(a(0)),p=r(a(5)),v=r(a(222)),m=r(a(307)),h=r(a(308)),y=r(a(309)),k=a(70),b={player:c.default.object,mouseTime:c.default.object,actions:c.default.object,className:c.default.string},g=function(e){function t(e,a){var l;return(0,n.default)(this,t),(l=(0,o.default)(this,(0,d.default)(t).call(this,e,a))).getPercent=l.getPercent.bind((0,s.default)(l)),l.getNewTime=l.getNewTime.bind((0,s.default)(l)),l.stepForward=l.stepForward.bind((0,s.default)(l)),l.stepBack=l.stepBack.bind((0,s.default)(l)),l.handleMouseDown=l.handleMouseDown.bind((0,s.default)(l)),l.handleMouseMove=l.handleMouseMove.bind((0,s.default)(l)),l.handleMouseUp=l.handleMouseUp.bind((0,s.default)(l)),l}return(0,i.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"getPercent",value:function(){var e=this.props.player,t=e.currentTime,a=(e.seekingTime||t)/e.duration;return a>=1?1:a}},{key:"getNewTime",value:function(e){var t=this.props.player.duration,a=this.slider.calculateDistance(e)*t;return a===t?a-.1:a}},{key:"handleMouseDown",value:function(){}},{key:"handleMouseUp",value:function(e){var t=this.props.actions,a=this.getNewTime(e);t.seek(a),t.handleEndSeeking(a)}},{key:"handleMouseMove",value:function(e){var t=this.props.actions,a=this.getNewTime(e);t.handleSeekingTime(a)}},{key:"stepForward",value:function(){this.props.actions.forward(5)}},{key:"stepBack",value:function(){this.props.actions.replay(5)}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,l=a.currentTime,r=a.seekingTime,n=a.duration,u=a.buffered,o=t.mouseTime,d=r||l;return f.default.createElement(v.default,{ref:function(t){e.slider=t},label:"video progress bar",className:(0,p.default)("video-react-progress-holder",this.props.className),valuenow:(100*this.getPercent()).toFixed(2),valuetext:(0,k.formatTime)(d,n),onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp,getPercent:this.getPercent,stepForward:this.stepForward,stepBack:this.stepBack},f.default.createElement(h.default,{buffered:u,currentTime:d,duration:n}),f.default.createElement(y.default,{duration:n,mouseTime:o}),f.default.createElement(m.default,{currentTime:d,duration:n}))}}]),t}(f.Component);t.default=g,g.propTypes=b,g.displayName="SeekBar"},307:function(e,t,a){"use strict";var l=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=l(a(10)),n=l(a(0)),u=l(a(5)),o=a(70),d={currentTime:r.default.number,duration:r.default.number,percentage:r.default.string,className:r.default.string};function s(e){var t=e.currentTime,a=e.duration,l=e.percentage,r=e.className;return n.default.createElement("div",{"data-current-time":(0,o.formatTime)(t,a),className:(0,u.default)("video-react-play-progress video-react-slider-bar",r),style:{width:l}},n.default.createElement("span",{className:"video-react-control-text"},"Progress: ".concat(l)))}s.propTypes=d,s.displayName="PlayProgressBar"},308:function(e,t,a){"use strict";var l=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var r=l(a(10)),n=l(a(0)),u=l(a(5)),o={duration:r.default.number,buffered:r.default.object,className:r.default.string};function d(e){var t=e.buffered,a=e.duration,l=e.className;if(!t||!t.length)return null;var r=t.end(t.length-1),o={};function d(e,t){var a=e/t||0;return"".concat(100*(a>=1?1:a),"%")}r>a&&(r=a),o.width=d(r,a);for(var s=[],i=0;i<t.length;i++){var c=t.start(i),f=t.end(i),p=n.default.createElement("div",{style:{left:d(c,r),width:d(f-c,r)},key:"part-".concat(i)});s.push(p)}return 0===s.length&&(s=null),n.default.createElement("div",{style:o,className:(0,u.default)("video-react-load-progress",l)},n.default.createElement("span",{className:"video-react-control-text"},"Loaded: 0%"),s)}d.propTypes=o,d.displayName="LoadProgressBar"},309:function(e,t,a){"use strict";var l=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(10)),n=l(a(0)),u=l(a(5)),o=a(70);function d(e){var t=e.duration,a=e.mouseTime,l=e.className,r=e.text;if(!a.time)return null;var d=r||(0,o.formatTime)(a.time,t);return n.default.createElement("div",{className:(0,u.default)("video-react-mouse-display",l),style:{left:"".concat(a.position,"px")},"data-current-time":d})}d.propTypes={duration:r.default.number,mouseTime:r.default.object,className:r.default.string},d.displayName="MouseTimeDisplay";var s=d;t.default=s},310:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(21)),u=r(a(22)),o=r(a(27)),d=r(a(29)),s=r(a(28)),i=r(a(30)),c=r(a(10)),f=l(a(0)),p=r(a(5)),v={actions:c.default.object,player:c.default.object,className:c.default.string},m=function(e){function t(e,a){var l;return(0,n.default)(this,t),(l=(0,o.default)(this,(0,d.default)(t).call(this,e,a))).handleClick=l.handleClick.bind((0,s.default)(l)),l}return(0,i.default)(t,e),(0,u.default)(t,[{key:"handleClick",value:function(){var e=this.props,t=e.actions;e.player.paused?t.play():t.pause()}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,l=t.className,r=a.paused?"Play":"Pause";return f.default.createElement("button",{ref:function(t){e.button=t},className:(0,p.default)(l,{"video-react-play-control":!0,"video-react-control":!0,"video-react-button":!0,"video-react-paused":a.paused,"video-react-playing":!a.paused}),type:"button",tabIndex:"0",onClick:this.handleClick},f.default.createElement("span",{className:"video-react-control-text"},r))}}]),t}(f.Component);t.default=m,m.propTypes=v,m.displayName="PlayToggle"},311:function(e,t,a){"use strict";var l=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,l(a(312)).default)("forward");r.displayName="ForwardControl";var n=r;t.default=n},312:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(21)),u=r(a(22)),o=r(a(27)),d=r(a(29)),s=r(a(28)),i=r(a(30)),c=r(a(10)),f=l(a(0)),p={actions:c.default.object,className:c.default.string,seconds:c.default.oneOf([5,10,30])},v={seconds:10};t.default=function(e){var t=function(t){function a(e,t){var l;return(0,n.default)(this,a),(l=(0,o.default)(this,(0,d.default)(a).call(this,e,t))).handleClick=l.handleClick.bind((0,s.default)(l)),l}return(0,i.default)(a,t),(0,u.default)(a,[{key:"handleClick",value:function(){var t=this.props,a=t.actions,l=t.seconds;"forward"===e?a.forward(l):a.replay(l)}},{key:"render",value:function(){var t=this,a=this.props,l=a.seconds,r=a.className,n=["video-react-control","video-react-button","video-react-icon"];return n.push("video-react-icon-".concat(e,"-").concat(l),"video-react-".concat(e,"-control")),r&&n.push(r),f.default.createElement("button",{ref:function(e){t.button=e},className:n.join(" "),type:"button",onClick:this.handleClick},f.default.createElement("span",{className:"video-react-control-text"},"".concat(e," ").concat(l," seconds")))}}]),a}(f.Component);return t.propTypes=p,t.defaultProps=v,t}},313:function(e,t,a){"use strict";var l=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,l(a(312)).default)("replay");r.displayName="ReplayControl";var n=r;t.default=n},314:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(21)),u=r(a(22)),o=r(a(27)),d=r(a(29)),s=r(a(28)),i=r(a(30)),c=r(a(10)),f=l(a(0)),p=r(a(5)),v={actions:c.default.object,player:c.default.object,className:c.default.string},m=function(e){function t(e,a){var l;return(0,n.default)(this,t),(l=(0,o.default)(this,(0,d.default)(t).call(this,e,a))).handleClick=l.handleClick.bind((0,s.default)(l)),l}return(0,i.default)(t,e),(0,u.default)(t,[{key:"handleClick",value:function(){var e=this.props,t=e.player;e.actions.toggleFullscreen(t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,l=t.className;return f.default.createElement("button",{className:(0,p.default)(l,{"video-react-icon-fullscreen-exit":a.isFullscreen,"video-react-icon-fullscreen":!a.isFullscreen},"video-react-fullscreen-control video-react-control video-react-button video-react-icon"),ref:function(t){e.button=t},type:"button",tabIndex:"0",onClick:this.handleClick},f.default.createElement("span",{className:"video-react-control-text"},"Non-Fullscreen"))}}]),t}(f.Component);t.default=m,m.propTypes=v,m.displayName="FullscreenToggle"},319:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(132)),u=r(a(21)),o=r(a(22)),d=r(a(27)),s=r(a(29)),i=r(a(28)),c=r(a(30)),f=r(a(10)),p=l(a(0)),v=r(a(5)),m=r(a(724)),h=r(a(726)),y={player:f.default.object,actions:f.default.object,vertical:f.default.bool,className:f.default.string,alwaysShowVolume:f.default.bool},k=function(e){function t(e,a){var l;return(0,u.default)(this,t),(l=(0,d.default)(this,(0,s.default)(t).call(this,e,a))).state={active:!1},l.handleClick=l.handleClick.bind((0,i.default)(l)),l.handleFocus=l.handleFocus.bind((0,i.default)(l)),l.handleBlur=l.handleBlur.bind((0,i.default)(l)),l}return(0,c.default)(t,e),(0,o.default)(t,[{key:"handleClick",value:function(){var e=this.props,t=e.player;e.actions.mute(!t.muted)}},{key:"handleFocus",value:function(){this.setState({active:!0})}},{key:"handleBlur",value:function(){this.setState({active:!1})}},{key:"render",value:function(){var e=this.props,t=e.vertical,a=e.player,l=e.className,r=!t,u=this.volumeLevel;return p.default.createElement(m.default,{className:(0,v.default)(l,{"video-react-volume-menu-button-vertical":t,"video-react-volume-menu-button-horizontal":!t,"video-react-vol-muted":a.muted,"video-react-vol-0":0===u&&!a.muted,"video-react-vol-1":1===u,"video-react-vol-2":2===u,"video-react-vol-3":3===u,"video-react-slider-active":this.props.alwaysShowVolume||this.state.active,"video-react-lock-showing":this.props.alwaysShowVolume||this.state.active},"video-react-volume-menu-button"),onClick:this.handleClick,inline:r},p.default.createElement(h.default,(0,n.default)({onFocus:this.handleFocus,onBlur:this.handleBlur},this.props)))}},{key:"volumeLevel",get:function(){var e=this.props.player,t=e.volume,a=e.muted,l=3;return 0===t||a?l=0:t<.33?l=1:t<.67&&(l=2),l}}]),t}(p.Component);k.propTypes=y,k.defaultProps={vertical:!1},k.displayName="VolumeMenuButton";var b=k;t.default=b},731:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(21)),u=r(a(22)),o=r(a(27)),d=r(a(29)),s=r(a(30)),i=l(a(0)),c=r(a(223)),f=a(70),p=function(e){function t(e,a){var l;return(0,n.default)(this,t),l=(0,o.default)(this,(0,d.default)(t).call(this,e,a)),(0,f.deprecatedWarning)("PlaybackRate","PlaybackRateMenuButton"),l}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return i.default.createElement(c.default,this.props)}}]),t}(i.Component);t.default=p,p.displayName="PlaybackRate"},732:function(e,t,a){"use strict";var l=a(25),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(21)),u=r(a(22)),o=r(a(27)),d=r(a(29)),s=r(a(28)),i=r(a(30)),c=r(a(10)),f=l(a(0)),p=r(a(5)),v=r(a(224)),m={player:c.default.object,actions:c.default.object,className:c.default.string,offMenuText:c.default.string,showOffMenu:c.default.bool,kinds:c.default.array},h=function(e){function t(e,a){var l;return(0,n.default)(this,t),(l=(0,o.default)(this,(0,d.default)(t).call(this,e,a))).getTextTrackItems=l.getTextTrackItems.bind((0,s.default)(l)),l.updateState=l.updateState.bind((0,s.default)(l)),l.handleSelectItem=l.handleSelectItem.bind((0,s.default)(l)),l.state=l.getTextTrackItems(),l}return(0,i.default)(t,e),(0,u.default)(t,[{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"getTextTrackItems",value:function(){var e=this.props,t=e.kinds,a=e.player,l=e.offMenuText,r=e.showOffMenu,n=a.textTracks,u=a.activeTextTrack,o={items:[],selectedIndex:0},d=Array.from(n||[]);return 0===d.length||(r&&o.items.push({label:l||"Off",value:null}),d.forEach((function(e){t.length&&!t.includes(e.kind)||o.items.push({label:e.label,value:e.language})})),o.selectedIndex=o.items.findIndex((function(e){return u&&u.language===e.value})),-1===o.selectedIndex&&(o.selectedIndex=0)),o}},{key:"updateState",value:function(){var e=this.getTextTrackItems();e.selectedIndex===this.state.selectedIndex&&this.textTrackItemsAreEqual(e.items,this.state.items)||this.setState(e)}},{key:"textTrackItemsAreEqual",value:function(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(!t[a]||e[a].label!==t[a].label||e[a].value!==t[a].value)return!1;return!0}},{key:"handleSelectItem",value:function(e){var t=this.props,a=t.player,l=t.actions,r=t.showOffMenu,n=a.textTracks;Array.from(n).forEach((function(t,a){e===(r?a+1:a)?(t.mode="showing",l.activateTextTrack(t)):t.mode="hidden"}))}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.selectedIndex;return f.default.createElement(v.default,{className:(0,p.default)("video-react-closed-caption",this.props.className),onSelectItem:this.handleSelectItem,items:t,selectedIndex:a},f.default.createElement("span",{className:"video-react-control-text"},"Closed Caption"))}}]),t}(f.Component);h.propTypes=m,h.defaultProps={offMenuText:"Off",showOffMenu:!0,kinds:["captions","subtitles"]},h.displayName="ClosedCaptionButton";var y=h;t.default=y}}]);