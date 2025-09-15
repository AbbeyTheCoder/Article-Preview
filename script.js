const ownerInfo = document.getElementById("owner-info");
const socials = document.getElementById("socials");
const footer = document.getElementsByTagName("footer")[0];
const shareBtn = document.querySelector("footer button");

shareBtn.addEventListener("click", function () {
  if (!window.matchMedia("(min-width: 40rem)").matches) {
    footer.classList.toggle("pop-up");
    ownerInfo.classList.toggle("hide-pop-up");
    socials.classList.toggle("hide-pop-up");
    shareBtn.classList.toggle("pop-up");
  } else {
    socials.classList.toggle("hide-pop-up");
  }
});
