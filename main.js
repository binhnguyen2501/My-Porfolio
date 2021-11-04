/*PREVENT RIGHTCLICK*/
window.onload = function () {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
  document.addEventListener(
    "keydown",
    function (e) {
      //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (
        e.keyCode == 83 &&
        (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
      ) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    },
    false
  );

  function disabledEvent(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }
};
/*CURSOR*/
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "top: " + e.clientY + "px;" + "left: " + e.clientX + "px;";
});
const nav_links = document.querySelectorAll(".header__navLinks---link .link");
nav_links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    cursor.classList.add("link-grow_cursor");
    cursor2.classList.add("link-grow_cursor2");
  });
  link.addEventListener("mouseleave", function () {
    cursor.classList.remove("link-grow_cursor");
    cursor2.classList.remove("link-grow_cursor2");
  });
});
const logo = document.querySelector(".header__logo a");
logo.addEventListener("mouseover", function () {
  cursor.classList.add("link-grow_cursor");
  cursor2.classList.add("link-grow_cursor2");
});
logo.addEventListener("mouseleave", function () {
  cursor.classList.remove("link-grow_cursor");
  cursor2.classList.remove("link-grow_cursor2");
});
const social = document.querySelectorAll(".social-icon");
social.forEach((links) => {
  links.addEventListener("mouseover", function () {
    cursor.classList.add("link-grow_cursor");
    cursor2.classList.add("link-grow_cursor2");
  });
  links.addEventListener("mouseleave", function () {
    cursor.classList.remove("link-grow_cursor");
    cursor2.classList.remove("link-grow_cursor2");
  });
});
const contacts = document.querySelectorAll(".contacts");
contacts.forEach((contact) => {
  contact.addEventListener("mouseover", function () {
    cursor.classList.add("link-grow_cursor");
    cursor2.classList.add("link-grow_cursor2");
  });
  contact.addEventListener("mouseleave", function () {
    cursor.classList.remove("link-grow_cursor");
    cursor2.classList.remove("link-grow_cursor2");
  });
});
const contentTitle = document.querySelectorAll(
  ".homepage-title--contentTitle p"
);
contentTitle.forEach((content) => {
  content.addEventListener("mouseover", function () {
    cursor.classList.add("link-grow_cursor");
    cursor2.classList.add("link-grow_cursor2");
    content.style.cssText = "cursor: none";
  });
  content.addEventListener("mouseleave", function () {
    cursor.classList.remove("link-grow_cursor");
    cursor2.classList.remove("link-grow_cursor2");
    content.style.cssText = "cursor: pointer";
  });
});
/*TOGGLER NAVBAR*/
const navBar = document.querySelector(".header__menuToggler");
const navbarMobilePage = document.querySelector(".navbarMobile");
navBar.addEventListener("click", function () {
  navBar.classList.toggle("open");
  navbarMobilePage.classList.toggle("openPage");
});
/*DARK MODE*/
const checkbox2 = document.querySelector(
  ".navbarMobile .darkMode .changeMode2"
);
const checkbox = document.querySelector(".changeMode");
const iconMode = document.querySelector(".far");
const iconMode2 = document.querySelector(
  ".navbarMobile .darkMode .changeMode2 .far"
);
const navbarDarkMode = document.querySelectorAll(".navbarMobile .img-mask");
const navLinkMobile = document.querySelectorAll(
  ".navbarMobile .nav-links--mobile .nav-links--mobile----link .link"
);
const navbar_Bar = document.querySelectorAll(".header__menuToggler .bar");
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  // 1. Add the class apply dark-mode to the body and menuHamberger
  document.body.classList.add("darkmode");
  navbarDarkMode.forEach(function (el) {
    el.classList.add("navbarDarkMode");
  });
  navLinkMobile.forEach(function (el) {
    el.classList.add("navbarDarkMode");
  });
  navbar_Bar.forEach(function (el) {
    el.classList.add("menuToggler_bar");
  });
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class apply dark-mode to the body and menuHamberger
  document.body.classList.remove("darkmode");
  navbarDarkMode.forEach(function (el) {
    el.classList.remove("navbarDarkMode");
  });
  navLinkMobile.forEach(function (el) {
    el.classList.remove("navbarDarkMode");
  });
  navbar_Bar.forEach(function (el) {
    el.classList.remove("menuToggler_bar");
  });
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
  iconMode.classList.add("fa-sun");
  iconMode2.classList.add("fa-sun");
}

// When someone clicks the button
checkbox.addEventListener("click", function () {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
  iconMode.classList.toggle("fa-sun");
  iconMode2.classList.toggle("fa-sun");
});

checkbox2.addEventListener("click", function () {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
  iconMode.classList.toggle("fa-sun");
  iconMode2.classList.toggle("fa-sun");
});
