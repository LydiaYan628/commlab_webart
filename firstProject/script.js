let hello = document.getElementById("hello");
let yes= document.getElementById("yes");
let introvideo=document.getElementById("introvid");
let videoend=false;

// index1
function start(){
  hello.style.transition="opacity 2s";
  yes.style.transition="opacity 2s";
  hello.style.opacity=0;
  yes.style.opacity=0;
  hello.style.display="none";
  yes.style.display="none";
  setTimeout(videoappear,100);
}



function videoappear(){
  // introvideo.style.display="block";
  // introvideo.style.opacity=0;
  introvideo.style.height="100%";
  // introvideo.style.transition="opacity 1s";
  introvideo.style.opacity=1;
  introvideo.play();
  // setTimeout(volumedown,30000);
}
//
// function volumedown(){
//   introvideo.volume="0.5";
//   setTimeout(volumedown2,2000);
// }
//
// function volumedown2(){
//   introvideo.volume="0.2";
// }

introvideo.addEventListener("ended",videodisappear);


function videodisappear(){
  videoend=true;
  if(videoend==true){
    introvideo.style.display="none";
  }
  window.location.href="index2.html";
}
