function handleAll() {
    // Responsible for inital run of any functions
    handleResume();
    handleHome();
    
}

handleAll();

function handleResume(){
    // responsible for removing "hidden" class from "resume" class section, and hidding class "home".
    $('.js-skills').click(function(event){
        $('.js-hideMe2').removeClass('js-hidden');
        $('.js-hideMe1').addClass('js-hidden');
        console.log('`handleResume` ran');
        handleFadeIn();
    });
}

function handleHome(){
    // responsible for removing "hidden" from class "home", and adding class "hidden" to "resume" class section.
    $('.begin').click(function(event){
        $('.js-hideMe2').addClass('js-hidden');
        $('.js-hideMe1').removeClass('js-hidden');
        console.log('`handleHome` ran');
    });
}

function handleFadeIn(){
    // should initiate AOS for newly revealed section
    $('.js-fadeIn').attr('data-aos', 'zoom-in');
    AOS.init({
        duration: 2000,
    });
}

// Unclear how to get AOS to re-initiate when clicking links additional times.