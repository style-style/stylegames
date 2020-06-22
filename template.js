jQuery(document).ready(function($){$("header").interactive_bg({strength:15,contain:false,scale:.95,wrapContent:false});$(".header-wrap").interactive_bg({strength:5,contain:false,scale:1.05,wrapContent:false});$("a.login-btn").click(function(){$(".wrap-models").fadeToggle();$(".login-model").fadeToggle();});$("a.search-btn").click(function(){$(".wrap-models").fadeToggle();$(".search-model").fadeToggle();});$("a.friend_icon").click(function(){$(".wrap-models").fadeToggle();$(".send-model").fadeToggle();});$("a.report_icon").click(function(){$(".wrap-models").fadeToggle();$(".report-model").fadeToggle();});$(".close-wrap-model").click(function(){$(".wrap-models").fadeOut();$(".one-model").fadeOut();});});function doBauhausReady(){bauhausCheckForPushIt();}
function bauhausCheckForPushIt(){if(jQuery.fn.pushIt){jQuery('body').pushIt({menuWidth:'270'});bauhausOffCanvasMods();}}
jQuery(document).ready(function(){doBauhausReady();});jQuery(function(){FastClick.attach(document.body);});(function(){function FastClick(layer,options){var oldOnClick;options=options||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=options.touchBoundary||10;this.layer=layer;this.tapDelay=options.tapDelay||200;if(FastClick.notNeeded(layer)){return}function bind(method,context){return function(){return method.apply(context,arguments)}}var methods=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var context=this;for(var i=0,l=methods.length;i<l;i++){context[methods[i]]=bind(context[methods[i]],context)}if(deviceIsAndroid){layer.addEventListener("mouseover",this.onMouse,true);layer.addEventListener("mousedown",this.onMouse,true);layer.addEventListener("mouseup",this.onMouse,true)}layer.addEventListener("click",this.onClick,true);layer.addEventListener("touchstart",this.onTouchStart,false);layer.addEventListener("touchmove",this.onTouchMove,false);layer.addEventListener("touchend",this.onTouchEnd,false);layer.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==="click"){rmv.call(layer,type,callback.hijacked||callback,capture)}else{rmv.call(layer,type,callback,capture)}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==="click"){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event)}}),capture)}else{adv.call(layer,type,callback,capture)}}}if(typeof layer.onclick==="function"){oldOnClick=layer.onclick;layer.addEventListener("click",function(event){oldOnClick(event)},false);layer.onclick=null}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);var deviceIsIOS4=deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);var deviceIsIOSWithBadTarget=deviceIsIOS&&(/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);var deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled){return true}break;case"input":if((deviceIsIOS&&target.type==="file")||target.disabled){return true}break;case"label":case"video":return true}return(/\bneedsclick\b/).test(target.className)};FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case"textarea":return true;case"select":return!deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!target.disabled&&!target.readOnly;default:return(/\bneedsfocus\b/).test(target.className)}};FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur()}touch=event.changedTouches[0];clickEvent=document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent)};FastClick.prototype.determineEventType=function(targetElement){if(deviceIsAndroid&&targetElement.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(targetElement){var length;if(deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf("date")!==0&&targetElement.type!=="time"){length=targetElement.value.length;targetElement.setSelectionRange(length,length)}else{targetElement.focus()}};FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode}return eventTarget};FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;if(event.targetTouches.length>1){return true}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true}if(!deviceIsIOS4){if(touch.identifier&&touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false}this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement)}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if((event.timeStamp-this.lastClickTime)<this.tapDelay){event.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true}return false};FastClick.prototype.onTouchMove=function(event){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(labelElement){if(labelElement.control!==undefined){return labelElement.control}if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor)}return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true}if((event.timeStamp-this.lastClickTime)<this.tapDelay){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==="label"){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(deviceIsAndroid){return false}targetElement=forElement}}else{if(this.needsFocus(targetElement)){if((event.timeStamp-trackingClickStart)>100||(deviceIsIOS&&window.top!==window&&targetTagName==="input")){this.targetElement=null;return false}this.focus(targetElement);this.sendClick(targetElement,event);if(!deviceIsIOS||targetTagName!=="select"){this.targetElement=null;event.preventDefault()}return false}}if(deviceIsIOS&&!deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true}}if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event)}return false};FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(event){if(!this.targetElement){return true}if(event.forwardedTouchEvent){return true}if(!event.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation()}else{event.propagationStopped=true}event.stopPropagation();event.preventDefault();return false}return true};FastClick.prototype.onClick=function(event){var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(event.target.type==="submit"&&event.detail===0){return true}permitted=this.onMouse(event);if(!permitted){this.targetElement=null}return permitted};FastClick.prototype.destroy=function(){var layer=this.layer;if(deviceIsAndroid){layer.removeEventListener("mouseover",this.onMouse,true);layer.removeEventListener("mousedown",this.onMouse,true);layer.removeEventListener("mouseup",this.onMouse,true)}layer.removeEventListener("click",this.onClick,true);layer.removeEventListener("touchstart",this.onTouchStart,false);layer.removeEventListener("touchmove",this.onTouchMove,false);layer.removeEventListener("touchend",this.onTouchEnd,false);layer.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(layer){var metaViewport;var chromeVersion;var blackberryVersion;if(typeof window.ontouchstart==="undefined"){return true}chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(deviceIsAndroid){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(deviceIsBlackBerry10){blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(blackberryVersion[1]>=10&&blackberryVersion[2]>=3){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(layer.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(layer,options){return new FastClick(layer,options)};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return FastClick})}else{if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}}}());var prefix=(function(){var styles=window.getComputedStyle(document.documentElement,''),vendor=(Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/)||(styles.OLink===''&&['','o']))[1];return{css:'-'+vendor+'-'}})();(function($){$.fn.pushIt=function(options){var settings=$.extend({leftMenu:jQuery('.pushit-left'),rightMenu:jQuery('.pushit-right'),body:jQuery('body'),container:jQuery('.page-wrapper'),pushItActiveClass:'pushit-active',containerClass:'container-pushit',menuBtn:jQuery('.menu-btn'),viewportWidth:jQuery(window).width(),menuWidth:240,menuSpeed:330,bezierCurve:'.290, .050, .140, .870',pushed:false,lastAspect:false},options);var hasOverflowScroll=typeof(jQuery('body')[0].style['-webkit-overflow-scrolling'])!=='undefined';if(hasOverflowScroll){jQuery('body').addClass('has-overflow-scroll');}
settings.body.append('<div id="pushit-overlay"></div>');var pushitOverlay=jQuery('#pushit-overlay');settings.leftMenu.addClass('pushit-left').css('left','-'+settings.menuWidth+'px').css('width',settings.menuWidth+'px');settings.rightMenu.addClass('pushit-right').css('width',settings.menuWidth+'px').css('left',settings.viewportWidth+'px');settings.container.css('position','relative').css(prefix.css+'transition',prefix.css+'transform .'+settings.menuSpeed+'s cubic-bezier('+settings.bezierCurve+')');settings.lastAspect=getAspect();jQuery('.pushit').css(prefix.css+'transition',prefix.css+'transform .'+settings.menuSpeed+'s cubic-bezier('+settings.bezierCurve+')');function getAspect(){if(jQuery(window).width()<jQuery(window).height()){return'portrait';}else{return'landscape';}}
function whichPushIt(clicked){var parent=clicked;if(parent.hasClass('pushit-left')){return'left';}else{return'right';}}
function oppositePushIt(direction){var direction=(direction=='left'?'right':'left');return direction;}
function cleanUpPushit(){setTimeout(function(){settings.container.css(prefix.css+'transform','').css('position','').css('overflow','').css('height','');pushitOverlay.css('z-index','-1');},settings.menuSpeed+300);}
function pushitCloseListener(){pushitOverlay.one('click.pushit touchmove.pushit',function(e){e.preventDefault();e.stopImmediatePropagation();togglePushIt(settings.pushed);pushitOverlay.off('click.pushit touchmove.pushit');}).css('z-index','99');}
function disableTouchMove(){settings.container.on('touchmove',function(e){});}
function enableTouchMove(){}
function repositionPushIt(){var currentWindow=jQuery(window);currentWindow.resize(function(){if(settings.rightMenu.length){settings.viewportWidth=currentWindow.width();settings.rightMenu.css('left',settings.viewportWidth+'px');}
if(settings.lastAspect!=getAspect()){settings.lastAspect=getAspect();if(jQuery('.pushit-active').length){pushitOverlay.trigger('click');cleanUpPushit();}}});}
function togglePushIt(clicked){settings.pushed=clicked;direction=whichPushIt(clicked);var side=('.pushit-'+direction);var activeSide=jQuery(side);jQuery(side).toggleClass('pushit-open');if(side=='.pushit-left'&&activeSide.hasClass('pushit-open')){disableTouchMove();pushitCloseListener();settings.container.height(window.innerHeight).css('position','fixed').css('overflow','hidden');if(prefix.css!=''){activeSide.css(prefix.css+'transform','translate3d('+settings.menuWidth+'px, 0, 0)');settings.container.css(prefix.css+'transform','translate3d('+settings.menuWidth+'px, 0, 0)');}else{activeSide.animate({left:'0'},settings.menuSpeed);settings.container.animate({left:settings.menuWidth},settings.menuSpeed);}}else if(side=='.pushit-left'&&!activeSide.hasClass('pushit-open')){enableTouchMove();if(prefix.css!=''){activeSide.css(prefix.css+'transform','translate3d(0, 0, 0)');settings.container.css(prefix.css+'transform','translate3d(0, 0, 0)');}else{activeSide.animate({left:'-'+settings.menuWidth},settings.menuSpeed);settings.container.animate({left:'0'},settings.menuSpeed);}
cleanUpPushit();}
if(side=='.pushit-right'&&jQuery(side).hasClass('pushit-open')){disableTouchMove();pushitCloseListener();settings.container.height(window.innerHeight).css('position','fixed').css('overflow','hidden');if(prefix.css!=''){activeSide.css(prefix.css+'transform','translate3d(-'+settings.menuWidth+'px, 0, 0)');settings.container.css(prefix.css+'transform','translate3d(-'+settings.menuWidth+'px, 0, 0)');}else{activeSide.animate({left:settings.viewportWidth-settings.menuWidth},settings.menuSpeed);settings.container.animate({left:'-'+settings.menuWidth},settings.menuSpeed);}}else if(side=='.pushit-right'&&!jQuery(side).hasClass('pushit-open')){enableTouchMove();if(prefix.css!=''){activeSide.css(prefix.css+'transform','translate3d(0, 0, 0)');settings.container.css(prefix.css+'transform','translate3d(0, 0, 0)');}else{activeSide.animate({left:settings.viewportWidth},settings.menuSpeed);settings.container.animate({left:'0'},settings.menuSpeed);}
cleanUpPushit();}
settings.container.toggleClass(whichPushIt(clicked));settings.body.toggleClass(settings.pushItActiveClass);settings.container.toggleClass(settings.containerClass);}
repositionPushIt();settings.menuBtn.on('click.pushit-button',function(e){e.preventDefault();e.stopImmediatePropagation();menuTarget='#'+jQuery(this).attr('data-menu-target');togglePushIt(jQuery(menuTarget).parent());});}})(jQuery);var template={score_line:'<div class="score_line$(me)">'
+'<p class="position">$(pos)</p>'
+'<p class="user"><a href="$(url)">$(username)</a></p>'
+'<p class="score">$(score)</p>'
+'<p class="date">$(date)</p>'
+'</div>',cup_score_line:'<div class="score_line$(me)">'
+'<p class="position">$(pos)</p>'
+'<p class="points">$(points)</p>'
+'<p class="user"><a href="$(url)">$(username)</a></p>'
+'<p class="score">$(score)</p>'
+'<p class="date">$(date)</p>'
+'</div>',notification:'<div class="notification" id="notification_$(id)"><img src="images/notification_delete.png" class="del_notification" alt="" style="float:right" /><span class="time">$(time)</span> $(notification)</div>',notification_menu:'<div class="notification" id="notification_menu_$(id)"><img src="$(siteurl)images/notification_delete.png" class="del_notification" alt="" /> $(notification)</div>',favoriteFile:'<div class="file" id="favourite_$(id)">'
+'<div class="icon"><a href="$(url)"><img src="$(image)" width="$(width)" height="$(height)" alt="$(title)" /></a></div>'
+'<div class="desc">'
+'<p class="link"><a href="$(url)">$(title)</a></p>'
+'<p>$(description)</p>'
+'<p><img src="images/remove.png" class="click removeFile" title="$(lang_delete)" alt="$(lang_delete)" /></p>'
+'</div></div>',favorites_menu:'<p class="favorite"><a href="$(url)">$(title)</a></p>',friend:'<div class="member" id="member_$(id)">'
+'<img class="avatar" src="$(avatar)">'
+'<div class="info">'
+'<p><a href="$(url)">$(username)</a></p>'
+'<p>$(name)</p>'
+'<p>$(location)</p>'
+'<p><img src="images/send_pm.png" class="click send_pm" />'
+' <img src="images/remove.png" class="click remove_friend" title="$(lang_remove_friend)" />'
+' $(accept)</p></div></div>',comment:'<div class="comment" id="comment_$(id)">'
+'<img class="report" src="$(siteurl)images/report.png" title="ط¨ظ„ط؛ ط¹ظ† طھط¹ظ„ظٹظ‚ ط؛ظٹط± ظ„ط§ط¦ظ‚" alt="$(lang_report)" />'
+'<p><span class="user">$(user)</span><span class="date">($(date))</span></p>'
+'<p class="text">$(comment)</p>'
+'</div>',profile_comment:'<div class="comment" id="comment_$(id)">'
+'<p><span class="user">$(user)</span><span class="date">($(date))</span></p>'
+'<p class="text">$(comment)</p>'
+'</div>',cup_game:'<div id="game_$(id)">'
+'<a href="$(url)" target="_blank"><img src="$(image)" title="$(title)" alt="$(title)" /></a>'
+'<p class="center"><img src="images/remove.png" class="click remove_game" /></p>'
+'</div>'};
