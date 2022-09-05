/*
* ----------------------------------------------------------------------------------------
Author        : Rama Hardian Sidik
Template Name : Freeman - Free Multipurpose Personal One Page Html Template
Version       : 1.0
Filename      : main.js
* ----------------------------------------------------------------------------------------
* ----------------------------------------------------------------------------------------
*/
const freemaninit = (function() {
    "use strict";
    // variable 
    var header = document.querySelector('#headermain');
    var body = document.querySelector('body');
    var mobilelink = document.querySelectorAll('.overlay__listnav li a');
    var mobilenav = document.querySelector('.navicon');
    var mainSection = document.querySelectorAll('main div.sectionblock');
    var menuSection = document.querySelectorAll('.navpage__wrap li a');
    var yearele = document.querySelector('.years');
    var typedText = document.querySelector("#typed-text");
    var cursor = document.querySelector(".cursor");
    var textArrayIndex = 0;
    var charIndex = 0;
    var textArray = ["UI/UX Design.", " Web Developer.", "Product Design.", "Digital Marketing."];
    var year = new Date().getFullYear();
    // scroll spy nac bar colorida
    const scrolspy = function(e) {
        // for clickable event
        menuSection.forEach(v => {
            v.onclick = (() => {
                setTimeout(() => {
                    menuSection.forEach(j => j.classList.remove('activelink'));
                    v.classList.add('activelink');
                }, 300)
            });
        });
        // for window scroll spy event
        window.onscroll = (() => {
            mainSection.forEach((v, i) => {
                let rect = v.getBoundingClientRect().y
                if (rect < window.innerHeight - 100) {
                    menuSection.forEach(v => v.classList.remove('activelink'));
                    menuSection[i].classList.add('activelink');
                }
            });
        });
    };
    //animated typed init ------------------------
    const erase = function(e) {
        if (charIndex > 0) {
            cursor.classList.remove('blink');
            typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 80);
        } else {
            cursor.classList.add('blink');
            textArrayIndex++;
            if (textArrayIndex > textArray.length - 1) {
                textArrayIndex = 0;
            }
            setTimeout(typeanimation, 1000);
        };
    };
    const typeanimation = function(e) {
        if (charIndex <= textArray[textArrayIndex].length - 1) {
            cursor.classList.remove('blink');
            typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeanimation, 120);
        } else {
            cursor.classList.add('blink');
            setTimeout(erase, 1000);
        }
    };
    
 
    
    // page scroll mantem o nav colorido enquanto rola p baixo
    const scrollpage = function(e) {
        // add fixid class
        if (window.pageYOffset > 0) {
            header.classList.add('fixid');
        } else {
            header.classList.remove('fixid');
        }
    };
    //binds event ----------------------------
    const bindEvents = function(e) {
        // window onbuffer
        window.onbeforeunload = function(e) {
            // allways force page to scroll top on refresh
            window.scrollTo(0, 0);
        };
        // window load
        window.addEventListener('load', (e) => {
            // page load
            loadder();
        });
        // document load
        window.addEventListener('DOMContentLoaded', (e) => {
            // button event 
            buttonclick();
            //type animation 
            typeanimation();
            // slider service 
            servicesslider();
            // portfolio 
            portofolio();
            // glightbox 
            glight();
            // year 
            yearele.innerHTML = year;
        });
        window.addEventListener("scroll", (e) => {
            // scrollspy
            scrolspy();
            // scroll window 
            scrollpage();
            // counter 
            counternumber();
        });
    };
    // init - initilizes elements and events
    const AppInit = function(e) {
        bindEvents();
    };
    return {
        AppInit: AppInit
    };
}());
//initilizing app
freemaninit.AppInit();