// let navbar = document.querySelector(".header .navbar");

// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle("active");
// };

// window.onscroll = () => {
//   navbar.classList.remove("active");
// };

let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
  if (navbar.classList.contains("active")) {
    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-times"); // Change to cross icon
  } else {
    menuBtn.classList.remove("fa-times");
    menuBtn.classList.add("fa-bars"); // Change back to bars icon
  }
};

window.onscroll = () => {
  navbar.classList.remove("active");
  menuBtn.classList.remove("fa-times");
  menuBtn.classList.add("fa-bars"); // Reset to bars icon on scroll
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".projectSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

// ============= Swiper

var swiperCategories = new Swiper(".categories_container", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// ==================
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from refreshing the page
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const message = document.getElementById('message').value;

  // Prepare the email content
  const emailContent = `
    Name: ${name}
    Email: ${email}
    Phone Number: ${number}
    Message: ${message}
  `;

  // Display the email content in the console (or you could send this data to a backend)
  console.log(emailContent);

  // Open user's email client with pre-filled data (using mailto)
  // window.location.href = `mailto:${email}?subject=Contact Form Submission&body=${encodeURIComponent(emailContent)}`;
  window.location.href = `mailto:arfuwadekar74@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailContent)}`;

});
