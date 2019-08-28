'use strict';

window.addEventListener('load', function() {
    var obj = document.getElementById('slider');
    var slideFirst = document.getElementById('first-slide');
    var slideSecond = document.getElementById('second-slide');
    var slideThird = document.getElementById('third-slide');
    var checkFirstSlide = document.querySelector('[for=btn-1');
    var checkSecondSlide = document.querySelector('[for=btn-2]');
    var checkThirdSlide = document.querySelector('[for=btn-3');
    var noJs = document.querySelector('.no-js');
    var startY = 0;
    var dist = 0;

    noJs.classList.remove('no-js');

    
    slideFirst.addEventListener('touchstart', function(event) {
        var touch=event.changedTouches[0];
        startY = parseInt(touch.pageY);
        event.preventDefault();
            
        
    }, false);

    
    slideFirst.addEventListener('touchmove', function(event) {
        var touch = event.changedTouches[0];
        var dist = parseInt(touch.pageY) - startY;
        
        
        if(dist > 50) {
            obj.style.transform = "translateY(" + 0 + "px";
            
        } else if (dist < -50) {
            obj.style.transform = "translateY(" + -768 + "px";
            checkSecondSlide.style.background = "#f78b1f";
            checkFirstSlide.style.background = "white";
        }

        


        

        event.preventDefault()
    }, false);

    slideFirst.addEventListener('touchend', function(event) {
        var touch = event.changedTouches[0];

        
        event.preventDefault();
    }, false)




    slideSecond.addEventListener('touchstart', function(event) {
        var touch=event.changedTouches[0];
        startY = parseInt(touch.pageY);
        event.preventDefault();
            
        
    }, false);
    
    slideSecond.addEventListener('touchmove', function(event) {
        var touch = event.changedTouches[0];
        var dist = parseInt(touch.pageY) - startY;
       
        if(dist > 50) {
            obj.style.transform = "translateY(" + 0 + "px";
            checkFirstSlide.style.background = "#f78b1f";
            checkSecondSlide.style.background = "white";
            
        } else if (dist < -50){
            obj.style.transform = "translateY(" + -1536 + "px";
            checkThirdSlide.style.background = "#f78b1f";
            checkSecondSlide.style.background = "white";
        }
        

        event.preventDefault()
    }, false);

    slideSecond.addEventListener('touchend', function(event) {
        var touch = event.changedTouches[0];
        event.preventDefault();
    }, false)


    slideThird.addEventListener('touchstart', function(event) {
        var touch=event.changedTouches[0];
        startY = parseInt(touch.pageY);
        event.preventDefault();
            
        
    }, false);
    
    slideThird.addEventListener('touchmove', function(event) {
        var touch = event.changedTouches[0];
        var dist = parseInt(touch.pageY) - startY;
        
        if(dist > 50 ) {
            obj.style.transform = "translateY(" + -768 + "px";
            checkSecondSlide.style.background = "#f78b1f";
            checkThirdSlide.style.background = "white";
        } 
        

        event.preventDefault()
    }, false);

    slideThird.addEventListener('touchend', function(event) {
        var touch = event.changedTouches[0];
        event.preventDefault();
    }, false);



    checkFirstSlide.addEventListener('click', function(event) {
        obj.style.transform="translateY(" + 0 + "px";
        checkFirstSlide.style.background = "#f78b1f";
        checkSecondSlide.style.background = "white";
        checkThirdSlide.style.background = "white";
        event.preventDefault();
    });

    checkSecondSlide.addEventListener('click', function(event) {
        obj.style.transform="translateY(" + -750 + "px";
        checkFirstSlide.style.background = "white";
        checkSecondSlide.style.background = "#f78b1f";
        checkThirdSlide.style.background = "white";
        event.preventDefault();
    });

    checkThirdSlide.addEventListener('click', function(event) {
        obj.style.transform="translateY(" + -1536 + "px";
        checkFirstSlide.style.background = "white";
        checkSecondSlide.style.background = "white";
        checkThirdSlide.style.background = "#f78b1f";
        event.preventDefault();
        
    })

}, false)