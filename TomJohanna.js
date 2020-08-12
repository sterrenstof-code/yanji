
//halfletter

jQuery(function($) {
    var halfstyle_text, halfstyle_chars, $halfstyle_el, halfstyle_i, halfstyle_output, halfstyle_style;

    // Iterate over all class occurrences
    $('.textToHalfStyle').each(function(idx, halfstyle_el) {
        $halfstyle_el = $(halfstyle_el);
        halfstyle_style = $halfstyle_el.data('halfstyle') || 'hs-base';
        halfstyle_text = $halfstyle_el.text();
        halfstyle_chars = halfstyle_text.split('');

        // Set the screen-reader text
        $halfstyle_el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + halfstyle_text + '</span>');

        // Reset output for appending
        halfstyle_output = '';

        // Iterate over all chars in the text
        for (halfstyle_i = 0; halfstyle_i < halfstyle_chars.length; halfstyle_i++) {
            // Create a styled element for each character and append to container
            halfstyle_output += '<span aria-hidden="true" class="halfStyle ' + halfstyle_style + '" data-content="' + halfstyle_chars[halfstyle_i] + '">' + halfstyle_chars[halfstyle_i] + '</span>';
        }
        // Chrome 59 and above specific fix - Part 1 - Addresses a Chrome bug where Chrome fails to corectly render and repaint pseudo elements - I came up with this fix after many different tests.
        var _applyChromeFix = !!window.chrome && !!navigator.appVersion.match(/.*Chrome\/([0-9\.]+)/) && parseInt(navigator.appVersion.match(/.*Chrome\/([0-9\.]+)/)[1], 10) >= 59;
        if (_applyChromeFix) {
            halfstyle_output += '<style>.halfStyle{}</style>';
        }

        // Write to DOM only once
        $halfstyle_el.append(halfstyle_output);

        // Chrome 59 and above specific fix - Part 2
        if (_applyChromeFix) {
            setTimeout(function(){
                $halfstyle_el.find('style').remove();
            }, 0);
        }
    });
});

// projects scrolldisplay


const one = document.querySelector('.one');
const uitlegCardsOne = document.querySelector('.uitlegCardsOne');


let scrollAmountOne = 0;
let oldscrollAmountOne = 0;
window.addEventListener('scroll', function() {
  const scrollTopOne = window.scrollY;
    if (scrollTopOne + window.innerHeight > one.offsetTop) {
      if (scrollTopOne > oldscrollAmountOne) {
        scrollAmountOne--;  
      } else if (scrollTopOne < oldscrollAmountOne) {
        scrollAmountOne++;
      }
      one.style.transform = `translateY(${scrollAmountOne * 1}px)`;
      uitlegCardsOne.style.transform = `translateY(${scrollAmountOne * 1}px)`;
   
    };  
  oldscrollAmountOne = scrollTopOne;
});

const two = document.querySelector('.two');
const uitlegCardsTwo = document.querySelector('.uitlegCardsTwo');


let scrollAmountTwo = 0;
let oldscrollAmountTwo = 0;
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
    if (scrollTop + window.innerHeight > two.offsetTop) {
      if (scrollTop > oldscrollAmountTwo) {
        scrollAmountTwo--;  
      } else if (scrollTop < oldscrollAmountTwo) {
        scrollAmountTwo++;
      }
      two.style.transform = `translateY(${scrollAmountTwo * 1}px)`;
      uitlegCardsTwo.style.transform = `translateY(${scrollAmountOne * 1}px)`;

    };  
  oldscrollAmountTwo = scrollTop;
});


const three = document.querySelector('.three');
const uitlegCardsThree = document.querySelector('.uitlegCardsThree');


let scrollAmountThree = 0;
let oldscrollAmountThree = 0;
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
    if (scrollTop + window.innerHeight > three.offsetTop) {
      if (scrollTop > oldscrollAmountThree) {
        scrollAmountThree--;  
      } else if (scrollTop < oldscrollAmountThree) {
        scrollAmountThree++;
      }
      three.style.transform = `translateY(${scrollAmountThree * 1}px)`;
      uitlegCardsThree.style.transform = `translateY(${scrollAmountOne * 1}px)`;

    };  
  oldscrollAmountThree = scrollTop;
});

    //top background 


window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

    // center project and fade sterrenstof/ 

const logo = document.querySelector(".logo");
const right = document.querySelector(".right");
const ster = document.querySelector(".logo a");
const left = document.querySelector(".left")
const infoOne = document.querySelector("#infoOne");
const infoTwo = document.querySelector("#infoTwo");
const infoThree = document.querySelector("#infoThree");
const kruis = document.querySelector(".close");
const since = document.querySelector(".uitlegTime");


function fadingLogo() {
  logo.classList.add('fade');
}

function slidingLeft() {
  left.classList.add('slideOut');
  right.classList.add('slideOut');
  left.style.transform = "matrix(1, 0, 0, 1, -640, 0);"
}

function slidingRight() {
  infoOne.classList.toggle('slideIn');
  infoOne.style.display = "block";
}


const aboutBtn = document.querySelector('#aboutButton');
const aboutMeDiv= document.querySelector('.aboutMe-div');

const sterrenstofBtn = document.querySelector('#sterrenstof');
const aboutSterrenstofDiv= document.querySelector('.aboutSterrenstof-div');

const impressumBtn = document.querySelector('#impressum');
const impressumDiv= document.querySelector('.impressum-div');


impressumBtn.addEventListener("click", function(){
  fadingLogo(),
  slidingLeft(),
  impressumDiv.style.display = "flex",
  aboutSterrenstofDiv.style.display = "none",
  aboutMeDiv.style.display = "none",
  infoOne.style.display = "none",
  infoTwo.style.display = "none",
  infoThree.style.display = "none",
  since.style.display = "none",
  kruis.style.display = "block"
});

sterrenstofBtn.addEventListener("click", function(){
  fadingLogo(),
  slidingLeft(),
  aboutSterrenstofDiv.style.display = "flex";
  aboutMeDiv.style.display = "none";
  infoOne.style.display = "none",
  infoTwo.style.display = "none",
  infoThree.style.display = "none",
  impressumDiv.style.display = "none",
  since.style.display = "none",
  kruis.style.display = "block"
});

aboutBtn.addEventListener("click", function(){
  fadingLogo(),
  slidingLeft(),
  aboutMeDiv.style.display = "flex";
  aboutSterrenstofDiv.style.display = "none";
  infoOne.style.display = "none",
  infoTwo.style.display = "none",
  infoThree.style.display = "none",
  impressumDiv.style.display = "none";
  since.style.display = "none",
  kruis.style.display = "block"
});


one.addEventListener("click", function(){
  one.style.position = "absolute",
  one.style.bottom = "55%",
  uitlegCardsOne.style.position = "absolute",
  uitlegCardsOne.style.bottom = "45%",
  fadingLogo(),
  slidingLeft(),
  aboutMeDiv.style.display = "none";
  aboutSterrenstofDiv.style.display = "none";
  infoOne.style.display = "flex",
  infoTwo.style.display = "none",
  infoThree.style.display = "none",
  impressumDiv.style.display = "none";
  since.style.display = "none",
  kruis.style.display = "block"
});



two.addEventListener("click", function(){
  two.style.position = "absolute",
  two.style.bottom = "55%",
  uitlegCardsTwo.style.position = "absolute",
  uitlegCardsTwo.style.bottom = "45%",
  fadingLogo(),
  slidingLeft(),
  aboutMeDiv.style.display = "none";
  aboutSterrenstofDiv.style.display = "none";
  infoOne.style.display = "none",
  impressumDiv.style.display = "none";
  infoTwo.style.display = "flex",
  since.style.display = "none",
  infoThree.style.display = "none",
  kruis.style.display = "block"
});

three.addEventListener("click", function(){
  three.style.position = "absolute",
  three.style.bottom = "55%",
  uitlegCardsThree.style.position = "absolute",
  uitlegCardsThree.style.bottom = "45%",
  fadingLogo(),
  slidingLeft(),
  aboutMeDiv.style.display = "none";
  aboutSterrenstofDiv.style.display = "none";
  infoOne.style.display = "none",
  infoTwo.style.display = "none",
  impressumDiv.style.display = "none";
  since.style.display = "none",
  infoThree.style.display = "flex",
  kruis.style.display = "block"
});

// transform .left out of screen 

// exit

  kruis.addEventListener("click", function(){
    left.classList.remove('slideOut');
    right.classList.remove('slideOut');
    infoOne.classList.remove('slideIn');
    infoOne.style.display = "none";
    infoTwo.style.display = "none";
    infoThree.style.display = "none";
    logo.classList.remove('fade');
    kruis.style.display ="none";
    one.style.position = "absolute",
    one.style.bottom = "20%",
    two.style.position = "absolute",
    two.style.bottom = "20%",
    three.style.position = "absolute",
    three.style.bottom = "20%",
    aboutMeDiv.style.display = "none";
    aboutSterrenstofDiv.style.display = "none";
    impressumDiv.style.display = "none";
    uitlegCardsOne.style.position = "absolute",
    uitlegCardsOne.style.bottom = "10%",
    uitlegCardsTwo.style.position = "absolute",
    uitlegCardsTwo.style.bottom = "10%",
    uitlegCardsThree.style.position = "absolute",
    uitlegCardsThree.style.bottom = "10%"
    //location = location
});

//background image
/*
var images = [
  'nasa--hI5dX2ObAs-unsplash-2.jpg',
  'aldebaran-s-g-Gc-k-NPkA-unsplash.jpg',
  'Horsehead-Hubble.jpg',
  'pxfuel.com.jpg',
  'NGC_3114.png'
]


if (document.getElementById) { window.onload = swap };
function swap() {
var numimages=8;
rndimg = new Array('one.jpg',
  'two.jpg',
   'three.jpg',
  'four.jpg',
  'five.jpg',
'six.jpg',
'seven.jpg',
  'eight.jpg'
  ); 
x=(Math.floor(Math.random()*numimages));
randomimage=(rndimg[x]);
document.querySelector(".right").style.backgroundImage = "url("+ randomimage +")"; 
document.querySelector(".hTest").style.backgroundImage = "url("+ randomimage +")"; 
}
*/
//centering elements that are clicked upon

//about Me info

