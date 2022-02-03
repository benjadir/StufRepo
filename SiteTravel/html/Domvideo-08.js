var myImage=document.querySelector('img');
if(myImage.hasAttribute('alt')){
    console.log('this element has attribute :alt');
    if(myImage.alt===''){
        myImage.setAttribute('alt','default this');//if alt does not exist it will add it to the dom
        myImage.removeAttribute('alt');

    }

}else{
    console.log('this element has not an attribute :alt');
}