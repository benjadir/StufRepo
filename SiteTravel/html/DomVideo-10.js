/*mydiv=document.getElementById('idmain');*/
/**
 * TO ADD A CLASS TO THE EXISTING ONES I CAN USE THIS
 * mydiv.className +=' newClass';
 */
/*
setTimeout(()=>{
    mydiv.className+=' newclass1';
},3000);
setTimeout(()=>{
    mydiv.className+=' newclass2';
},5000);*/

mydiv=document.getElementById('addclass');
mybutton=document.querySelector('button.addbutton'); 
mybutton2=document.querySelector('button.removebutton');
mybutton3=document.getElementById('ftoggle');
var counter=1;
mybutton.onclick=function (){
    'use strict'; 
    console.log(counter);
   mydiv.classList.add('newClass'+counter);
   console.log('newclass'+counter+' ' +'was added');
   // mydiv.className+=' newclass'+counter;
   
    counter++;
}
mybutton2.onclick=function (){
    //mybutton2.classList.remove('newclass1');
    mydiv.classList.remove('newClass'+counter);
    console.log('newclass'+counter+' ' +'removed');
    counter --;
}

/**
 * USE CASE OF TOGGLE CLASS
 * this class add a class if it doesnt exist and remove if if not
 */

 mybutton3.onclick=function (){
    //mybutton2.classList.remove('newclass1');
    mydiv.classList.toggle('main');
    console.log('main was toggled'+': ['+counter+']');
    counter ++;
}

