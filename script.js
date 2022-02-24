let bigdiv1=document.getElementById("bigdiv1");
let bigdiv2=document.getElementById("bigdiv2");
let bigdiv3=document.getElementById("bigdiv3");
let bigdiv4=document.getElementById("bigdiv4");
let bigdiv5=document.getElementById("bigdiv5");

let walkvideo=document.getElementById("walkvideo");
let sitvideo=document.getElementById("sitvideo");
let walklocation=document.getElementById("walklocation");
let sitlocation=document.getElementById("sitlocation");

let rotation=document.getElementById("draggable");
let rotation2=document.getElementById("draggable2");

function clock1(){
  bigdiv1.style.opacity=0;
  bigdiv1.style.height="0px";
  bigdiv1.style.pointerEvents = "none";
  bigdiv2.style.height="768px";
  bigdiv2.style.opacity=1;
  bigdiv2.style.pointerEvents = "all";
}


// bigdiv2
function clockback() {
  bigdiv2.style.height = "0px";
  bigdiv2.style.opacity=0;
  bigdiv2.style.pointerEvents = "none";
  bigdiv1.style.height = "768px";
  bigdiv1.style.opacity = 1;
  bigdiv1.style.pointerEvents = "all";
}

function walk(){
  bigdiv2.style.opacity=0;
  bigdiv2.style.height="0px";
  bigdiv2.style.pointerEvents = "none";
  bigdiv3.style.height="768px";
  bigdiv3.style.opacity=1;
  bigdiv3.style.pointerEvents = "all";
  walkvideo.play();
  // setTimeout(timecount,0);
}

function sit(){
  bigdiv2.style.opacity=0;
  bigdiv2.style.height="0px";
  bigdiv2.style.pointerEvents = "none";
  bigdiv4.style.height="768px";
  bigdiv4.style.opacity=1;
  bigdiv4.style.pointerEvents = "all";
  sitvideo.play();
}


// bigdiv3
function walkback() {
  bigdiv3.style.height = "0px";
  bigdiv3.style.opacity=0;
  bigdiv3.style.pointerEvents = "none";
  bigdiv2.style.height = "768px";
  bigdiv2.style.opacity = 1;
  bigdiv2.style.pointerEvents = "all";
  walkvideo.pause();
  document.getElementById("a1").pause();
  document.getElementById("a2").pause();
  document.getElementById("a3").pause();
  document.getElementById("a4").pause();
  document.getElementById("a5").pause();
  document.getElementById("a6").pause();
}

function timecount(){
  // console.log("work");

  if (walkvideo.currentTime>=5 && walkvideo.currentTime<39){
    walklocation.innerHTML="北京航空航天大学· Beihang University 7:28";
    walklocation.addEventListener("click",beihang);
  } else if (walkvideo.currentTime>=39 && walkvideo.currentTime<63){
    walklocation.innerHTML="北京航空航天大学· Beihang University 7:49";
        walklocation.addEventListener("click",beihang);
  }else if (walkvideo.currentTime>=63 && walkvideo.currentTime<95){
    walklocation.innerHTML="北京大学·Peking University 7:53";
        walklocation.addEventListener("click",beida);
  }else if (walkvideo.currentTime>=95 && walkvideo.currentTime<121){
    walklocation.innerHTML="北京大学· Peking University 8:08";
        walklocation.addEventListener("click",beida);
  }else if (walkvideo.currentTime>=121 && walkvideo.currentTime<154){
    walklocation.innerHTML="北京大学· Peking University 8:15";
        walklocation.addEventListener("click",beida);
  }else if (walkvideo.currentTime>=154 && walkvideo.currentTime<183){
    walklocation.innerHTML="华南理工大学· South China University of Technology 8:42";
        walklocation.addEventListener("click",huananligong);
  }else if (walkvideo.currentTime>=183 && walkvideo.currentTime<210){
    walklocation.innerHTML="北京师范大学· Beijing Normal University 9:58";
    walklocation.addEventListener("click",beishida);
  }else if (walkvideo.currentTime>=210 && walkvideo.currentTime<238){
    walklocation.innerHTML="首都医科大学· Capital Medical University 11:28";
    walklocation.addEventListener("click",shouyi);
  }else if (walkvideo.currentTime>=238 && walkvideo.currentTime<269){
    walklocation.innerHTML="北京电影学院· Beijing Film Academy 11:38";
    walklocation.addEventListener("click",beidian);
  }else if (walkvideo.currentTime>=269 && walkvideo.currentTime<297){
    walklocation.innerHTML="Johns Hopkins Unversity 12:47";
    walklocation.addEventListener("click",jhu);
  }else if (walkvideo.currentTime>=297 && walkvideo.currentTime<328){
    walklocation.innerHTML="北京林业大学· Beijing Forestry University 13:02";
    walklocation.addEventListener("click",beilin);
  }else if (walkvideo.currentTime>=328 && walkvideo.currentTime<358){
    walklocation.innerHTML="北京交通大学· Beijing Jiaotong University 13:28";
    walklocation.addEventListener("click",beijiao);
  }else if (walkvideo.currentTime>=358 && walkvideo.currentTime<388){
    walklocation.innerHTML="中国农业大学· China Agricultural University 13:29";
    walklocation.addEventListener("click",nongda);
  }else if (walkvideo.currentTime>=388 && walkvideo.currentTime<419){
    walklocation.innerHTML="中国人民大学· Renmin University of China 13:45";
    walklocation.addEventListener("click",renda);
  }else if (walkvideo.currentTime>=419 && walkvideo.currentTime<446){
    walklocation.innerHTML="中国农业大学· China Agricultural University 13:54";
    walklocation.addEventListener("click",nongda);
  }else if (walkvideo.currentTime>=446 && walkvideo.currentTime<476){
    walklocation.innerHTML="西南政法大学· Southeast University of Political science & Law 14:02";
    walklocation.addEventListener("click",xizheng);
  }else if (walkvideo.currentTime>=476 && walkvideo.currentTime<508){
    walklocation.innerHTML="上海交通大学· Shanghai Jiaotong University 14:41";
    walklocation.addEventListener("click",shangjiao);
  }else if (walkvideo.currentTime>=508 && walkvideo.currentTime<536){
    walklocation.innerHTML="北京理工大学· Beijing Institute of Technology 14:59";
    walklocation.addEventListener("click",beili);
  }else if (walkvideo.currentTime>=536 && walkvideo.currentTime<565){
    walklocation.innerHTML="University of Wisconsin Madison 15:03";
    walklocation.addEventListener("click",madison);
  }else if (walkvideo.currentTime>=565 && walkvideo.currentTime<596){
    walklocation.innerHTML="北京工业大学· Beijing University of Technology 15:11";
    walklocation.addEventListener("click",beigongda);
  }else if (walkvideo.currentTime>=596 && walkvideo.currentTime<627){
    walklocation.innerHTML="首都经济贸易大学· Capital University of Economics and Business 15:27";
    walklocation.addEventListener("click",shoujingmao);
  }else if (walkvideo.currentTime>=627 && walkvideo.currentTime<654){
    walklocation.innerHTML="复旦大学· Fudan University 15:35";
    walklocation.addEventListener("click",fudan);
  }else if (walkvideo.currentTime>=654 && walkvideo.currentTime<685){
    walklocation.innerHTML="中央财经大学· Central University of Finance and Economics 15:46";
    walklocation.addEventListener("click",yangcai);
  }else if (walkvideo.currentTime>=685 && walkvideo.currentTime<717){
    walklocation.innerHTML="中央财经大学· Central University of Finance and Economics 15:50";
    walklocation.addEventListener("click",yangcai);
  }else if (walkvideo.currentTime>=717 && walkvideo.currentTime<745){
    walklocation.innerHTML="University of Wisconsin Madison 16:02";
    walklocation.addEventListener("click",madison);
  }else if (walkvideo.currentTime>=745 && walkvideo.currentTime<834){
    walklocation.innerHTML="四川大学· Sichuan University 16:03";
    walklocation.addEventListener("click",chuanda);
  }else if (walkvideo.currentTime>=834 && walkvideo.currentTime<863){
    walklocation.innerHTML="中山大学· Sun Yat- Sen University 16:15";
    walklocation.addEventListener("click",zhongshan);
  }else if (walkvideo.currentTime>=863 && walkvideo.currentTime<894){
    walklocation.innerHTML="西交利物浦大学· Xi'an Jiaotong- Liverpool University 16:36";
    walklocation.addEventListener("click",xijiao);
  }else if (walkvideo.currentTime>=894 && walkvideo.currentTime<922){
    walklocation.innerHTML="清华大学· Tsinghua University 16:51";
    walklocation.addEventListener("click",qinghua);
  }else if (walkvideo.currentTime>=922 && walkvideo.currentTime<951){
    walklocation.innerHTML="University of Wisconsin Madison 17:18";
    walklocation.addEventListener("click",madison);
  }else if (walkvideo.currentTime>=951 && walkvideo.currentTime<979){
    walklocation.innerHTML="北京工业大学· Beijing University of Technology 17:19";
    walklocation.addEventListener("click",beigongda);
  }else if (walkvideo.currentTime>=979 && walkvideo.currentTime<1007){
    walklocation.innerHTML="华中科技大学· Huazhong University of Science and Technology 17:48";
    walklocation.addEventListener("click",hauzhongkeji);
  }else if (walkvideo.currentTime>=1007 && walkvideo.currentTime<1041){
    walklocation.innerHTML="中央民族大学· Minzu University of China 18:14";
    walklocation.addEventListener("click",minzu);
  }else if (walkvideo.currentTime>=1041 && walkvideo.currentTime<1069){
    walklocation.innerHTML="北京航空航天大学· Beihang University 19:40";
    walklocation.addEventListener("click",beihang);
  }else if (walkvideo.currentTime>=1069 && walkvideo.currentTime<1100){
    walklocation.innerHTML="University of Wisconsin Madison 20:48";
    walklocation.addEventListener("click",madison);
  }else if (walkvideo.currentTime>=1100 && walkvideo.currentTime<1137){
    walklocation.innerHTML="Have a Rest";
  }



let zhuan= (walkvideo.currentTime/walkvideo.duration)*360;

let rotation=document.getElementById("draggable");

var rotateCSS = 'rotate(' + zhuan + 'deg)';
$('#rotateable').css({
  '-moz-transform': rotateCSS,
  '-webkit-transform': rotateCSS
});


}


// https://codepen.io/graphilla/pen/MybXwy
$('#rotateable').draggable({
  handle: '#rotate',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1));
console.log(degree+180, walkvideo.duration);
    let degreePercent = (degree+180)/360;
    let timeLine = degreePercent*walkvideo.duration;
    walkvideo.currentTime = timeLine;



    var rotateCSS = 'rotate(' + (degree + 180) + 'deg)';
    $('#rotateable').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});

$("#walk").click(function(){
  var x = $("#rotate").position();
  console.log("Top: " + x.top + " Left: " + x.left);
});


function w1() {
    walkvideo.currentTime = 5;
}

function w2() {
    walkvideo.currentTime = 63;
}
function w3() {
    walkvideo.currentTime = 154;
}
function w4() {
    walkvideo.currentTime = 183;
}
function w5() {
    walkvideo.currentTime = 210;
}
function w6() {
    walkvideo.currentTime = 238;
}
function w7() {
    walkvideo.currentTime = 269;
}
function w8() {
    walkvideo.currentTime = 297;
}
function w9() {
    walkvideo.currentTime = 328;
}
function w10() {
    walkvideo.currentTime = 358;
}
function w11() {
    walkvideo.currentTime = 388;
}
function w12() {
    walkvideo.currentTime = 446;
}
function w13() {
    walkvideo.currentTime = 476;
}
function w14() {
    walkvideo.currentTime = 508;
}
function w15() {
    walkvideo.currentTime = 536;
}
function w16() {
    walkvideo.currentTime = 565;
}
function w17() {
    walkvideo.currentTime = 596;
}
function w18() {
    walkvideo.currentTime = 627;
}
function w19() {
    walkvideo.currentTime = 654;
}
function w20() {
    walkvideo.currentTime = 745;
}
function w21() {
    walkvideo.currentTime = 834;
}
function w22() {
    walkvideo.currentTime = 863;
}
function w23() {
    walkvideo.currentTime = 894;
}
function w24() {
    walkvideo.currentTime = 979;
}
function w25() {
    walkvideo.currentTime = 1007;
}

//
// let drylandtimer=0;
//
//
// function dryland(){
//   if (drylandtimer=0){
//   document.getElementById("dryland").style.color="yellow";
//
// document.getElementById("adryland").play();
//   drylandtimer++;
//   walkvideo.muted=true;
//   console.log(play);
// } else if (drylandtimer=1){
//   document.getElementById("dryland").style.color="white";
// document.getElementById("adryland").pause()
//   drylandtimer-1;
//   walkvideo.muted=false;
// }
// }



function y1(){
document.getElementById("a1").play();
document.getElementById("y1").style.color="yellow";
document.getElementById("y1").style.opacity=1;
}

function y2(){
document.getElementById("a2").play();
document.getElementById("y2").style.color="yellow";
document.getElementById("y2").style.opacity=1;
}
function y3(){
document.getElementById("a3").play();
document.getElementById("y3").style.color="yellow";
document.getElementById("y3").style.opacity=1;
}
function y4(){
document.getElementById("a4").play();
document.getElementById("y4").style.color="yellow";
document.getElementById("y4").style.opacity=1;
}
function y5(){
document.getElementById("a5").play();
document.getElementById("y5").style.color="yellow";
document.getElementById("y5").style.opacity=1;
}
function y6(){
document.getElementById("a6").play();
document.getElementById("y6").style.color="yellow";
document.getElementById("y6").style.opacity=1;
}
function n1(){
document.getElementById("a1").pause();
document.getElementById("y1").style.color="white";
document.getElementById("y1").style.opacity=0.5;
}
function n2(){
document.getElementById("a2").pause();
document.getElementById("y2").style.color="white";
document.getElementById("y2").style.opacity=0.5;
}
function n3(){
document.getElementById("a3").pause();
document.getElementById("y3").style.color="white";
document.getElementById("y3").style.opacity=0.5;
}
function n4(){
document.getElementById("a4").pause();
document.getElementById("y4").style.color="white";
document.getElementById("y4").style.opacity=0.5;
}
function n5(){
document.getElementById("a5").pause();
document.getElementById("y5").style.color="white";
document.getElementById("y5").style.opacity=0.5;
}
function n6(){
document.getElementById("a6").pause();
document.getElementById("y6").style.color="white";
document.getElementById("y6").style.opacity=0.5;
}

// bigdiv4
function sitback(){
  bigdiv4.style.height = "0px";
  bigdiv4.style.opacity=0;
  bigdiv4.style.pointerEvents = "none";
  bigdiv2.style.height = "768px";
  bigdiv2.style.opacity = 1;
  bigdiv2.style.pointerEvents = "all";
  sitvideo.pause();
  document.getElementById("a7").pause();
  document.getElementById("a8").pause();
  document.getElementById("a9").pause();

}

function timecount2(){
  if (sitvideo.currentTime>=6 && sitvideo.currentTime<38){
    sitlocation.addEventListener("click",beida);
    sitlocation.innerHTML="北京大学·Peking University 7:53";
  } else if (sitvideo.currentTime>=38 && sitvideo.currentTime<70){
      sitlocation.addEventListener("click",nyush);
    sitlocation.innerHTML="上海纽约大学· NYU shanghai 9:00";
  }else if (sitvideo.currentTime>=70 && sitvideo.currentTime<98){
    sitlocation.innerHTML="首都医科大学· Capital Medical University 11:28";
          sitlocation.addEventListener("click",shouyi);
  }else if (sitvideo.currentTime>=98 && sitvideo.currentTime<131){
    sitlocation.innerHTML="Johns Hopkins Unversity 12:47";
          sitlocation.addEventListener("click",jhu);
  }else if (sitvideo.currentTime>=131 && sitvideo.currentTime<161){
    sitlocation.innerHTML="北京林业大学· Beijing Forestry University 13:02";
          sitlocation.addEventListener("click",beilin);
  }else if (sitvideo.currentTime>=161 && sitvideo.currentTime<192){
    sitlocation.innerHTML="北京交通大学· Beijing Jiaotong University 13:28";
          sitlocation.addEventListener("click",beijiao);
  }else if (sitvideo.currentTime>=192 && sitvideo.currentTime<224){
    sitlocation.innerHTML="中国农业大学· China Agricultural University 13:29";
          sitlocation.addEventListener("click",nongda);
  }else if (sitvideo.currentTime>=224 && sitvideo.currentTime<253){
    sitlocation.innerHTML="北京电影学院· Beijing Film Academy 13:39";
          sitlocation.addEventListener("click",beidian);
  }else if (sitvideo.currentTime>=253 && sitvideo.currentTime<283){
    sitlocation.innerHTML="上海交通大学· Shanghai Jiaotong University 13:45";
          sitlocation.addEventListener("click",shangjiao);
  }else if (sitvideo.currentTime>=283 && sitvideo.currentTime<315){
    sitlocation.innerHTML="中国人民大学· Renmin University of China 13:46";
          sitlocation.addEventListener("click",renda);
  }else if (sitvideo.currentTime>=315&& sitvideo.currentTime<344){
    sitlocation.innerHTML="中国农业大学· China Agricultural University 13:54";
          sitlocation.addEventListener("click",nongda);
  }else if (sitvideo.currentTime>=344 && sitvideo.currentTime<375){
    sitlocation.innerHTML="西南政法大学· Southeast University of Political science & Law 14:02";
          sitlocation.addEventListener("click",xizheng);
  }else if (sitvideo.currentTime>=375 && sitvideo.currentTime<404){
    sitlocation.innerHTML="北京理工大学· Beijing Institute of Technology 14:53";
          sitlocation.addEventListener("click",beili);
  }else if (sitvideo.currentTime>=404 && sitvideo.currentTime<437){
    sitlocation.innerHTML="西交利物浦大学· Xi'an Jiaotong- Liverpool University 15:10";
          sitlocation.addEventListener("click",xijiao);
  }else if (sitvideo.currentTime>=437 && sitvideo.currentTime<465){
    sitlocation.innerHTML="北京工业大学· Beijing University of Technology 15:11";
          sitlocation.addEventListener("click",beigongda);
  }else if (sitvideo.currentTime>=465 && sitvideo.currentTime<499){
    sitlocation.innerHTML="北京师范大学· Beijing Normal University 15:16";
          sitlocation.addEventListener("click",beishida);
  }else if (sitvideo.currentTime>=499 && sitvideo.currentTime<520){
    sitlocation.innerHTML="复旦大学· Fudan University 15:35";
          sitlocation.addEventListener("click",fudan);
  }else if (sitvideo.currentTime>=520 && sitvideo.currentTime<551){
    sitlocation.innerHTML="University of Wisconsin Madison 15:40";
          sitlocation.addEventListener("click",madison);
  }else if (sitvideo.currentTime>=551 && sitvideo.currentTime<577){
    sitlocation.innerHTML="中央财经大学· Central University of Finance and Economics 15:46";
          sitlocation.addEventListener("click",yangcai);
  }else if (sitvideo.currentTime>=577 && sitvideo.currentTime<608){
    sitlocation.innerHTML="四川大学· Sichuan University 16:03";
          sitlocation.addEventListener("click",chuanda);
  }else if (sitvideo.currentTime>=608 && sitvideo.currentTime<638){
    sitlocation.innerHTML="中山大学· Sun Yat- Sen University 16:15";
          sitlocation.addEventListener("click",zhongshan);
  }else if (sitvideo.currentTime>=638 && sitvideo.currentTime<684){
    sitlocation.innerHTML="清华大学· Tsinghua University 16:51";
          sitlocation.addEventListener("click",qinghua);
  }else if (sitvideo.currentTime>=684 && sitvideo.currentTime<714){
    sitlocation.innerHTML="北京工业大学· Beijing University of Technology 17:19";
          sitlocation.addEventListener("click",beigongda);
  }else if (sitvideo.currentTime>=714 && sitvideo.currentTime<743){
    sitlocation.innerHTML="华中科技大学· Huazhong University of Science and Technology 17:48";
          sitlocation.addEventListener("click",huazhongkeji);
  }else if (sitvideo.currentTime>=743&& sitvideo.currentTime<780){
    sitlocation.innerHTML="中央民族大学· Minzu University of China 18:14";
          sitlocation.addEventListener("click",minzu);
  }else if (sitvideo.currentTime>=780 && sitvideo.currentTime<808){
    sitlocation.innerHTML="北京航空航天大学· Beihang University 19:40";
          sitlocation.addEventListener("click",beihang);
  }else if (sitvideo.currentTime>=808&& sitvideo.currentTime<847){
    sitlocation.innerHTML="Have a rest now";
  }


let zhuan2= (sitvideo.currentTime/sitvideo.duration)*360;

let rotation2=document.getElementById("draggable2");

var rotateCSS = 'rotate(' + zhuan2 + 'deg)';
$('#rotateable2').css({
  '-moz-transform': rotateCSS,
  '-webkit-transform': rotateCSS
});
}

// https://codepen.io/graphilla/pen/MybXwy
$('#rotateable2').draggable({
  handle: '#rotate2',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable2'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1));
console.log(degree+180, sitvideo.duration);
    let degreePercent = (degree+180)/360;
    let timeLine = degreePercent*sitvideo.duration;
    sitvideo.currentTime = timeLine;



    var rotateCSS = 'rotate(' + (degree + 180) + 'deg)';
    $('#rotateable2').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});

$("#sit").click(function(){
  var x = $("#rotate2").position();
  console.log("Top: " + x.top + " Left: " + x.left);
});

function s1() {
    sitvideo.currentTime = 6;
}

function s2() {
    sitvideo.currentTime = 38;
}

function s3() {
    sitvideo.currentTime = 70;
}

function s4() {
    sitvideo.currentTime = 98;
}

function s5() {
    sitvideo.currentTime = 131;
}

function s6() {
    sitvideo.currentTime = 161;
}

function s7() {
    sitvideo.currentTime = 192;
}

function s8() {
    sitvideo.currentTime = 224;
}

function s9() {
    sitvideo.currentTime = 253;
}

function s10() {
    sitvideo.currentTime = 283;
}

function s11() {
    sitvideo.currentTime = 344;
}

function s12() {
    sitvideo.currentTime = 375;
}

function s13() {
    sitvideo.currentTime = 404;
}

function s14() {
    sitvideo.currentTime = 437;
}

function s15() {
    sitvideo.currentTime = 465;
}
function s16(){
  walkvideo.currentTime=499;
}
function s17() {
    sitvideo.currentTime = 520;
}

function s18() {
    sitvideo.currentTime = 551;
}

function s19() {
    sitvideo.currentTime = 577;
}
function s20(){
  sitvideo.currentTime=608;
}
function s21() {
    sitvideo.currentTime = 638;
}
function s22(){
  sitvideo.currentTime=714;
}
function s23() {
    sitvideo.currentTime = 743;
}

function s24() {
    sitvideo.currentTime = 780;
}

function y7(){
document.getElementById("a7").play();
document.getElementById("y7").style.color="yellow";
document.getElementById("y7").style.opacity=1;
}

function y8(){
document.getElementById("a8").play();
document.getElementById("y8").style.color="yellow";
document.getElementById("y8").style.opacity=1;
}
function y9(){
document.getElementById("a9").play();
document.getElementById("y9").style.color="yellow";
document.getElementById("y9").style.opacity=1;
}
function n7(){
document.getElementById("a7").pause();
document.getElementById("y7").style.color="white";
document.getElementById("y7").style.opacity=0.5;
}
function n8(){
document.getElementById("a8").pause();
document.getElementById("y8").style.color="white";
document.getElementById("y8").style.opacity=0.5;
}
function n9(){
document.getElementById("a9").pause();
document.getElementById("y9").style.color="white";
document.getElementById("y9").style.opacity=0.5;
}



function artist(){
  bigdiv2.style.opacity=0;
  bigdiv2.style.height="0px";
  bigdiv2.style.pointerEvents = "none";
  bigdiv5.style.height="768px";
  bigdiv5.style.opacity=1;
  bigdiv5.style.pointerEvents = "all";
}

function aback(){
  bigdiv5.style.opacity=0;
  bigdiv5.style.height="0px";
  bigdiv5.style.pointerEvents = "none";
  bigdiv2.style.height="768px";
  bigdiv2.style.opacity=1;
  bigdiv2.style.pointerEvents = "all";
}







function beihang(){
  window.open("https://www.google.com/maps/place/Beihang+University,+Wu+Dao+Kou,+Haidian+Qu,+Beijing+Shi,+China/@39.9828075,116.3389444,17z/data=!3m1!4b1!4m5!3m4!1s0x35f05409bd2c2d03:0x47a6a558a13cf740!8m2!3d39.9828034!4d116.3411331");
}

function beida(){
  window.open("https://www.google.com/maps/place/Peking+University/@39.9869171,116.3036852,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0514b0d02a275:0x7bc19cd881ca04cb!8m2!3d39.986913!4d116.3058739");
}

function huananligong(){
  window.open("https://www.google.com/maps/place/South+China+University+of+Technology/@23.1513309,113.3424943,17z/data=!3m1!4b1!4m5!3m4!1s0x3402fe5ce23fbe85:0x360fcba557239b4f!8m2!3d23.151326!4d113.344683");
}

function beishida(){
  window.open("https://www.google.com/maps/place/Beijing+Normal+University/@39.9619578,116.3640728,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0539a1478f3c5:0xbda1b62bbdaed773!8m2!3d39.9619537!4d116.3662615");
}

function shouyi(){
  window.open("https://www.google.com/maps/place/Capital+Medical+University/@39.8651811,116.3507273,17z/data=!3m1!4b1!4m5!3m4!1s0x35f04db4f31760c9:0xa20579d6b10a1c7c!8m2!3d39.865177!4d116.352916");
}

function beidian(){
  window.open("https://goo.gl/maps/4AcvpizwvEa3Awdg9");
}

function jhu(){
  window.open("https://www.google.com/maps/place/Johns+Hopkins+University/@39.3299054,-76.6227064,17z/data=!3m1!4b1!4m5!3m4!1s0x89c804df8502f88d:0x303d58494fa04c66!8m2!3d39.3299013!4d-76.6205177");
}

function beilin(){
  window.open("https://www.google.com/maps/place/%E5%8C%97%E4%BA%AC%E6%9E%97%E4%B8%9A%E5%A4%A7%E5%AD%A6/@40.0044921,116.3477836,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0543e527ccc23:0x3c684b70286dc9a3!8m2!3d40.004488!4d116.3499723");
}

function beijiao(){
  window.open("https://www.google.com/maps/place/Beijing+Jiaotong+University+%EF%BC%88East+Campus%EF%BC%89/@39.9489976,116.3440114,17z/data=!4m8!1m2!2m1!1sbeijingjiaotonguni!3m4!1s0x35f053c9f6ac88b9:0x31bbba9bcb346547!8m2!3d39.9461596!4d116.3469271");
}

function nongda(){
  window.open("https://www.google.com/maps/place/China+Agricultural+University/@40.0042061,116.3507993,17z/data=!3m1!4b1!4m5!3m4!1s0x35f054468b58daf5:0xab4264b688614874!8m2!3d40.004202!4d116.352988");
}

function renda(){
  window.open("https://www.google.com/maps/place/Renmin+University+of+China/@39.9696103,116.3166258,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0515cd8efeee5:0x683ff95c7513165f!8m2!3d39.9696062!4d116.3188145");
}

function xizheng(){
  window.open("https://www.google.com/maps/place/Southwest+University+of+Political+Science+%26+Law/@29.6653556,106.5930523,17z/data=!4m8!1m2!2m1!1z6KW_5Y2X5pS_5rOV5aSn5a2m!3m4!1s0x36932d8fd9be2dfb:0xe648282a8606d38b!8m2!3d29.663574!4d106.595843");
}

function shangjiao(){
  window.open("https://www.google.com/maps/place/Shanghai+Jiao+Tong+University/@31.0252247,121.4315897,17z/data=!3m1!4b1!4m5!3m4!1s0x35b265393c01008b:0xb49a734ac5177e3d!8m2!3d31.0252201!4d121.4337784");
}

function beili(){
  window.open("https://www.google.com/maps/place/%E5%8C%97%E4%BA%AC%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6/@39.9603745,116.3101999,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0516f2a5a7029:0x17b39135c61f62cc!8m2!3d39.9603704!4d116.3123886");
}

function madison(){
  window.open("https://www.google.com/maps/place/University+of+Wisconsin-Madison/@43.0765959,-89.4146762,17z/data=!3m1!4b1!4m5!3m4!1s0x8807ac950a7f481d:0xc9e065e091733a64!8m2!3d43.076592!4d-89.4124875");
}

function beigongda(){
  window.open("https://www.google.com/maps/place/Beijing+University+of+Technology/@39.8716151,116.4773403,17z/data=!3m1!4b1!4m5!3m4!1s0x35f1ad88130ee509:0x3c39da0827e646e8!8m2!3d39.871611!4d116.479529");
}

function shoujingmao(){
  window.open("https://www.google.com/maps/place/Capital+University+of+Economics+and+Business/@39.8411751,116.3142583,17z/data=!3m1!4b1!4m5!3m4!1s0x35f04eaf01552393:0x82e56c16f4bde1bf!8m2!3d39.841171!4d116.316447");
}

function fudan(){
  window.open("https://www.google.com/maps/place/Fudan+University/@31.2974243,121.5014291,17z/data=!3m1!4b1!4m5!3m4!1s0x35b273cf979dd3b7:0xd482e0bca13ad7c9!8m2!3d31.2974197!4d121.5036178");
}

function yangcai(){
  window.open("https://www.google.com/maps/place/Central+University+of+Finance+and+Economics/@40.1698911,116.2809133,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0fbb42c4862cd:0x3647422b8ff26898!8m2!3d40.169887!4d116.283102");
}

function chuanda(){
  window.open("https://www.google.com/maps/place/Sichuan+University/@30.6639686,104.0688333,17z/data=!3m1!4b1!4m5!3m4!1s0x36efc5374bedb51d:0x34cb56e7aa06133c!8m2!3d30.663964!4d104.071022");
}

function zhongshan(){
  window.open("https://www.google.com/maps/place/Sun+Yat-sen+University/@23.0965433,113.2966943,17z/data=!3m1!4b1!4m5!3m4!1s0x3402ff58c0a3e3af:0x3bf284e3ae6e4829!8m2!3d23.0965384!4d113.298883");
}

function xijiao(){
  window.open("https://www.google.com/maps/place/Xi'an+Jiaotong-Liverpool+University/@31.2748266,120.7359053,17z/data=!3m1!4b1!4m5!3m4!1s0x35b3a867ff4309ed:0x1c99a0ce6ef0ef4c!8m2!3d31.274822!4d120.738094");
}

function qinghua(){
  window.open("https://www.google.com/maps/place/Tsinghua+University/@39.9996715,116.3242552,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0541fa61e3c8f:0xd95a50fee0e0e2c9!8m2!3d39.9996674!4d116.3264439");
}

function huazhongkeji(){
  window.open("https://www.google.com/maps/place/%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6/@30.5130089,114.4180869,17z/data=!4m8!1m2!2m1!1shuazhongkeji!3m4!1s0x342ea4a4f8a230e9:0xf42f097ec953d0b1!8m2!3d30.5130043!4d114.4202756");
}

function minzu(){
  window.open("https://www.google.com/maps/place/Minzu+University+of+China/@39.9508821,116.3179963,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0517edb4caf91:0x55ef517f12d32449!8m2!3d39.950878!4d116.320185");
}

function nyush(){
  window.opem("https://www.google.com/maps/place/%E4%B8%8A%E6%B5%B7%E7%BA%BD%E7%BA%A6%E5%A4%A7%E5%AD%A6/@31.2258586,121.5319613,17z/data=!3m1!4b1!4m5!3m4!1s0x35b270cd9ae0a4b1:0xe4992fc2a6d3e22!8m2!3d31.225854!4d121.53415");
}


















//
//
//
//
//
// // bigdiv4
// function walkback() {
//   bigdiv4.style.height = "0px";
//   bigdiv4.style.opacity=0;
//   bigdiv4.style.pointerEvents = "none";
//   bigdiv2.style.height = "768px";
//   bigdiv2.style.opacity = 1;
//   bigdiv2.style.pointerEvents = "all";
//   sitvideo.pause();
//   document.getElementById("a7").pause();
//   document.getElementById("a8").pause();
//   document.getElementById("a9").pause();
// }
//
// function timecount2(){
//   // console.log("work");
//
//   if (walkvideo.currentTime>=5 && walkvideo.currentTime<39){
//
//     walklocation.innerHTML="北京航空航天大学· Beihang University 7:28";
//   } else if (walkvideo.currentTime>=39 && walkvideo.currentTime<63){
//     walklocation.innerHTML="北京航空航天大学· Beihang University 7:49";
//   }else if (walkvideo.currentTime>=63 && walkvideo.currentTime<95){
//     walklocation.innerHTML="北京大学·Peking University 7:53";
//   }else if (walkvideo.currentTime>=95 && walkvideo.currentTime<121){
//     walklocation.innerHTML="北京大学· Peking University 8:08";
//   }else if (walkvideo.currentTime>=121 && walkvideo.currentTime<154){
//     walklocation.innerHTML="北京大学· Peking University 8:15";
//   }else if (walkvideo.currentTime>=154 && walkvideo.currentTime<183){
//     walklocation.innerHTML="华南理工大学· South China University of Technology 8:42";
//   }else if (walkvideo.currentTime>=183 && walkvideo.currentTime<210){
//     walklocation.innerHTML="北京师范大学· Beijing Normal University 9:58";
//   }else if (walkvideo.currentTime>=210 && walkvideo.currentTime<238){
//     walklocation.innerHTML="首都医科大学· Capital Medical University 11:28";
//   }else if (walkvideo.currentTime>=238 && walkvideo.currentTime<269){
//     walklocation.innerHTML="北京电影学院· Beijing Film Academy 11:38";
//   }else if (walkvideo.currentTime>=269 && walkvideo.currentTime<297){
//     walklocation.innerHTML="Johns Hopkins Unversity 12:47";
//   }else if (walkvideo.currentTime>=297 && walkvideo.currentTime<328){
//     walklocation.innerHTML="北京林业大学· Beijing Forestry University 13:02";
//   }else if (walkvideo.currentTime>=328 && walkvideo.currentTime<358){
//     walklocation.innerHTML="北京交通大学· Beijing Jiaotong University 13:28";
//   }else if (walkvideo.currentTime>=358 && walkvideo.currentTime<388){
//     walklocation.innerHTML="中国农业大学· China Agricultural University 13:29";
//   }else if (walkvideo.currentTime>=388 && walkvideo.currentTime<419){
//     walklocation.innerHTML="中国人民大学· Renmin University of China 13:45";
//   }else if (walkvideo.currentTime>=419 && walkvideo.currentTime<446){
//     walklocation.innerHTML="中国农业大学· China Agricultural University 13:54";
//   }else if (walkvideo.currentTime>=446 && walkvideo.currentTime<476){
//     walklocation.innerHTML="西南政法大学· Southeast University of Political science & Law 14:02";
//   }else if (walkvideo.currentTime>=476 && walkvideo.currentTime<508){
//     walklocation.innerHTML="上海交通大学· Shanghai Jiaotong University 14:41";
//   }else if (walkvideo.currentTime>=508 && walkvideo.currentTime<536){
//     walklocation.innerHTML="北京理工大学· Beijing Institute of Technology 14:59";
//   }else if (walkvideo.currentTime>=536 && walkvideo.currentTime<565){
//     walklocation.innerHTML="University of Wisconsin Madison 15:03";
//   }else if (walkvideo.currentTime>=565 && walkvideo.currentTime<596){
//     walklocation.innerHTML="北京工业大学· Beijing University of Technology 15:11";
//   }else if (walkvideo.currentTime>=596 && walkvideo.currentTime<627){
//     walklocation.innerHTML="首都经济贸易大学· Capital University of Economics and Business 15:27";
//   }else if (walkvideo.currentTime>=627 && walkvideo.currentTime<654){
//     walklocation.innerHTML="复旦大学· Fudan University 15:35";
//   }else if (walkvideo.currentTime>=654 && walkvideo.currentTime<685){
//     walklocation.innerHTML="中央财经大学· Central University of Finance and Economics 15:46";
//   }else if (walkvideo.currentTime>=685 && walkvideo.currentTime<717){
//     walklocation.innerHTML="中央财经大学· Central University of Finance and Economics 15:50";
//   }else if (walkvideo.currentTime>=717 && walkvideo.currentTime<745){
//     walklocation.innerHTML="University of Wisconsin Madison 16:02";
//   }else if (walkvideo.currentTime>=745 && walkvideo.currentTime<834){
//     walklocation.innerHTML="四川大学· Sichuan University 16:03";
//   }else if (walkvideo.currentTime>=834 && walkvideo.currentTime<863){
//     walklocation.innerHTML="中山大学· Sun Yat- Sen University 16:15";
//   }else if (walkvideo.currentTime>=863 && walkvideo.currentTime<894){
//     walklocation.innerHTML="西交利物浦大学· Xi'an Jiaotong- Liverpool University 16:36";
//   }else if (walkvideo.currentTime>=894 && walkvideo.currentTime<922){
//     walklocation.innerHTML="清华大学· Tsinghua University 16:51";
//   }else if (walkvideo.currentTime>=922 && walkvideo.currentTime<951){
//     walklocation.innerHTML="University of Wisconsin Madison 17:18";
//   }else if (walkvideo.currentTime>=951 && walkvideo.currentTime<979){
//     walklocation.innerHTML="北京工业大学· Beijing University of Technology 17:19";
//   }else if (walkvideo.currentTime>=979 && walkvideo.currentTime<1007){
//     walklocation.innerHTML="华中科技大学· Huazhong University of Science and Technology 17:48";
//   }else if (walkvideo.currentTime>=1007 && walkvideo.currentTime<1041){
//     walklocation.innerHTML="中央民族大学· Minzu University of China 18:14";
//   }else if (walkvideo.currentTime>=1041 && walkvideo.currentTime<1069){
//     walklocation.innerHTML="北京航空航天大学· Beihang University 19:40";
//   }else if (walkvideo.currentTime>=1069 && walkvideo.currentTime<1100){
//     walklocation.innerHTML="University of Wisconsin Madison 20:48";
//   }else if (walkvideo.currentTime>=1100 && walkvideo.currentTime<1137){
//     walklocation.innerHTML="Have a Rest";
//   }
//
// let zhuan2= (sitvideo.currentTime/sitvideo.duration)*360;
//
// let rotation2=document.getElementById("draggable2");
//
// var rotateCSS = 'rotate(' + zhuan2 + 'deg)';
// $('#rotateable2').css({
//   '-moz-transform': rotateCSS,
//   '-webkit-transform': rotateCSS
// });
//
//
// }
//
// $('#rotateable2').draggable({
//   handle: '#rotate2',
//   opacity: 0.001,
//   helper: 'clone',
//   drag: function(event) {
//     var // get center of div to rotate
//       pw = document.getElementById('rotateable2'),
//       pwBox = pw.getBoundingClientRect(),
//       center_x = (pwBox.left + pwBox.right) / 2,
//       center_y = (pwBox.top + pwBox.bottom) / 2,
//       // get mouse position
//       mouse_x = event.pageX,
//       mouse_y = event.pageY,
//       radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
//       degree = Math.round((radians * (180 / Math.PI) * -1));
// console.log(degree+180, sitvideo.duration);
//     let degreePercent = (degree+180)/360;
//     let timeLine = degreePercent*sitvideo.duration;
//     sitvideo.currentTime = timeLine;
//
//
//
//     var rotateCSS = 'rotate(' + (degree + 180) + 'deg)';
//     $('#rotateable2').css({
//       '-moz-transform': rotateCSS,
//       '-webkit-transform': rotateCSS
//     });
//   }
// });
//
// $("#sit").click(function(){
//   var x = $("#rotate2").position();
//   console.log("Top: " + x.top + " Left: " + x.left);
// });
//
//
// function w1() {
//     walkvideo.currentTime = 5;
// }
//
// function w2() {
//     walkvideo.currentTime = 63;
// }
// function w3() {
//     walkvideo.currentTime = 154;
// }
// function w4() {
//     walkvideo.currentTime = 183;
// }
// function w5() {
//     walkvideo.currentTime = 210;
// }
// function w6() {
//     walkvideo.currentTime = 238;
// }
// function w7() {
//     walkvideo.currentTime = 269;
// }
// function w8() {
//     walkvideo.currentTime = 297;
// }
// function w9() {
//     walkvideo.currentTime = 328;
// }
// function w10() {
//     walkvideo.currentTime = 358;
// }
// function w11() {
//     walkvideo.currentTime = 388;
// }
// function w12() {
//     walkvideo.currentTime = 446;
// }
// function w13() {
//     walkvideo.currentTime = 476;
// }
// function w14() {
//     walkvideo.currentTime = 508;
// }
// function w15() {
//     walkvideo.currentTime = 536;
// }
// function w16() {
//     walkvideo.currentTime = 565;
// }
// function w17() {
//     walkvideo.currentTime = 596;
// }
// function w18() {
//     walkvideo.currentTime = 627;
// }
// function w19() {
//     walkvideo.currentTime = 654;
// }
// function w20() {
//     walkvideo.currentTime = 745;
// }
// function w21() {
//     walkvideo.currentTime = 834;
// }
// function w22() {
//     walkvideo.currentTime = 863;
// }
// function w23() {
//     walkvideo.currentTime = 894;
// }
// function w24() {
//     walkvideo.currentTime = 979;
// }
// function w25() {
//     walkvideo.currentTime = 1007;
// }
//
// //
// // let drylandtimer=0;
// //
// //
// // function dryland(){
// //   if (drylandtimer=0){
// //   document.getElementById("dryland").style.color="yellow";
// //
// // document.getElementById("adryland").play();
// //   drylandtimer++;
// //   walkvideo.muted=true;
// //   console.log(play);
// // } else if (drylandtimer=1){
// //   document.getElementById("dryland").style.color="white";
// // document.getElementById("adryland").pause()
// //   drylandtimer-1;
// //   walkvideo.muted=false;
// // }
// // }
//
//
//
// function y7(){
// document.getElementById("a7").play();
// document.getElementById("y7").style.color="yellow";
// }
//
// function y8(){
// document.getElementById("a8").play();
// document.getElementById("y8").style.color="yellow";
// }
// function y9(){
// document.getElementById("a9").play();
// document.getElementById("y9").style.color="yellow";
// }
//
// function n7(){
// document.getElementById("a7").play();
// document.getElementById("y7").style.color="white";
// }
// function n8(){
// document.getElementById("a8").play();
// document.getElementById("y8").style.color="white";
// }
// function n9(){
// document.getElementById("a9").play();
// document.getElementById("y9").style.color="white";
// }
