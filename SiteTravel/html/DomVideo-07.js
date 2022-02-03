myImage=document.querySelector('img');

// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () { // We need to wrap the loop into an async function for this to work
  for (var i = 1; i < 5; i++) {
    myImage.setAttribute('src','/img/img0'+i+'.jpg');
    myImage.setAttribute('alt','alt '+i);
    myImage.setAttribute('title','my title... '+i);
    await timer(4000); // then the created Promise can be awaited
  }
}

load();