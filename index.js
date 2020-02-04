function handleAll() {
  handleClickMobile();
}

handleAll();

// Responsible for revealing and mobile menu
function handleClickMobile() {
  $(".mobileMenu").click(function(e) {
    $(".mobileNav").toggleClass("hidden");
  });
}
