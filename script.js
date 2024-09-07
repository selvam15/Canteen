window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 3000);
});

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices(); 

    const selectedVoice = voices.find(voice => voice.name.includes('Google UK English Female') || voice.name.includes('English'));

    if (selectedVoice) {
        text_speak.voice = selectedVoice; 
    }

    text_speak.rate = 1; 
    text_speak.volume = 1; 
    text_speak.pitch = 2;  
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning ...,  you can order your foods")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon...,  you can order your foods")
    }

    else{
        speak("Good Evenining ...")
        speak("you can order your foods")
        
    }

}

window.addEventListener('load', ()=>{
    speak("Welcome to MY Canteen");
    wishMe();
});



$(document).ready(function(){
    // Sticky navbar on scroll
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



});

$(document).ready(function(){
    if(localStorage.getItem('profileImage')){
        $('.profile-img').attr('src', localStorage.getItem('profileImage'));
    }

    $('#profile-pic').change(function(){
        const file = this.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(event){
                const imageSrc = event.target.result;
                $('.profile-img').attr('src', imageSrc);
                localStorage.setItem('profileImage', imageSrc);
            };
            reader.readAsDataURL(file);
        }
    });

    
    $('.profile-border').click(function(){
        $('#profile-pic').click();
    });
});




    var typed = new Typed(".typing", {
        strings: ["BreakFast", "Lunch", "Dinner", "Snakes"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["BreakFast", "Lunch", "Dinner", "Snakes"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });



document.addEventListener('contextmenu',

    function (event) {
    
    event.preventDefault();
})

document.getElementById

('contact-form').addEventListener

('submit', function (event) {

event.preventDefault();

var data = new FormData (event.target);

fetch("URL", {

    method: 'POST',

    body: data,

}).then(response => {

    if (response.ok) {
        alert('Success');

} else {
    alert('Error');

}

});

document.getElementById

('contact-form').reset();

});