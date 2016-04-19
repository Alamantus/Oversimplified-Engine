/* OversimplifiedJS 9/16/2015 */
function IsInternetExplorer(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");return i>0||navigator.userAgent.match(/Trident.*rv\:11\./)?!0:!1}var Oversimplified={},OS=Oversimplified;Oversimplified.canvas=null,Oversimplified.context=null,Oversimplified.nextID=0,Oversimplified.loadingScripts=[],Oversimplified.emptyImage=new Image,Oversimplified.emptyImage.src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=",Oversimplified.emptyImage.width=1,Oversimplified.emptyImage.height=1,Oversimplified.Settings={},Oversimplified.Settings.defaultStep=1/30,Oversimplified.Settings.soundVolume=.75,Oversimplified.Settings.musicVolume=.75,Oversimplified.Settings.SetCamera=function(e,i,s,t,r){return t="undefined"!=typeof t?t:Oversimplified.camera.hBorder,r="undefined"!=typeof r?r:Oversimplified.camera.vBorder,"undefined"==typeof e?(Oversimplified.DEBUG.showMessages&&console.log("You must specify a width in function Oversimplified.Settings.SetCamera()"),!1):(Oversimplified.camera.width=e,"undefined"==typeof i?(Oversimplified.DEBUG.showMessages&&console.log("You must specify a height in function Oversimplified.Settings.SetCamera()"),!1):(Oversimplified.camera.height=i,"undefined"!=typeof s&&(s.name?Oversimplified.camera.Follow(s):Oversimplified.DEBUG.showMessages&&console.log("Oversimplified.Settings.SetCamera()'s objectToFollow argument must be a Oversimplified.GameObject.")),Oversimplified.camera.hBorder=t,Oversimplified.camera.vBorder=r,void Oversimplified.SetCanvasToCameraSize()))},Oversimplified.S=Oversimplified.Settings,Oversimplified.timestamp=function(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()},Oversimplified.now=null,Oversimplified.dateTime=0,Oversimplified.lastFrame=Oversimplified.timestamp(),Oversimplified.step=Oversimplified.Settings.defaultStep,Oversimplified.camera={x:0,y:0,width:640,height:480,hBorder:64,vBorder:64,following:"",Follow:function(e){this.following=e.name}},Oversimplified.mouse={x:0,y:0,leftCode:IsInternetExplorer()?1:0,middleCode:IsInternetExplorer()?4:1,rightCode:2,leftDown:!1,left:!1,leftUp:!1,middleDown:!1,middle:!1,middleUp:!1,rightDown:!1,right:!1,rightUp:!1,wheel:0},Oversimplified.heldKeys=[],Oversimplified.pressedKeys=[],Oversimplified.releasedKeys=[],Oversimplified.Key={37:"left arrow",38:"up arrow",39:"right arrow",40:"down arrow",45:"insert",46:"delete",8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"caps lock",27:"escape",32:"space",33:"page up",34:"page down",35:"end",91:"left win/special key",92:"right win/special key",93:"select key",96:"numpad 0",97:"numpad 1",98:"numpad 2",99:"numpad 3",100:"numpad 4",101:"numpad 5",102:"numpad 6",103:"numpad 7",104:"numpad 8",105:"numpad 9",106:"numpad asterisk",107:"numpad plus",109:"numpad dash",110:"numpad period",111:"numpad slash",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"num lock",145:"scroll lock",186:"semicolon",187:"equal",188:"comma",189:"dash",190:"period",191:"slash",192:"grave accent",219:"open bracket",220:"backslash",221:"close bracket",222:"quote"},Oversimplified.Keycode={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,del:46,zero:48,one:49,two:50,three:51,four:52,five:53,six:54,seven:55,eight:56,nine:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwinkey:91,rightwinkey:92,selectkey:93,numpad_0:96,numpad_1:97,numpad_2:98,numpad_3:99,numpad_4:100,numpad_5:101,numpad_6:102,numpad_7:103,numpad_8:104,numpad_9:105,numpad_asterisk:106,numpad_plus:107,numpad_dash:109,numpad_period:110,numpad_slash:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equal:187,comma:188,dash:189,period:190,slash:191,grave:192,openbracket:219,backslash:220,closebraket:221,quote:222},Oversimplified.Controls={},Oversimplified.Controls.Add=function(e,i,s){return Oversimplified.Controls[e]="undefined"!=typeof s?new Oversimplified.Axis(i,s):new Oversimplified.Control(i),Oversimplified.Controls[e]},Oversimplified.Controls.New=Oversimplified.Controls.Add,Oversimplified.Controls.CheckAll=function(){for(control in Oversimplified.Controls)"undefined"!=typeof Oversimplified.Controls[control].Check&&Oversimplified.Controls[control].Check()},Oversimplified.C=Oversimplified.Controls,Oversimplified.Control=function(e){this.keyCode=e,this.keyName=Oversimplified.Key[e],this.down=!1,this.held=!1,this.up=!1},Oversimplified.Control.prototype.type="Control",Oversimplified.Control.prototype.Check=function(){this.held=-1!=Oversimplified.heldKeys.indexOf(this.keyCode)?!0:!1,this.down=-1!=Oversimplified.pressedKeys.indexOf(this.keyCode)?!0:!1,this.up=-1!=Oversimplified.releasedKeys.indexOf(this.keyCode)?!0:!1},Oversimplified.Axis=function(e,i){this.positiveKeycode=e,this.positiveKeyName=Oversimplified.Key[e],this.negativeKeycode=i,this.negativeKeyName=Oversimplified.Key[i],this.direction=0},Oversimplified.Axis.prototype.type="Axis",Oversimplified.Axis.prototype.Check=function(){-1!=Oversimplified.heldKeys.indexOf(this.positiveKeycode)&&-1==Oversimplified.heldKeys.indexOf(this.negativeKeycode)&&(this.direction=1),-1!=Oversimplified.heldKeys.indexOf(this.negativeKeycode)&&-1==Oversimplified.heldKeys.indexOf(this.positiveKeycode)&&(this.direction=-1),(-1==Oversimplified.heldKeys.indexOf(this.negativeKeycode)&&-1==Oversimplified.heldKeys.indexOf(this.positiveKeycode)||-1!=Oversimplified.heldKeys.indexOf(this.negativeKeycode)&&-1!=Oversimplified.heldKeys.indexOf(this.positiveKeycode))&&(this.direction=0)},Oversimplified.Rooms={currentRoom:"Default",AllBeforeDo:function(){},AllDo:function(){},AllAfterDo:function(){}},Oversimplified.Rooms.Add=function(e,i,s,t,r,o){return"undefined"==typeof Oversimplified.Rooms[e]?(Oversimplified.Rooms[e]=new Oversimplified.Room(e,i,s,t,r,o),Oversimplified.Rooms[e]):(Oversimplified.DEBUG.showMessages&&console.log('A Room with the name "'+e+'" already exists!'),!1)},Oversimplified.Rooms.New=Oversimplified.Rooms.Add,Oversimplified.R=Oversimplified.Rooms,Oversimplified.O=null,Oversimplified.Room=function(e,i,s,t,r,o){this.id=Oversimplified.nextID++;var n=this;if(r="undefined"!=typeof r&&r>0?r:Oversimplified.Settings.defaultStep,o="undefined"!=typeof o?o:[],i="undefined"!=typeof i&&i>=Oversimplified.camera.width?i:Oversimplified.camera.width,s="undefined"!=typeof s&&s>=Oversimplified.camera.height?s:Oversimplified.camera.height,this.name=e,this.width=i,this.height=s,"undefined"!=typeof t&&""!=t?(this.background=new Image,this.background.src=t):this.background=Oversimplified.emptyImage,this.background.loaded=!1,this.background!=Oversimplified.emptyImage&&(this.background.onload=function(){this.loaded=!0,-1!=o.indexOf("background size")&&(n.width=this.width,n.height=this.height)}),this.stepSpeed=r,this.objects={},this.O=this.objects,o.length>0)for(p=0;p<o.length;p++)switch(typeof o[p]){case"string":if("#"==o[p].substring(0,1))n.background.color=o[p];else{var m=o[p].substr(o[p].length-4);(".png"==m||".gif"==m)&&(n.foreground=new Image,n.foreground.loaded=!1,n.foreground.src=o[p],n.foreground.onload=function(){this.loaded=!0})}}this.drawOrder=[],this.DoFirst=function(){},this.BeforeDo=function(){},this.Do=function(){},this.AfterDo=function(){},this.DoLast=function(){},this.DrawBelow=function(){},this.DrawAbove=function(){}},Oversimplified.Room.prototype.type="Room",Oversimplified.Room.prototype.Start=function(){if(this.DoFirst(),this.name===Oversimplified.R.currentRoom)for(var e in this.objects)this.objects[e].Start()},Oversimplified.Room.prototype.Update=function(){Oversimplified.step!=this.stepSpeed&&(Oversimplified.step=this.stepSpeed),this.drawOrder=[];for(s in this.objects)if("GameObject"==this.objects[s].type){if(this.drawOrder.length<=0){this.drawOrder=[s];continue}for(var e=this.objects[s].depth,i=0;i<this.drawOrder.length;i++)if(e<this.objects[this.drawOrder[i]].depth){this.drawOrder.splice(i,0,s);break}this.drawOrder.indexOf(s)<0&&this.drawOrder.push(s)}if(this.BeforeDo(),this.Do(),this.name===Oversimplified.R.currentRoom)for(var s in this.objects)this.objects[s].Update();this.AfterDo()},Oversimplified.Room.prototype.End=function(){this.DoLast()},Oversimplified.Room.prototype.Draw=function(){var e=this;if("undefined"!=typeof this.background.color){var i=Oversimplified.context.fillStyle;Oversimplified.context.fillStyle=this.background.color,Oversimplified.context.fillRect(0,0,Oversimplified.camera.width,Oversimplified.camera.height),Oversimplified.context.fillStyle=i}if(this.background.loaded&&Oversimplified.context.drawImage(e.background,Oversimplified.camera.x,Oversimplified.camera.y,Oversimplified.camera.width<=e.background.width?Oversimplified.camera.width:e.background.width,Oversimplified.camera.height<=e.background.height?Oversimplified.camera.height:e.background.height,0,0,e.background.width,e.background.height),this.DrawBelow(),this.name===Oversimplified.R.currentRoom)for(var s=0;s<this.drawOrder.length;s++)"undefined"!=typeof this.objects[this.drawOrder[s]]&&this.objects[this.drawOrder[s]].Draw();"undefined"!=typeof this.foreground&&this.foreground.loaded&&Oversimplified.context.drawImage(e.foreground,Oversimplified.camera.x,Oversimplified.camera.y,Oversimplified.camera.width,Oversimplified.camera.height,0,0,e.foreground.width,e.foreground.height),this.DrawAbove()},Oversimplified.Room.prototype.AddObject=function(e,i,s,t,r,o){var n=this;if("GameObject"==e.type){var m=Oversimplified.nextID++,d=e.name+m.toString();return n.objects[d]=Oversimplified.CopyObject(e,m,d),n.objects[d]}return n.objects[e]?(Oversimplified.DEBUG.showMessages&&console.log('Object with name "'+e+'" already exists in current room!'),!1):(n.objects[e]=new Oversimplified.GameObject(e,i,s,t,r,o),n.objects[e])},Oversimplified.SetRoom=function(e){"undefined"!=typeof Oversimplified.R[Oversimplified.R.currentRoom]&&Oversimplified.R[Oversimplified.R.currentRoom].End(),Oversimplified.R.currentRoom=e.name,Oversimplified.O=Oversimplified.Rooms[Oversimplified.R.currentRoom].objects,Oversimplified.camera.following="",Oversimplified.R[Oversimplified.R.currentRoom].Start()},Oversimplified.PremadeObjects={},Oversimplified.PremadeObjects.Add=function(e,i,s,t,r,o){return"undefined"==typeof Oversimplified.PremadeObjects[e]?(Oversimplified.PremadeObjects[e]=new Oversimplified.GameObject(e,i,s,t,r,o),Oversimplified.PremadeObjects[e]):(Oversimplified.DEBUG.showMessages&&console.log('A Premade Object with the name "'+e+'" already exists!'),!1)},Oversimplified.PremadeObjects.New=Oversimplified.PremadeObjects.Add,Oversimplified.Prefabs=Oversimplified.PremadeObjects,Oversimplified.P=Oversimplified.PremadeObjects,Oversimplified.GameObject=function(e,i,s,t,r,o){this.id=Oversimplified.nextID++;var n=this;if(this.self=n,this.name=e,this.depth=0,this.solid=!1,this.persistent=!1,this.x="undefined"!=typeof i?i:-1,this.y="undefined"!=typeof s?s:-1,this.xPrevious=this.x,this.yPrevious=this.y,this.screenX=this.x-Oversimplified.camera.x,this.screenY=this.y-Oversimplified.camera.y,"undefined"!=typeof t&&""!=t?(this.image=new Image,this.image.src=t):this.image=Oversimplified.emptyImage,this.image.xScale=1,this.image.yScale=1,this.image.rotation=0,this.image.animations={},this.image.frameColumn=0,this.image.frameRow=0,"undefined"!=typeof o)for(var m=0;m<o.length;m++)0==m&&"Default"!=o[m].name&&(this.image.animations.Default=o[m]),this.image.animations[o[m].name]=o[m];else this.image!=Oversimplified.emptyImage?this.image.onload=function(){this.animations.Default=new Oversimplified.Animation("newAnimation",this.width,this.height)}:this.image.animations.Default=new Oversimplified.Animation("newAnimation",this.image.width,this.image.height);this.image.currentAnimation="Default",this.mask=r?new Image:{},this.mask.src=r?r:"",""==this.mask.src&&(this.mask.width=this.image.animations.Default.width,this.mask.height=this.image.animations.Default.height),""!=this.mask.src?this.mask.onload=function(){n.xBound=this.width/2,n.yBound=this.height/2}:(n.xBound=this.mask.width/2,n.yBound=this.mask.height/2),this.DoFirst=function(){},this.BeforeDo=function(){},this.Do=function(){},this.AfterDo=function(){},this.DoLast=function(){},this.DrawBelow=function(){},this.DrawAbove=function(){}},Oversimplified.GameObject.prototype.type="GameObject",Oversimplified.GameObject.prototype.AddAnimation=function(e,i,s,t,r,o,n,m){e.name?this.image.animations[e.name]=e:("undefined"==typeof Oversimplified.Animations[e]&&Oversimplified.Animations.Add(e,i,s,t,r,o,n,m),this.image.animations[Oversimplified.Animations[e].name]=Oversimplified.Animations[e])},Oversimplified.GameObject.prototype.Draw=function(){this.DrawBelow();var e=this,i=e.image.currentAnimation;if(e.image.animations[i]){var s=e.image.animations[i].width,t=e.image.animations[i].height,r=e.image.animations[i].width*e.image.xScale,o=e.image.animations[i].height*e.image.yScale,n=e.image.animations[i].columns,m=e.image.animations[i].rows,d=e.image.animations[i].xOffset,l=e.image.animations[i].yOffset,a=e.image.animations[i].speed;if(e.image.frameColumn<n&&(e.image.frameColumn+=a),e.image.frameColumn>=n&&(e.image.frameColumn=0,e.image.frameRow++),e.image.frameRow>m-1&&(e.image.frameRow=0),Oversimplified.IsOnCamera(e)){var f=Math.floor(e.image.frameColumn),p=Math.floor(e.image.frameRow);Oversimplified.context.translate(e.x-Oversimplified.camera.x,e.y-Oversimplified.camera.y);var v=e.image.rotation*(Math.PI/180);Oversimplified.context.rotate(v),Oversimplified.context.drawImage(e.image,s*f+d,t*p+l,s,t,-(r/2),-(o/2),r,o),Oversimplified.context.rotate(-v),Oversimplified.context.translate(-(e.x-Oversimplified.camera.x),-(e.y-Oversimplified.camera.y)),Oversimplified.DEBUG.objectsOnScreen++}}else Oversimplified.DEBUG.showMessages&&console.log("No animation at "+i);this.DrawAbove()},Oversimplified.GameObject.prototype.SetScale=function(e,i){this.image.xScale=e,this.image.yScale="undefined"!=typeof i?i:e,this.xBound=this.mask.width/2*this.image.xScale,this.yBound=this.mask.height/2*this.image.yScale},Oversimplified.GameObject.prototype.SetImageRotation=function(e){this.image.rotation=Math.clampAngle(e)},Oversimplified.GameObject.prototype.RotateImage=function(e){this.image.rotation+=Math.clampAngle(e)},Oversimplified.GameObject.prototype.SetAnimation=function(e){e.name&&(e=e.name),this.image.currentAnimation=e,this.image.frameColumn=0,this.image.frameRow=0},Oversimplified.GameObject.prototype.Start=function(){this.DoFirst()},Oversimplified.GameObject.prototype.Update=function(){this.screenX=this.x-Oversimplified.camera.x,this.screenY=this.y-Oversimplified.camera.y,this.xPrevious=this.x,this.yPrevious=this.y,this.BeforeDo(),this.Do(),this.AfterDo(),this.image.rotation=Math.clampAngle(this.image.rotation)},Oversimplified.GameObject.prototype.End=function(){this.DoLast()},Oversimplified.GameObject.prototype.MoveTo=function(e,i,s){s="undefined"!=typeof s?s:1,this.x<e&&(this.x+=s),this.x>e&&(this.x-=s),this.y<i&&(this.y+=s),this.y>i&&(this.y-=s)},Oversimplified.GameObject.prototype.PointOverlaps=function(e,i){return e>this.x-this.xBound&&e<this.x+this.xBound&&i>this.y-this.yBound&&i<this.y+this.yBound?!0:!1},Oversimplified.GameObject.prototype.IsOverlapping=function(e){e="undefined"!=typeof e?e:!1;for(var i in Oversimplified.O){var s=Oversimplified.O[i];if(s!=this)if(e){if(s.PointOverlaps(this.x-this.xBound,this.y-this.yBound)||s.PointOverlaps(this.x+this.xBound,this.y-this.yBound)||s.PointOverlaps(this.x-this.xBound,this.y+this.yBound)||s.PointOverlaps(this.x+this.xBound,this.y+this.yBound)||s.PointOverlaps(this.x-this.xBound,this.y)||s.PointOverlaps(this.x+this.xBound,this.y)||s.PointOverlaps(this.x,this.y-this.yBound)||s.PointOverlaps(this.x,this.y+this.yBound))return s}else for(var t=0;t<2*s.xBound;t++)for(var r=0;r<2*s.yBound;r++){var o=s.x-s.xBound+t,n=s.y-s.yBound+r;if(o>this.x-this.xBound&&o<this.x+this.xBound&&n>this.y-this.yBound&&n<this.y+this.yBound)return s}}return!1},Oversimplified.GameObject.prototype.IfOverlappingThenMove=function(e){var i=this.IsOverlapping(e);0!=i&&(this.x<i.x&&this.x--,this.x>=i.x&&this.x++,this.y<i.y&&this.y--,this.y>=i.y&&this.y++)},Oversimplified.GameObject.prototype.KeepInsideRoom=function(){var e=Oversimplified.R[Oversimplified.R.currentRoom];(this.x<this.xBound||this.x>e.width-this.xBound)&&(this.x=this.xPrevious),(this.y<this.yBound||this.y>e.height-this.yBound)&&(this.y=this.yPrevious)},Oversimplified.GameObject.prototype.MouseIsOver=function(){return this.PointOverlaps(Oversimplified.mouse.x,Oversimplified.mouse.y)?!0:!1},Oversimplified.GameObject.prototype.Clicked=function(e){return e="undefined"!=typeof e?e:Oversimplified.mouse.leftDown,this.MouseIsOver()&&e?!0:!1},Oversimplified.GameObject.prototype.SimpleMove=function(e,i,s){var t=collisionRight=collisionUp=collisionDown=!1;if(s){for(var r=0;r<2*this.yBound;r++){var o=this.y-this.yBound+r;t||(t=0>e&&Oversimplified.CollisionAtPoint(this.x-this.xBound+e,o)),collisionRight||(collisionRight=e>0&&Oversimplified.CollisionAtPoint(this.x+this.xBound+e,o))}for(var n=0;n<2*this.xBound;n++){var m=this.x-this.xBound+n;collisionUp||(collisionUp=0>i&&Oversimplified.CollisionAtPoint(m,this.y-this.yBound+i)),collisionDown||(collisionDown=i>0&&Oversimplified.CollisionAtPoint(m,this.y+this.yBound+i))}}s&&(t||collisionRight||collisionUp||collisionDown)||(this.x+=e,this.y+=i)},Oversimplified.GameObject.prototype.Destroy=function(){this.End(),delete Oversimplified.R[Oversimplified.R.currentRoom].objects[this.name]},Oversimplified.CollisionAtPoint=function(e,i){Oversimplified.R[Oversimplified.R.currentRoom];for(var s in Oversimplified.O){var t=Oversimplified.O[s];if(t!=this)for(var r=0;r<2*t.xBound;r++)for(var o=0;o<2*t.yBound;o++){var n=t.x-t.xBound+r,m=t.y-t.yBound+o;if(n==e&&m==i&&t.solid)return!0}}return!1},Oversimplified.Animations={},Oversimplified.Animations.Add=function(e,i,s,t,r,o,n,m){return"undefined"==typeof Oversimplified.Animations[e]?(Oversimplified.Animations[e]=new Oversimplified.Animation(e,i,s,t,r,o,n,m),Oversimplified.Animations[e]):(Oversimplified.DEBUG.showMessages&&console.log('An animation with the name "'+e+'" already exists!'),!1)},Oversimplified.Animations.New=Oversimplified.Animations.Add,Oversimplified.A=Oversimplified.Animations,Oversimplified.Animation=function(e,i,s,t,r,o,n,m){this.id=Oversimplified.nextID++,t="undefined"!=typeof t?t:1,r="undefined"!=typeof r?r:1,o="undefined"!=typeof o?o:1,n="undefined"!=typeof n?n:0,m="undefined"!=typeof m?m:0,o=Math.clamp01(o),this.name=e,this.width=i,this.height=s,this.columns=t,this.rows=r,this.xOffset=n,this.yOffset=m,this.speed=o},Oversimplified.Animation.prototype.type="Animation",Oversimplified.Effects={Sounds:[],Tunes:[]},Oversimplified.Effects.Tunes.CheckLoops=function(){for(tune in Oversimplified.Effects.Tunes)"Tune"==Oversimplified.Effects.Tunes[tune].type&&Oversimplified.Effects.Tunes[tune].IsPlaying()&&Oversimplified.Effects.Tunes[tune].CheckLoop()},Oversimplified.Sound=function(e,i,s){this.id=Oversimplified.nextID++,s="undefined"!=typeof s?s:!1,this.name=e,this.source=i,this.secondarySource=s,this.element=document.createElement("audio"),this.element.id=this.name+this.id.toString();var i=document.createElement("source");i.src=this.source,this.element.appendChild(i),0!=this.secondarySource&&(i.src=this.secondarySource,this.element.appendChild(i)),document.getElementById("audio").appendChild(this.element),this.element.load()},Oversimplified.Sound.prototype.type="Sound",Oversimplified.Sound.prototype.Play=function(){this.element.currentTime=0,this.element.volume=Oversimplified.Settings.soundVolume,this.element.play()},Oversimplified.Sound.prototype.IsPlaying=function(){return!this.element.paused&&!this.element.ended&&0<this.element.currentTime},Oversimplified.Tune=function(e,i,s,t){this.id=Oversimplified.nextID++,s="undefined"!=typeof s?s:!1,t="undefined"!=typeof t?t:!1,this.name=e,this.source=i,this.secondarySource=s,this.duration=t,this.element=document.createElement("audio"),this.element.id=this.name+this.id.toString();var i=document.createElement("source");i.src=this.source,this.element.appendChild(i),0!=this.secondarySource&&(i.src=this.secondarySource,this.element.appendChild(i)),document.getElementById("audio").appendChild(this.element),this.element.load()},Oversimplified.Tune.prototype.type="Tune",Oversimplified.Tune.prototype.Play=function(){this.element.currentTime=0,this.element.volume=Oversimplified.Settings.musicVolume,this.element.loop=!0,this.element.play()},Oversimplified.Tune.prototype.CheckLoop=function(){this.duration<this.element.duration&&this.element.currentTime>this.duration&&(this.element.currentTime=0)},Oversimplified.Tune.prototype.IsPlaying=function(){return!this.element.paused&&!this.element.ended&&0<this.element.currentTime},Oversimplified.Effects.S=Oversimplified.Effects.Sounds,Oversimplified.Effects.T=Oversimplified.Effects.Tunes,Oversimplified.Effects.Music=Oversimplified.Effects.Tunes,Oversimplified.Effects.M=Oversimplified.Effects.Tunes,Oversimplified.E=Oversimplified.Effects,Oversimplified.CreateObject=function(e,i,s,t,r,o){if("GameObject"==e.type){var n=Oversimplified.nextID++,m=e.name+n.toString();return Oversimplified.O[m]=Oversimplified.CopyObject(e,n,m),Oversimplified.O[m].x=i,Oversimplified.O[m].y=s,Oversimplified.O[m]}return Oversimplified.O[e]?(Oversimplified.DEBUG.showMessages&&console.log('Object with name "'+e+'" already exists in current room!'),!1):(Oversimplified.O[e]=new Oversimplified.GameObject(e,i,s,t,r,o),Oversimplified.O[e].Start(),Oversimplified.O[e])},Oversimplified.CopyObject=function(e,i,s){var t={};"identical"!=i?(t.id="undefined"!=typeof i?i:Oversimplified.nextID++,t.name="undefined"!=typeof s?s:e.name+t.id.toString()):(t.id=e.id,t.name=e.name),"GameObject"==e.type&&(t.self=t,t.image=new Image,t.image.src=e.image.src,t.image.xScale=e.image.xScale,t.image.yScale=e.image.yScale,t.image.rotation=e.image.rotation,t.image.frameColumn=0,t.image.frameRow=0,t.image.animations=e.image.animations,t.image.currentAnimation=e.image.currentAnimation,t.mask=new Image,t.mask.src=e.mask.src,""==t.mask.src&&(t.mask.width=t.image.animations.Default.width,t.mask.height=t.image.animations.Default.height),t.mask.onload=function(){t.xBound=this.width/2,t.yBound=this.height/2});for(var r in e)"undefined"==typeof t[r]&&(t[r]=e[r]);return t},Oversimplified.Copy=function(e,i,s){var t={};if("identical"!=i?(t.id="undefined"!=typeof i?i:Oversimplified.nextID++,t.name="undefined"!=typeof s?s:e.name+t.id.toString()):(t.id=e.id,t.name=e.name),"GameObject"==e.type&&(t=CopyObject(e,i,s)),"Room"==e.type){t.objects={};for(var r in e.objects)t.objects[r]=Oversimplified.Copy(e.objects[r])}for(var o in e)"undefined"==typeof t[o]&&(t[o]=e[o]);return t},Oversimplified.DEBUG={showMessages:!0,DrawBoundingBox:function(e){var i=Oversimplified.context.fillStyle;Oversimplified.context.fillStyle="rgba(255, 0, 255, 0.5)",Oversimplified.context.fillRect(e.x-e.xBound-Oversimplified.camera.x,e.y-e.yBound-Oversimplified.camera.y,2*e.xBound,2*e.yBound),Oversimplified.context.fillStyle=i},CountObjectsInRoom:function(e){var i,s=0;i="undefined"!=typeof e?e.name?e:Oversimplified.Rooms[e]:Oversimplified.Rooms[Oversimplified.R.currentRoom];for(objects in i.objects)s++;return s},objectsOnScreen:0,CountObjectsOnScreen:function(){return Oversimplified.DEBUG.objectsOnScreen},ListControls:function(){var e=0,i=0,s=0;for(control in Oversimplified.Controls)if("undefined"!=typeof Oversimplified.Controls[control].Check){s++;var t='C["'+control+'"] ';"Control"==Oversimplified.Controls[control].type&&(t+="(Control): "+C[control].keyName,e++),"Axis"==Oversimplified.Controls[control].type&&(t+="(Axis) Positive: "+C[control].positiveKeyName+", Negative: "+C[control].negativeKeyName,i++),console.log(t)}console.log(e+" Controls and "+i+" Axes.\n"+s+" in all")}},window.onload=function(){Oversimplified.Initialize()},Oversimplified.Initialize=function(){Oversimplified.SetupCanvas(),Oversimplified.SetupControls(),Oversimplified.AddScript("start.js",function(){start(),Oversimplified.SetCanvasToCameraSize(),Oversimplified.Frame()})},Oversimplified.SetupCanvas=function(){Oversimplified.canvas=document.getElementById("game"),Oversimplified.canvas.getContext?Oversimplified.context=Oversimplified.canvas.getContext("2d"):alert("No 2D Canvas Context for game."),Oversimplified.canvas.oncontextmenu=function(){return!1}},Oversimplified.SetupControls=function(){Oversimplified.SetupMouseListeners(),Oversimplified.SetupKeyboardListeners()},Oversimplified.SetupMouseListeners=function(){Oversimplified.canvas.addEventListener("mousemove",function(e){var i=Oversimplified.canvas.getBoundingClientRect();Oversimplified.mouse.x=e.clientX-i.left+Oversimplified.camera.x,Oversimplified.mouse.y=e.clientY-i.top+Oversimplified.camera.y},!1),Oversimplified.canvas.addEventListener("mousedown",function(e){e.button===Oversimplified.mouse.leftCode?(Oversimplified.mouse.left||(Oversimplified.mouse.leftDown=!0),Oversimplified.mouse.left=!0):e.button===Oversimplified.mouse.middleCode?(e.preventDefault(),Oversimplified.mouse.middle||(Oversimplified.mouse.middleDown=!0),Oversimplified.mouse.middle=!0):e.button===Oversimplified.mouse.rightCode&&(Oversimplified.mouse.right||(Oversimplified.mouse.rightDown=!0),Oversimplified.mouse.right=!0)},!1),Oversimplified.canvas.addEventListener("mouseup",function(e){e.button===Oversimplified.mouse.leftCode?(Oversimplified.mouse.left=!1,Oversimplified.mouse.leftUp=!0):e.button===Oversimplified.mouse.middleCode?(Oversimplified.mouse.middle=!1,Oversimplified.mouse.middleUp=!0):e.button===Oversimplified.mouse.rightCode&&(Oversimplified.mouse.right=!1,Oversimplified.mouse.rightUp=!0)},!1),Oversimplified.canvas.addEventListener("mouseout",function(){Oversimplified.mouse.left=Oversimplified.mouse.middle=Oversimplified.mouse.right=!1},!1),Oversimplified.canvas.addEventListener("mousewheel",Oversimplified.MouseWheelHandler,!1),Oversimplified.canvas.addEventListener("DOMMouseScroll",Oversimplified.MouseWheelHandler,!1),Oversimplified.canvas.addEventListener("touchstart",function(e){switch(e.preventDefault(),e.targetTouches.length){case 1:Oversimplified.mouse.right=!1,Oversimplified.mouse.middle=!1,Oversimplified.mouse.left||(Oversimplified.mouse.leftDown=!0),Oversimplified.mouse.left=!0;break;case 2:Oversimplified.mouse.left=!1,Oversimplified.mouse.middle=!1,Oversimplified.mouse.right||(Oversimplified.mouse.rightDown=!0),Oversimplified.mouse.right=!0;break;case 3:Oversimplified.mouse.left=!1,Oversimplified.mouse.right=!1,Oversimplified.mouse.middle||(Oversimplified.mouse.middleDown=!0),Oversimplified.mouse.middle=!0}var i=Oversimplified.canvas.getBoundingClientRect();Oversimplified.mouse.x=e.targetTouches[0].clientX-i.left+Oversimplified.camera.x,Oversimplified.mouse.y=e.targetTouches[0].clientY-i.top+Oversimplified.camera.y},!1),Oversimplified.canvas.addEventListener("touchmove",function(e){e.preventDefault();var i=Oversimplified.canvas.getBoundingClientRect();Oversimplified.mouse.x=e.targetTouches[0].clientX-i.left+Oversimplified.camera.x,Oversimplified.mouse.y=e.targetTouches[0].clientY-i.top+Oversimplified.camera.y},!1),window.addEventListener("touchend",function(e){e.targetTouches.length<1?(Oversimplified.mouse.left&&(Oversimplified.mouse.leftUp=!0),Oversimplified.mouse.left=!1,Oversimplified.mouse.right=!1,Oversimplified.mouse.middle=!1):e.targetTouches.length<2?(Oversimplified.mouse.right&&(Oversimplified.mouse.rightUp=!0),Oversimplified.mouse.right=!1,Oversimplified.mouse.middle=!1):e.targetTouches.length<3&&(Oversimplified.mouse.middle&&(Oversimplified.mouse.middleUp=!0),Oversimplified.mouse.middle=!1)},!1)},Oversimplified.SetupKeyboardListeners=function(){window.addEventListener("keydown",function(e){[Oversimplified.Keycode.left,Oversimplified.Keycode.right,Oversimplified.Keycode.up,Oversimplified.Keycode.down,Oversimplified.Keycode.space,Oversimplified.Keycode.tab].indexOf(e.keyCode)>-1&&e.preventDefault()},!1),document.addEventListener("keydown",function(e){var i=e.which;-1==Oversimplified.pressedKeys.indexOf(i)&&-1==Oversimplified.heldKeys.indexOf(i)&&Oversimplified.pressedKeys.push(i),-1==Oversimplified.heldKeys.indexOf(i)&&Oversimplified.heldKeys.push(i)},!1),document.addEventListener("keyup",function(e){var i=e.which;Oversimplified.heldKeys.splice(Oversimplified.heldKeys.indexOf(i),1),-1==Oversimplified.releasedKeys.indexOf(i)&&Oversimplified.releasedKeys.push(i)},!1)},Oversimplified.SetCanvasToCameraSize=function(){Oversimplified.canvas.width!=Oversimplified.camera.width&&(Oversimplified.DEBUG.showMessages&&console.log("Adjusting Camera Width from "+Oversimplified.canvas.width+" to "+Oversimplified.camera.width),Oversimplified.canvas.width=Oversimplified.camera.width),Oversimplified.canvas.height!=Oversimplified.camera.height&&(Oversimplified.DEBUG.showMessages&&console.log("Adjusting Camera Height from "+Oversimplified.canvas.height+" to "+Oversimplified.camera.height),Oversimplified.canvas.height=Oversimplified.camera.height)},Oversimplified.Frame=function(){if(0==Oversimplified.loadingScripts.length){for(Oversimplified.now=Oversimplified.timestamp(),Oversimplified.dateTime=Oversimplified.dateTime+Math.min(1,(Oversimplified.now-Oversimplified.lastFrame)/1e3);Oversimplified.dateTime>Oversimplified.step;)Oversimplified.dateTime=Oversimplified.dateTime-Oversimplified.step,Oversimplified.Update(),Oversimplified.Draw(),Oversimplified.EndFrame();Oversimplified.lastFrame=Oversimplified.now}else Oversimplified.DEBUG.showMessages&&console.log("Loading scripts: "+Oversimplified.loadingScripts.toString());requestAnimationFrame(Oversimplified.Frame)},Oversimplified.Update=function(){Oversimplified.Controls.CheckAll(),Oversimplified.Rooms.AllBeforeDo(),Oversimplified.Rooms.AllDo(),"undefined"!=typeof Oversimplified.Rooms[Oversimplified.Rooms.currentRoom]?Oversimplified.Rooms[Oversimplified.Rooms.currentRoom].Update():Oversimplified.DEBUG.showMessages&&console.log("There is no current room. Please add one or make sure you are referencing the correct room with Oversimplified.Rooms.SetRoom()."),Oversimplified.Rooms.AllAfterDo(),""!=Oversimplified.camera.following&&(Oversimplified.R[Oversimplified.R.currentRoom].objects[Oversimplified.camera.following].x-Oversimplified.camera.x>Oversimplified.camera.width-Oversimplified.camera.hBorder&&(Oversimplified.camera.x=Oversimplified.R[Oversimplified.R.currentRoom].objects[Oversimplified.camera.following].x-(Oversimplified.camera.width-Oversimplified.camera.hBorder)),Oversimplified.R[Oversimplified.R.currentRoom].objects[Oversimplified.camera.following].x-Oversimplified.camera.x<Oversimplified.camera.hBorder&&(Oversimplified.camera.x=Oversimplified.R[Oversimplified.R.currentRoom].objects[Oversimplified.camera.following].x-Oversimplified.camera.hBorder),Oversimplified.R[Oversimplified.R.currentRoom].objects[Oversimplified.camera.following].y-Oversimplified.camera.y>Oversimplified.camera.height-Oversimplified.camera.vBorder&&(Oversimplified.camera.y=Oversimplified.R[Oversimplified.R.currentRoom].objects[Oversimplified.camera.following].y-(Oversimplified.camera.height-Oversimplified.camera.vBorder)),Oversimplified.R[Oversimplified.R.currentRoom].objects[Oversimplified.camera.following].y-Oversimplified.camera.y<Oversimplified.camera.vBorder&&(Oversimplified.camera.y=Oversimplified.R[Oversimplified.R.currentRoom].objects[Oversimplified.camera.following].y-Oversimplified.camera.vBorder)),Oversimplified.camera.x<0&&(Oversimplified.camera.x=0),Oversimplified.camera.x+Oversimplified.camera.width>Oversimplified.R[Oversimplified.R.currentRoom].width&&(Oversimplified.camera.x=Oversimplified.R[Oversimplified.R.currentRoom].width-Oversimplified.camera.width),Oversimplified.camera.y<0&&(Oversimplified.camera.y=0),Oversimplified.camera.y+Oversimplified.camera.height>Oversimplified.R[Oversimplified.R.currentRoom].height&&(Oversimplified.camera.y=Oversimplified.R[Oversimplified.R.currentRoom].height-Oversimplified.camera.height)
},Oversimplified.Draw=function(){Oversimplified.context.clearRect(0,0,Oversimplified.canvas.width,Oversimplified.canvas.height),Oversimplified.DEBUG.objectsOnScreen=0,"undefined"!=typeof Oversimplified.Rooms[Oversimplified.Rooms.currentRoom]?Oversimplified.Rooms[Oversimplified.Rooms.currentRoom].Draw():Oversimplified.DEBUG.showMessages&&console.log("There is no current room. Please add one or make sure you are referencing the correct room with Oversimplified.Rooms.SetRoom().")},Oversimplified.EndFrame=function(){Oversimplified.mouse.wheel=0,Oversimplified.mouse.leftDown=!1,Oversimplified.mouse.middleDown=!1,Oversimplified.mouse.rightDown=!1,Oversimplified.mouse.leftUp=!1,Oversimplified.mouse.middleUp=!1,Oversimplified.mouse.rightUp=!1,Oversimplified.pressedKeys=[],Oversimplified.releasedKeys=[]},Oversimplified.MouseWheelHandler=function(e){e.preventDefault(),Oversimplified.mouse.wheel=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail))},Oversimplified.IsOnCamera=function(e,i){if("undefined"!=typeof i)return e>Oversimplified.camera.x&&e<Oversimplified.camera.x+Oversimplified.camera.width&&i>Oversimplified.camera.y&&i<Oversimplified.camera.y+Oversimplified.camera.height?!0:!1;var s=e;return s.x+s.xBound>Oversimplified.camera.x&&s.x-s.xBound<Oversimplified.camera.x+Oversimplified.camera.width&&s.y+s.yBound>Oversimplified.camera.y&&s.y-s.yBound<Oversimplified.camera.y+Oversimplified.camera.height?!0:!1},Oversimplified.AddScript=function(e,i){i="undefined"!=typeof i?i:e.slice(e.lastIndexOf("/")>-1?e.lastIndexOf("/")+1:0,e.indexOf(".")),Oversimplified.loadingScripts.push(e);var s=document.createElement("script");s.src=e,s.onload=function(){"string"!=typeof i?Oversimplified.WaitForScriptsToLoad(function(){i()}):"function"==typeof window[i]?Oversimplified.WaitForScriptsToLoad(function(){window[i]()}):Oversimplified.DEBUG.showMessages&&console.log(i+" is not a function!"),Oversimplified.loadingScripts.splice(Oversimplified.loadingScripts.indexOf(e),1)},document.body.appendChild(s)},Oversimplified.WaitForScriptsToLoad=function(e){Oversimplified.loadingScripts.length>0?setTimeout(function(){Oversimplified.WaitForScriptsToLoad(e)},.1):e()},Math.clamp=function(e,i,s){return i==s?(Oversimplified.DEBUG.showMessages&&console.log("Min and Max cannot be the same number!"),!1):i>s?(Oversimplified.DEBUG.showMessages&&console.log("Min must be less than Max!"),!1):(i>e&&(e=i),e>s&&(e=s),e)},Math.clamp01=function(e){return 0>e&&(e=0),e>1&&(e=1),e},Math.clampAngle=function(e,i,s){for(;e>=360;)e-=360;for(;0>e;)e+=360;if("undefined"!=typeof i&&"undefined"!=typeof s){for(;i>=360;)i-=360;for(;0>i;)i+=360;for(;s>=360;)s-=360;for(;0>s;)s+=360;if(i==s)return Oversimplified.DEBUG.showMessages&&console.log("Min and Max cannot be the same number!"),!1;if(i>s)return Oversimplified.DEBUG.showMessages&&console.log("Min must be less than Max!"),!1;i>e&&(e=i),e>s&&(e=s)}return e},Math.radToDeg=function(e){return e/(Math.PI/180)},Math.degToRad=function(e){return e*(Math.PI/180)},Math.getCos=function(e){return Math.cos(Math.degToRad(e))},Math.getSin=function(e){return Math.sin(Math.degToRad(e))},Math.coinFlip=function(){return Math.random()>=.5?!0:!1},Math.randomRange=function(e,i){return Math.random()*(i-e)+e};