function handleAll() {
    // Responsible for inital run of any functions
    handleResume();
    handleHome();
}

handleAll();

function handleResume(){
    // responsible for removing "hidden" class from "resume" class section, and hidding class "home".
    $('.skills').click(function(event){
        $('.resume').removeClass('hidden');
        $('.home').addClass('hidden');
        console.log('`handleResume` ran');
    });
}

function handleHome(){
    // responsible for removing "hidden" from class "home", and adding class "hidden" to "resume" class section.
    $('.begin').click(function(event){
        $('.resume').addClass('hidden');
        $('.home').removeClass('hidden');
        console.log('`handleHome` ran');
    })

}