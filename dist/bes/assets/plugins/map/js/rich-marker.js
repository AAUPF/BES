function RichMarker(opt_options){var options=opt_options||{};this.ready_=false;this.dragging_=false;if(opt_options['visible']==undefined){opt_options['visible']=true;}
if(opt_options['shadow']==undefined){opt_options['shadow']='7px -3px 5px rgba(88,88,88,0.7)';}
if(opt_options['anchor']==undefined){opt_options['anchor']=RichMarkerPosition['BOTTOM'];}
this.setValues(options);}
RichMarker.prototype=new google.maps.OverlayView();window['RichMarker']=RichMarker;RichMarker.prototype.getVisible=function(){return(this.get('visible'));};RichMarker.prototype['getVisible']=RichMarker.prototype.getVisible;RichMarker.prototype.setVisible=function(visible){this.set('visible',visible);};RichMarker.prototype['setVisible']=RichMarker.prototype.setVisible;RichMarker.prototype.visible_changed=function(){if(this.ready_){this.markerWrapper_.style['display']=this.getVisible()?'':'none';this.draw();}};RichMarker.prototype['visible_changed']=RichMarker.prototype.visible_changed;RichMarker.prototype.setFlat=function(flat){this.set('flat',!!flat);};RichMarker.prototype['setFlat']=RichMarker.prototype.setFlat;RichMarker.prototype.getFlat=function(){return(this.get('flat'));};RichMarker.prototype['getFlat']=RichMarker.prototype.getFlat;RichMarker.prototype.getWidth=function(){return(this.get('width'));};RichMarker.prototype['getWidth']=RichMarker.prototype.getWidth;RichMarker.prototype.getHeight=function(){return(this.get('height'));};RichMarker.prototype['getHeight']=RichMarker.prototype.getHeight;RichMarker.prototype.setShadow=function(shadow){this.set('shadow',shadow);this.flat_changed();};RichMarker.prototype['setShadow']=RichMarker.prototype.setShadow;RichMarker.prototype.getShadow=function(){return(this.get('shadow'));};RichMarker.prototype['getShadow']=RichMarker.prototype.getShadow;RichMarker.prototype.flat_changed=function(){if(!this.ready_){return;}};RichMarker.prototype['flat_changed']=RichMarker.prototype.flat_changed;RichMarker.prototype.setZIndex=function(index){this.set('zIndex',index);};RichMarker.prototype['setZIndex']=RichMarker.prototype.setZIndex;RichMarker.prototype.getZIndex=function(){return(this.get('zIndex'));};RichMarker.prototype['getZIndex']=RichMarker.prototype.getZIndex;RichMarker.prototype.zIndex_changed=function(){if(this.getZIndex()&&this.ready_){this.markerWrapper_.style.zIndex=this.getZIndex();}};RichMarker.prototype['zIndex_changed']=RichMarker.prototype.zIndex_changed;RichMarker.prototype.getDraggable=function(){return(this.get('draggable'));};RichMarker.prototype['getDraggable']=RichMarker.prototype.getDraggable;RichMarker.prototype.setDraggable=function(draggable){this.set('draggable',!!draggable);};RichMarker.prototype['setDraggable']=RichMarker.prototype.setDraggable;RichMarker.prototype.draggable_changed=function(){if(this.ready_){if(this.getDraggable()){this.addDragging_(this.markerWrapper_);}else{this.removeDragListeners_();}}};RichMarker.prototype['draggable_changed']=RichMarker.prototype.draggable_changed;RichMarker.prototype.getPosition=function(){return(this.get('position'));};RichMarker.prototype['getPosition']=RichMarker.prototype.getPosition;RichMarker.prototype.setPosition=function(position){this.set('position',position);};RichMarker.prototype['setPosition']=RichMarker.prototype.setPosition;RichMarker.prototype.position_changed=function(){this.draw();};RichMarker.prototype['position_changed']=RichMarker.prototype.position_changed;RichMarker.prototype.getAnchor=function(){return(this.get('anchor'));};RichMarker.prototype['getAnchor']=RichMarker.prototype.getAnchor;RichMarker.prototype.setAnchor=function(anchor){this.set('anchor',anchor);};RichMarker.prototype['setAnchor']=RichMarker.prototype.setAnchor;RichMarker.prototype.anchor_changed=function(){this.draw();};RichMarker.prototype['anchor_changed']=RichMarker.prototype.anchor_changed;RichMarker.prototype.htmlToDocumentFragment_=function(htmlString){var tempDiv=document.createElement('DIV');tempDiv.innerHTML=htmlString;if(tempDiv.childNodes.length==1){return(tempDiv.removeChild(tempDiv.firstChild));}else{var fragment=document.createDocumentFragment();while(tempDiv.firstChild){fragment.appendChild(tempDiv.firstChild);}
return fragment;}};RichMarker.prototype.removeChildren_=function(node){if(!node){return;}
var child;while(child=node.firstChild){node.removeChild(child);}};RichMarker.prototype.setContent=function(content){this.set('content',content);};RichMarker.prototype['setContent']=RichMarker.prototype.setContent;RichMarker.prototype.getContent=function(){return(this.get('content'));};RichMarker.prototype['getContent']=RichMarker.prototype.getContent;RichMarker.prototype.content_changed=function(){if(!this.markerContent_){return;}
this.removeChildren_(this.markerContent_);var content=this.getContent();if(content){if(typeof content=='string'){content=content.replace(/^\s*([\S\s]*)\b\s*$/,'$1');content=this.htmlToDocumentFragment_(content);}
this.markerContent_.appendChild(content);var that=this;var images=this.markerContent_.getElementsByTagName('IMG');for(var i=0,image;image=images[i];i++){google.maps.event.addDomListener(image,'mousedown',function(e){if(that.getDraggable()){if(e.preventDefault){e.preventDefault();}
e.returnValue=false;}});google.maps.event.addDomListener(image,'load',function(){that.draw();});}
google.maps.event.trigger(this,'domready');}
if(this.ready_){this.draw();}};RichMarker.prototype['content_changed']=RichMarker.prototype.content_changed;RichMarker.prototype.setCursor_=function(whichCursor){if(!this.ready_){return;}
var cursor='';if(navigator.userAgent.indexOf('Gecko/')!==-1){if(whichCursor=='dragging'){cursor='-moz-grabbing';}
if(whichCursor=='dragready'){cursor='-moz-grab';}
if(whichCursor=='draggable'){cursor='pointer';}}else{if(whichCursor=='dragging'||whichCursor=='dragready'){cursor='move';}
if(whichCursor=='draggable'){cursor='pointer';}}
if(this.markerWrapper_.style.cursor!=cursor){this.markerWrapper_.style.cursor=cursor;}};RichMarker.prototype.startDrag=function(e){if(!this.getDraggable()){return;}
if(!this.dragging_){this.dragging_=true;var map=this.getMap();this.mapDraggable_=map.get('draggable');map.set('draggable',false);this.mouseX_=e.clientX;this.mouseY_=e.clientY;this.setCursor_('dragready');this.markerWrapper_.style['MozUserSelect']='none';this.markerWrapper_.style['KhtmlUserSelect']='none';this.markerWrapper_.style['WebkitUserSelect']='none';this.markerWrapper_['unselectable']='on';this.markerWrapper_['onselectstart']=function(){return false;};this.addDraggingListeners_();google.maps.event.trigger(this,'dragstart');}};RichMarker.prototype.stopDrag=function(){if(!this.getDraggable()){return;}
if(this.dragging_){this.dragging_=false;this.getMap().set('draggable',this.mapDraggable_);this.mouseX_=this.mouseY_=this.mapDraggable_=null;this.markerWrapper_.style['MozUserSelect']='';this.markerWrapper_.style['KhtmlUserSelect']='';this.markerWrapper_.style['WebkitUserSelect']='';this.markerWrapper_['unselectable']='off';this.markerWrapper_['onselectstart']=function(){};this.removeDraggingListeners_();this.setCursor_('draggable');google.maps.event.trigger(this,'dragend');this.draw();}};RichMarker.prototype.drag=function(e){if(!this.getDraggable()||!this.dragging_){this.stopDrag();return;}
var dx=this.mouseX_- e.clientX;var dy=this.mouseY_- e.clientY;this.mouseX_=e.clientX;this.mouseY_=e.clientY;var left=parseInt(this.markerWrapper_.style['left'],10)- dx;var top=parseInt(this.markerWrapper_.style['top'],10)- dy;this.markerWrapper_.style['left']=left+'px';this.markerWrapper_.style['top']=top+'px';var offset=this.getOffset_();var point=new google.maps.Point(left- offset.width,top- offset.height);var projection=this.getProjection();this.setPosition(projection.fromDivPixelToLatLng(point));this.setCursor_('dragging');google.maps.event.trigger(this,'drag');};RichMarker.prototype.removeDragListeners_=function(){if(this.draggableListener_){google.maps.event.removeListener(this.draggableListener_);delete this.draggableListener_;}
this.setCursor_('');};RichMarker.prototype.addDragging_=function(node){if(!node){return;}
var that=this;this.draggableListener_=google.maps.event.addDomListener(node,'mousedown',function(e){that.startDrag(e);});this.setCursor_('draggable');};RichMarker.prototype.addDraggingListeners_=function(){var that=this;if(this.markerWrapper_.setCapture){this.markerWrapper_.setCapture(true);this.draggingListeners_=[google.maps.event.addDomListener(this.markerWrapper_,'mousemove',function(e){that.drag(e);},true),google.maps.event.addDomListener(this.markerWrapper_,'mouseup',function(){that.stopDrag();that.markerWrapper_.releaseCapture();},true)];}else{this.draggingListeners_=[google.maps.event.addDomListener(window,'mousemove',function(e){that.drag(e);},true),google.maps.event.addDomListener(window,'mouseup',function(){that.stopDrag();},true)];}};RichMarker.prototype.removeDraggingListeners_=function(){if(this.draggingListeners_){for(var i=0,listener;listener=this.draggingListeners_[i];i++){google.maps.event.removeListener(listener);}
this.draggingListeners_.length=0;}};RichMarker.prototype.getOffset_=function(){var anchor=this.getAnchor();if(typeof anchor=='object'){return(anchor);}
var offset=new google.maps.Size(0,0);if(!this.markerContent_){return offset;}
var width=this.markerContent_.offsetWidth;var height=this.markerContent_.offsetHeight;switch(anchor){case RichMarkerPosition['TOP_LEFT']:break;case RichMarkerPosition['TOP']:offset.width=-width/2;break;case RichMarkerPosition['TOP_RIGHT']:offset.width=-width;break;case RichMarkerPosition['LEFT']:offset.height=-height/2;break;case RichMarkerPosition['MIDDLE']:offset.width=-width/2;offset.height=-height/2;break;case RichMarkerPosition['RIGHT']:offset.width=-width;offset.height=-height/2;break;case RichMarkerPosition['BOTTOM_LEFT']:offset.height=-height;break;case RichMarkerPosition['BOTTOM']:offset.width=-width/2;offset.height=-height;break;case RichMarkerPosition['BOTTOM_RIGHT']:offset.width=-width;offset.height=-height;break;}
return offset;};RichMarker.prototype.onAdd=function(){if(!this.markerWrapper_){this.markerWrapper_=document.createElement('DIV');this.markerWrapper_.style['position']='absolute';}
if(this.getZIndex()){this.markerWrapper_.style['zIndex']=this.getZIndex();}
this.markerWrapper_.style['display']=this.getVisible()?'':'none';if(!this.markerContent_){this.markerContent_=document.createElement('DIV');this.markerWrapper_.appendChild(this.markerContent_);var that=this;google.maps.event.addDomListener(this.markerContent_,'click',function(e){google.maps.event.trigger(that,'click',e);});google.maps.event.addDomListener(this.markerContent_,'mouseover',function(e){google.maps.event.trigger(that,'mouseover',e);});google.maps.event.addDomListener(this.markerContent_,'mouseout',function(e){google.maps.event.trigger(that,'mouseout',e);});}
this.ready_=true;this.content_changed();this.flat_changed();this.draggable_changed();var panes=this.getPanes();if(panes){panes.overlayMouseTarget.appendChild(this.markerWrapper_);}
google.maps.event.trigger(this,'ready');};RichMarker.prototype['onAdd']=RichMarker.prototype.onAdd;RichMarker.prototype.draw=function(){if(!this.ready_||this.dragging_){return;}
var projection=this.getProjection();if(!projection){return;}
var latLng=(this.get('position'));var pos=projection.fromLatLngToDivPixel(latLng);var offset=this.getOffset_();this.markerWrapper_.style['top']=(pos.y+ offset.height)+'px';this.markerWrapper_.style['left']=(pos.x+ offset.width)+'px';var height=this.markerContent_.offsetHeight;var width=this.markerContent_.offsetWidth;if(width!=this.get('width')){this.set('width',width);}
if(height!=this.get('height')){this.set('height',height);}};RichMarker.prototype['draw']=RichMarker.prototype.draw;RichMarker.prototype.onRemove=function(){if(this.markerWrapper_&&this.markerWrapper_.parentNode){this.markerWrapper_.parentNode.removeChild(this.markerWrapper_);}
this.removeDragListeners_();};RichMarker.prototype['onRemove']=RichMarker.prototype.onRemove;var RichMarkerPosition={'TOP_LEFT':1,'TOP':2,'TOP_RIGHT':3,'LEFT':0,'MIDDLE':5,'RIGHT':6,'BOTTOM_LEFT':7,'BOTTOM':8,'BOTTOM_RIGHT':9};window['RichMarkerPosition']=RichMarkerPosition;