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
    // scroll spy 
    const scrolspy = function(e) {
        // for window scroll spy event o que faz o pretinho mexer enquanto a pagina scrolla pra baixo
        var mainSection = document.querySelectorAll('main div.sectionblock');
        var menuSection = document.querySelectorAll('.navpage__wrap li a');
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
    // page scroll deixa a nav colorida quando rola pra baixo
    var header = document.querySelector('#headermain');
    const scrollpage = function(e) {
        // add fixid class
        if (window.pageYOffset > 0) {
            header.classList.add('fixid');
        } else {
            header.classList.remove('fixid');
        }
    };
    //evento de vinculação ----------------------------
    const bindEvents = function(e) {
        window.addEventListener("scroll", (e) => {
            // scrollspy - negocio que faz a seleção mexer
            scrolspy();
            // scroll window - deixa a nav colorida quando rola pra baixo
            scrollpage();

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
//inicializando aplicação
freemaninit.AppInit();