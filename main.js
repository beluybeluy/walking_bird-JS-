function getEl(id){
   return document.getElementById(id);
}
var marginUpDown = 50;
getEl('butUp').onclick=function(){
   marginUpDown -=10; 
   getEl('img').style.marginTop=marginUpDown+"px";
   getEl('img').style.transform="rotate(0deg)";
}
getEl('butDown').onclick=function(){
   marginUpDown +=10; 
   getEl('img').style.marginTop=marginUpDown+"px";
   getEl('img').style.transform="rotate(180deg)";
   
}
var marginSides = 600;
getEl('butLeft').onclick=function(){
   marginSides -=10;
   getEl('img').style.marginLeft=marginSides+"px";
   getEl('img').style.transform="rotate(-90deg)";
}
getEl('butRight').onclick=function(){
   marginSides +=10;
   getEl('img').style.marginLeft=marginSides+"px";
   getEl('img').style.transform="rotate(90deg)";
}
getEl('butRightUp').onclick=function(){
   marginSides +=10;
   marginUpDown -=10; 
   getEl('img').style.marginTop=marginUpDown+"px";
   getEl('img').style.marginLeft=marginSides+"px";
   getEl('img').style.transform="rotate(45deg)";
}
getEl('butLeftUp').onclick=function(){
   marginSides -=10;
   marginUpDown -=10; 
   getEl('img').style.marginTop=marginUpDown+"px";
   getEl('img').style.marginLeft=marginSides+"px";
   getEl('img').style.transform="rotate(-45deg)";
}
getEl('butLeftDown').onclick=function(){
   marginSides -=10;
   marginUpDown +=10; 
   getEl('img').style.marginTop=marginUpDown+"px";
   getEl('img').style.marginLeft=marginSides+"px";
   getEl('img').style.transform="rotate(235deg)";
}
getEl('butRightDown').onclick=function(){
   marginSides +=10;
   marginUpDown +=10; 
   getEl('img').style.marginTop=marginUpDown+"px";
   getEl('img').style.marginLeft=marginSides+"px";
   getEl('img').style.transform="rotate(-235deg)";
}
var imgH = 100;
var imgW = 100;
getEl('bigger').onclick=function(){
   imgH+=10;
   imgW+=10;
   getEl('img').style.height=imgH+"px";
   getEl('img').style.width=imgW+"px";
}
getEl('smaller').onclick=function(){
   imgH-=10;
   imgW-=10;
   getEl('img').style.height=imgH+"px";
   getEl('img').style.width=imgW+"px";
}
getEl('putHero').onclick=function(){
   getEl('heroes').style.display="block";
   for(var i=1;i<=4;i++){
      getEl('hero'+i).style.background="url(./img/angry"+i+".png) no-repeat center";
      getEl('hero'+i).style.backgroundSize="70px";
   }
  
}

   getEl('hero1').onclick=function(){ 
   getEl('img').src='./img/angry1.png'; 
      getEl('heroes').style.display="none";
   }
   getEl('hero2').onclick=function(){ 
   getEl('img').src='./img/angry2.png';  
      getEl('heroes').style.display="none";
   }
   getEl('hero3').onclick=function(){ 
   getEl('img').src='./img/angry3.png';  
      getEl('heroes').style.display="none";
   }
   getEl('hero4').onclick=function(){ 
   getEl('img').src='./img/angry4.png';  
      getEl('heroes').style.display="none";
   }

