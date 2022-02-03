/***FIRST LECTURE   */
myelement=document.createElement('div');
content=document.createTextNode("hello rida you're doing a good job!");
myelement.appendChild(content);
document.body.appendChild(myelement);
/*****END FIRST LECTURE */

/****SECONDE LECTURE */
/**
 * [1]document.getElementById()
 * [2]document.getElementsByTagName()
 * [3]document.getElementsByClassName() |not compatible with IEE8
 * [4]document.querySlectorAll() //argument can take anything p.class
 */
var divElement=document.getElementById('test');

setTimeout(()=>{
    divElement.innerHTML='Done!';
},3000);

var element=document.getElementsByTagName('div');
setTimeout(()=>{
    element[1].innerHTML='the first div has changed';
    element[2].innerHTML='the seconde div has changed';
    element[3].innerHTML='the third div has changed';
    element[4].innerHTML='the four div has changed';
},5000);
/** lecture 3
 * [1]document.title
 * [2]document.images  // document.images[i].src
 * [3]document.forms//document.forms[0].name_of_form_field.value
 * [4]document.body
 * [5]document.anchors  //links in your page withou href
 * [6]document.links
 */

var mydiv=document.getElementById('show');
setTimeout(()=>{
    mydiv.innerHTML=document.title;
},4000);

//lecture 5:change content of an Elements
/**
 * [1]innerText //not standard
 * [2]outerText //not standard
 * [3]innerHTML //
 * [4]outerHTML 
 * [5]textContent
 */
 

//lecture 6 SET ATTRIBUTES
/*******************************************************************************
 * [1]
 * [2]
 * [3]
 * [4]
 ************************/