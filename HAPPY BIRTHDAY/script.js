let slides=document.querySelectorAll(".slide");
let currentSlide=0;
let currentAudio=null;
let audioAllowed=false;

function playSlideAudio(slide){
  if(!audioAllowed) return;
  if(currentAudio){
    currentAudio.pause();
    currentAudio.currentTime=0;
  }
  let a=slide.getAttribute("data-audio");
  if(a){
    currentAudio=new Audio(a);
    currentAudio.play();
  }
}

function nextSlide(){
  slides[currentSlide].classList.remove("active");
  currentSlide++;
  if(currentSlide<slides.length){
    slides[currentSlide].classList.add("active");
    playSlideAudio(slides[currentSlide]);
  }
}

function checkPass(){
  if(document.getElementById("pass").value==="Abhishu1830"){
    audioAllowed=true;
    nextSlide();
  }else{
    alert("Wrong password");
  }
}

/* Typing animation */
let text="(Yahan tum apna feelings wala text baad me bhejoge)";
let i=0;
function typeText(){
  if(i<text.length){
    document.getElementById("typingText").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typeText,80);
  }
}
setTimeout(typeText,2000);