function handleAll() {
  handleClickMobile();
  handlClickNav();
}

handleAll();

// Responsible for revealing and mobile menu
function handleClickMobile() {
  $(".mobileMenu").click(function(e) {
    $(".mobileNav").toggleClass("hidden");
  });
}

function handlClickNav() {
  $(".mobileNav").click(function(e) {
    $(".mobileNav").addClass("hidden");
  });
}
