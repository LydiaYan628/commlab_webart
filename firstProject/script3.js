let word=document.getElementById("finalwords1");

function final(){
  setTimeout(final2,2500);
}

function final2(){
  // word.style.transition="opacity 1s";
  word.style.opacity=0;
  setTimeout(final2a,1000);
}

function final2a(){
  word.style.opacity=1;
  word.innerHTML="wish you have a better walk for the rest of the day";

  setTimeout(final3,3000);
}

function final3(){
  // word.style.transition="opacity 1s";
  word.style.opacity=0;
  setTimeout(final3a,1000);
}

function final3a(){
  word.style.opacity=1;
  word.innerHTML="Wish you have a better walk for the rest of the day";

  setTimeout(final3,3500);
}

function final3(){
  // word.style.transition="opacity 1s";
  word.style.opacity=0;
  setTimeout(final4,1000);
}

function final4(){
  // word.style.transition="opacity 1s";
  word.style.opacity=1;
  word.innerHTML="check out on the website below to know more " ;
  document.getElementById("finallink1").style.opacity=1;
  document.getElementById("finallink2").style.opacity=1;
}
