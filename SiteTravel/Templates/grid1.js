console.log('start..');
window.onload=function(){
    console.log('loaded..');
var imgMain=document.getElementById('mainImg');
console.log('img.. '+imgMain);
var imgid1=document.getElementById('img1');
var imgid2=document.getElementById('img2');
var imgid3=document.getElementById('img3');
var imgid4=document.getElementById('img4');
imgid1.onmousemove=function(){
    console.log('clicked this img');
imgMain.setAttribute('src','/img/zoom001.PNG');
}
imgid2.onmousemove=function(){
    console.log('clicked this img');
    imgMain.setAttribute('src','/img/zoom002.PNG');
    }
imgid3.onmousemove=function(){
    console.log('clicked this img');
    imgMain.setAttribute('src','/img/zoom003.PNG');
    }
imgid4.onmousemove=function(){
    console.log('clicked this img');
        imgMain.setAttribute('src','/img/zoom004.PNG');
        }   
}
