let bigdiv = document.getElementById("bigdiv");
let bigdiv2 = document.getElementById("bigdiv2");
let bigdiv3 = document.getElementById("bigdiv3");
let bigdiv4 = document.getElementById("bigdiv4");
let bigdiv5 = document.getElementById("bigdiv5");
let bigdiv6 = document.getElementById("bigdiv6");
let bigdiv7 = document.getElementById("bigdiv7");


let headline = document.getElementById("headline");
let music = document.getElementById("music");
let musicstatus = document.getElementById("music-control");
let walkvid = document.getElementById("walkvid");
let sitvid = document.getElementById("sitvid");
let userinfo = document.getElementById("userinfo");
let username=document.getElementById("username");
let nametext=document.getElementById("nametext");


// 此处有opacity转换bug
function submit() {
    // bigdiv.style.transition = "opacity 1.2s";
    // bigdiv.style.opacity = 0;
    bigdiv.style.display = "none";
    userinfo.style.display="block";
    username.innerHTML=nametext;
    setTimeout(mainpage, 10);

}

function mainpage() {
    //bigdiv2.style.display = "block";
    // console.log("hah");
    // bigdiv2.style.opacity = 0;
    // bigdiv2.style.transition = "opacity 1.2s";
    // console.log("123");
    bigdiv2.style.height = "768px";
    bigdiv2.style.opacity = 1;
    bigdiv2.style.pointerEvents = "all";

}



function video() {
    bigdiv2.style.height = "0px";
    bigdiv2.style.opacity=0;
    bigdiv2.style.pointerEvents = "none";
    bigdiv3.style.height = "768px";
    bigdiv3.style.opacity = 1;
    bigdiv3.style.pointerEvents = "all";
}

// walk video
function walkvideo() {
  bigdiv3.style.height = "0px";
  bigdiv3.style.opacity=0;
  bigdiv3.style.pointerEvents = "none";
  bigdiv4.style.height = "768px";
  bigdiv4.style.opacity = 1;
  bigdiv4.style.pointerEvents = "all";
    walkvid.play();
}

function w1() {
    walkvid.currentTime = 4.04;
}

function w2() {
    walkvid.currentTime = 19.18;
}

function w3() {
    walkvid.currentTime = 52.11;
}

function w4() {
    walkvid.currentTime = 66.02;
}

function w5() {
    walkvid.currentTime = 80;
}

function w6() {
    walkvid.currentTime = 96;
}

function w7() {
    walkvid.currentTime = 110;
}

function w8() {
    walkvid.currentTime = 124;
}

function w9() {
    walkvid.currentTime = 138;
}

function w10() {
    walkvid.currentTime = 153;
}

function w11() {
    walkvid.currentTime = 169;
}

function w12() {
    walkvid.currentTime = 211;
}

function w13() {
    walkvid.currentTime = 226;
}

function w14() {
    walkvid.currentTime = 242;
}

function w15() {
    walkvid.currentTime = 256;
}

function w16() {
    walkvid.currentTime = 300;
}

function w17() {
    walkvid.currentTime = 315;
}

function w18() {
    walkvid.currentTime = 330;
}

function w19() {
    walkvid.currentTime = 360;
}

function w20() {
    walkvid.currentTime = 374;
}

function w21() {
    walkvid.currentTime = 392;
}

function w22() {
    walkvid.currentTime = 407;
}

function w23() {
    walkvid.currentTime = 423;
}

function w24() {
    walkvid.currentTime = 437;
}



function uniwalkback() {
    walkvid.pause();
    bigdiv4.style.height = "0px";
    bigdiv4.style.opacity=0;
    bigdiv4.style.pointerEvents = "none";
    bigdiv3.style.height = "768px";
    bigdiv3.style.opacity = 1;
    bigdiv3.style.pointerEvents = "all";
}

function videoback() {
  bigdiv3.style.height = "0px";
  bigdiv3.style.opacity=0;
  bigdiv3.style.pointerEvents = "none";
  bigdiv2.style.height = "768px";
  bigdiv2.style.opacity = 1;
  bigdiv2.style.pointerEvents = "all";
}

// bench video
function sitvideo() {
  bigdiv3.style.height = "0px";
  bigdiv3.style.opacity=0;
  bigdiv3.style.pointerEvents = "none";
  bigdiv5.style.height = "768px";
  bigdiv5.style.opacity = 1;
  bigdiv5.style.pointerEvents = "all";
    sitvid.play();
}

function unisitback() {
    sitvid.pause();
    bigdiv5.style.height = "0px";
    bigdiv5.style.opacity=0;
    bigdiv5.style.pointerEvents = "none";
    bigdiv3.style.height = "768px";
    bigdiv3.style.opacity = 1;
    bigdiv3.style.pointerEvents = "all";
}

function s1() {
    sitvid.currentTime = 79;
}

function s2() {
    sitvid.currentTime = 4;
}

function s3() {
    sitvid.currentTime = 22;
}

function s4() {
    sitvid.currentTime = 87;
}

function s5() {
    sitvid.currentTime = 113;
}

function s6() {
    sitvid.currentTime = 156;
}

function s7() {
    sitvid.currentTime = 41;
}

function s8() {
    sitvid.currentTime = 31;
}

function s9() {
    sitvid.currentTime = 50;
}

function s10() {
    sitvid.currentTime = 60;
}

function s11() {
    sitvid.currentTime = 69;
}

function s12() {
    sitvid.currentTime = 175;
}

function s13() {
    sitvid.currentTime = 14;
}

function s14() {
    sitvid.currentTime = 105;
}

function s15() {
    sitvid.currentTime = 166;
}
// function s16(){
//   walkvid.currentTime=;
// }
function s17() {
    sitvid.currentTime = 130;
}

function s18() {
    sitvid.currentTime = 149;
}

function s19() {
    sitvid.currentTime = 96;
}
// function s20(){
//   walkvid.currentTime=;
// }
function s21() {
    sitvid.currentTime = 184;
}
// function s22(){
//   walkvid.currentTime=;
// }
function s23() {
    sitvid.currentTime = 202;
}

function s24() {
    sitvid.currentTime = 193;
}



// audio
function audio() {
  bigdiv2.style.height = "0px";
  bigdiv2.style.opacity=0;
  bigdiv2.style.pointerEvents = "none";
  bigdiv6.style.height = "768px";
  bigdiv6.style.opacity = 1;
  bigdiv6.style.pointerEvents = "all";
  // setTimeout(audioselect,100);
}

// need to stop all sound after click
function audioback() {
  bigdiv6.style.height = "0px";
  bigdiv6.style.opacity=0;
  bigdiv6.style.pointerEvents = "none";
  bigdiv2.style.height = "768px";
  bigdiv2.style.opacity = 1;
  bigdiv2.style.pointerEvents = "all";
    document.getElementsByClassName("audio").pause();
    // document.getElementsByTagName("audio").pause();
}


let weather ;
let place ;
// let sun=document.getElementById("sun");
// let rain=document.getElementById("rain");
// let wind=document.getElementById("wind");
// let forest=document.getElementById("forest");
// let snow=document.getElementById("snow");
// let street=document.getElementById("street");
// let stone=document.getElementById("stone");
// let wood=document.getElementById("wood");
// let grass=document.getElementById("grass");

// function audioselect(){
//   if sun.addEventListener("click",);
// }


function audioselect1() {
    document.getElementById("sun").style.color = "#FCD387";
    weather = 1;
}

function audioselect2() {
    document.getElementById("rain").style.color = "#FCD387";
    weather = 2;
}

function audioselect3() {
    document.getElementById("wind").style.color = "#FCD387";
    weather = 3;
}

function audioselect4() {
    document.getElementById("forest").style.color = "#FCD387";
    place = 1;
}

function audioselect5() {
    document.getElementById("snow").style.color = "#FCD387";
    place = 2;
}

function audioselect6() {
    document.getElementById("street").style.color = "#FCD387";
    place = 3;
}

function audioselect7() {
    document.getElementById("stone").style.color = "#FCD387";
    place = 4;
}

function audioselect8() {
    document.getElementById("wood").style.color = "#FCD387";
    place = 5;
}

function audioselect9() {
    document.getElementById("grass").style.color = "#FCD387";
    weather = 6;
}

// console.log(weather);
// bug:can't select
function audioplay() {
    // if (timer % 2 == 0) {
    //     document.getElementById("audioplaybtn").innerHTML = "retry";
    if (weather = 1) {
        document.getElementById("asunny").play();
    } else if (weather = 2) {
        document.getElementById("arainy").play();
    } else if (weather = 3) {
        document.getElementById("awindy").play();
    };

    if (place = 1) {
        document.getElementById("aforest").play();
    } else if (place = 2) {
        document.getElementById("asnow").play();
    } else if (place = 3) {
        document.getElementById("astreet").play();
    } else if (place = 4) {
        document.getElementById("astone").play();
    } else if (place = 5) {
        document.getElementById("awood").play();
    } else if (place = 6) {
        document.getElementById("agrass").play();
    };
}
// bug: can't stop
function audiopause() {
    document.getElementsByClassName("audio").pause();
    weather = 0;
    place = 0;
}


// drawpage
function drawWhat() {
  bigdiv2.style.height = "0px";
  bigdiv2.style.opacity=0;
  bigdiv2.style.pointerEvents = "none";
  bigdiv7.style.height = "768px";
  bigdiv7.style.opacity = 1;
  bigdiv7.style.pointerEvents = "all";

      console.log("run");
}

// bug: unclickable
function drawback(){
  console.log("back");
  bigdiv7.style.height = "0px";
  bigdiv7.style.opacity=0;
  bigdiv7.style.pointerEvents = "none";
  bigdiv2.style.height = "768px";
  bigdiv2.style.opacity = 1;
  bigdiv2.style.pointerEvents = "all";
}

let canvasbg=document.getElementById("canvas");

function sea(){
  canvasbg.style.background="url(image/sea.jpg)";
}
function dryland(){
  canvasbg.style.background="url(image/dryland.jpg)";
}
function grass(){
  canvasbg.style.background="url(image/grass.jpg)";
}
function street(){
  canvasbg.style.background="url(image/street.jpg)";
}

// var x = 0;
// var y = 0;
// var havePressed =false;
// //
// function setup(){
//   createCanvas(750, 500);
//   background(255);
//   var cnv = createCanvas(100, 100);
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }
// //
// function draw(){
//
//   if (mouseIsPressed){
//     // if(!havePressed){
//       havePressed = true;
//       x = mouseX;
//       y = mouseY;
//     // }
//     fill(0);
//     stroke(0);
//      // x = lerp(x,mouseX,0.1);
//      // y = lerp(y,mouseY,0.1);
//     circle(x,y,20);
//   }
// }


function download(){
        var download = document.getElementById("download");
        var image = document.getElementById("canvas").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);

    }
//

// let bg;
// let x = 0;
// let y = 0;
// let havePressed = false;

// function setup(){
//   bg= loadImage("image/sea.jpg");
//   createCanvas(900,600);
// }
//
// function draw(){
//   if (mouseIsPressed){
//     if(!havePressed){
//       havePressed = true;
//       x = mouseX;
//       y = mouseY;
//     }
//     fill("image/footprint.png");
//     stroke(255);
//      x = lerp(x,mouseX,0.1);
//      y = lerp(y,mouseY,0.1);
//     circle(x,y,20);
//   }
//
// }

function logout(){
  window.location.href="index3.html";
}
