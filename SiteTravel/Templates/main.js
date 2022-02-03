


window.onload = function(){
console.log('loaded..');
var imgMain=document.getElementById('mainImg');
console.log('img.. '+imgMain);
var imgid1=document.getElementById('img1');
var imgid2=document.getElementById('img2');
var imgid3=document.getElementById('img3');
var imgid4=document.getElementById('img4');
    
var mybtn=document.getElementById('btnplus');
var mybtnminus=document.getElementById('btnminus');
    var i=1;
    var inpu=document.getElementById('myinput');
inpu.value=''+i;
   mybtn.onclick=function(){
       i++;
        inpu.value=''+i;
    }
    mybtnminus.onclick=function(){
        if(i>1){
            i--;
            inpu.value=''+i; 
        }
    }

    imgid1.onmouseover=function(){
        console.log('clicked this img');
    imgMain.setAttribute('src','/img/spadri-002.PNG');
    }
    imgid2.onmouseover=function(){
        console.log('clicked this img');
        imgMain.setAttribute('src','/img/spadri-003.PNG');
        }
    imgid3.onmouseover=function(){
        console.log('clicked this img');
        imgMain.setAttribute('src','/img/spadri-004.PNG');
        }
    imgid4.onmouseover=function(){
        console.log('clicked this img');
            imgMain.setAttribute('src','/img/spadri-005.PNG');
            } 
            imgid1.onmouseleave=function(){
                //imgid1.style.opacity=1;
                //imgid1.style.outline='2px solid #666';
                //imgid1.style.scale(1.5,1.5);

            }
           var  navdisplay=document.getElementById('nav');
           var menubtn=document.getElementById('menubar');
           menubtn.onclick=function(){
               console.log('menu btn was clicked!');
               if(navdisplay.style.display==='block'){
                navdisplay.style.display='none';
                menubtn.classList.remove('fa-times');
                menubtn.classList.toggle('fa-bars');
               }else{
                navdisplay.style.display='block';
                menubtn.classList.remove('fa-bars');
                menubtn.classList.toggle('fa-times');
               }
           }
           window.onscroll=function(){
            if(navdisplay.style.display==='block'){
                navdisplay.style.display='none';
                menubtn.classList.remove('fa-times');
                menubtn.classList.toggle('fa-bars');
            }
           }

}


