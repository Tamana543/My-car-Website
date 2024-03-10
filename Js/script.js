// DATE Working
function updateYear() {
  let now = new Date();
  let year = now.getFullYear();
  let Month = now.getMonth();
  let time = `${year} / ${Month}`;
  let currentYear = document.querySelector("#date");
  currentYear.innerHTML = time;
}
updateYear();
// NAVIGATION BTN Work
function navigationWork() {
  // by this line code you will be able to add,delete and etc a class to an element
  headeEL.classList.toggle("nav-open");
}

let navBtn = document.querySelector(".open-mob-btn");
let headeEL = document.querySelector(".first-header");
navBtn.addEventListener("click", navigationWork);
// SCROLLING
let allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (linkMain) {
  linkMain.addEventListener("click", function (event) {
    event.preventDefault();
    let links = linkMain.getAttribute("href");
    //     scroll up
    if (links === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scroll all
    if (links !== "#" && links.startsWith("#")) {
      let sectionGet = document.querySelector(links);
      sectionGet.scrollIntoView({ behavior: "smooth" });
    }
    if (linkMain.classList.contains("main-nav-item")) {
      headeEL.classList.toggle("nav-open");
    }
  });
});

// STICKY NAV
let headerSticky = document.querySelector(".header");
let obs = new IntersectionObserver(
  function (entries) {
    let ent = entries[0];

    if (ent.isIntersecting === false) {
      document.querySelector(".first-header").classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.querySelector(".first-header").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
obs.observe(headerSticky);
