const shareBtn = document.querySelector(".share");
const activeInfo = document.querySelector(".info");
const socialIcons = document.querySelector('.social-media-icons');
const shareBtnAlt = document.querySelector(".share-alt");
const tabletActiveInfo = document.querySelector(".share-tablet");
const shareCircle = document.querySelector(".share-circle");
const svgIcon = document.querySelector(".share-circle svg");

shareBtn.addEventListener("click", function () {
  if (window.innerWidth <= 768) {
    activeInfo.classList.toggle("hidden");
    socialIcons.classList.toggle("hidden");
  } else {
    tabletActiveInfo.classList.toggle("hidden");
    shareCircle.classList.toggle("active");
    shareBtn.classList.toggle("active");
  }
});

if (shareBtnAlt) {
  shareBtnAlt.addEventListener("click", function () {
    activeInfo.classList.toggle("hidden");
    socialIcons.classList.toggle("hidden");
  });
}

window.addEventListener("resize", function () {
  tabletActiveInfo.classList.add("hidden");
  socialIcons.classList.add("hidden");
});

console.log(activeInfo, shareBtn, socialIcons, shareBtnAlt, tabletActiveInfo);