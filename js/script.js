const shareBtn = document.querySelector(".share");
const activeInfo = document.querySelector(".info");
const socialIcons = document.querySelector('.social-media-icons');
const shareBtnAlt = document.querySelector(".share-alt");
const tabletActiveInfo = document.querySelector(".share-tablet");
const shareCircle = document.querySelector(".share-circle");

shareBtn.addEventListener("click", function () {
   if (window.innerWidth <= 768) {
      activeInfo.classList.toggle("hidden"); // this toggles the info when the share button is clicked
      socialIcons.classList.toggle("hidden");
   } else {
      tabletActiveInfo.classList.toggle("hidden"); // This toggles the tablet and desktop share info when the share button is clicked
      shareCircle.classList.toggle("active");
      shareBtn.classList.toggle("active"); // This toggles the share button color when clicked
   }
});

// this if statement is to toggle back the info section when clicked on mobile view
if (shareBtnAlt) {
   shareBtnAlt.addEventListener("click", function () {
      activeInfo.classList.toggle("hidden");
      socialIcons.classList.toggle("hidden");
   });
}

// this resize event hides the info section when the window is resized in desktop and tablet view
window.addEventListener("resize", function () {
   tabletActiveInfo.classList.add("hidden");
   activeInfo.classList.remove("hidden");
   socialIcons.classList.add("hidden");
   shareCircle.classList.remove("active");
   shareBtn.classList.remove("active");
});