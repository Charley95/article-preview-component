const shareBtn = document.getElementsByClassName("share")[0];
const activeInfo = document.getElementsByClassName("info")[0];
const socialIcons = document.getElementsByClassName('social-media-icons')[0];

shareBtn.addEventListener("click", function() {
    activeInfo.classList.toggle("hidden");
    socialIcons.classList.toggle("hidden");
});

const shareBtnAlt = document.getElementsByClassName("share-alt")[0];

shareBtnAlt.addEventListener("click", function () {
  activeInfo.classList.toggle("hidden");
  socialIcons.classList.toggle("hidden");
});
