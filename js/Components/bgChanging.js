export function bgChanging() {
  // Chick On bgImg In Local Storage
  document.querySelector(".landing").style.backgroundImage =
    localStorage.getItem("lastBg");

  // Chick On Option Of Changing Img feature
  let myActiveSpan = localStorage.getItem("activeSpan");

  if (myActiveSpan !== null) {
    document.querySelectorAll(".random-backgrounds span").forEach((span) => {
      // Remove All Active Classes From All Spans
      span.classList.remove("active");

      if (span.getAttribute("data-background") === myActiveSpan) {
        span.classList.add("active");
      }
    });
  }
  //   ----
  // Put Landing Page in Variable
  let myLanding = document.querySelector(".landing");
  //  Put Images in an Array
  let imgArray = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "11.jpg",
  ];

  let tureOn = "";
  let bgChanging = "";

  // Switch Random BAckgrounds
  const myBg = document.querySelectorAll(".random-backgrounds span");

  // Loop On All Lis Items
  myBg.forEach((span) => {
    // Event Click On All Lis
    span.addEventListener("click", (e) => {
      // Remove Active Class From All Span
      e.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
      });

      // Add Active Class On Clicked Span
      e.target.classList.add("active");

      // Set Item IN Local Storage
      localStorage.setItem(
        "activeSpan",
        e.target.getAttribute("data-background"),
      );

      if (
        document
          .querySelector(".random-backgrounds span.no")
          .classList.contains("active")
      ) {
        console.log("Changing Img Is Off");
        tureOn = false;

        changeImg();

        // Set Last BG IN Local Storage
        localStorage.setItem(
          "lastBg",
          window.getComputedStyle(myLanding).backgroundImage,
        );
      } else {
        console.log("else is work");

        tureOn = true;

        changeImg();
      }
    });
  });

  // Turn On And Off Changing bg Img
  if (
    document
      .querySelector(".random-backgrounds span.yes")
      .classList.contains("active")
  ) {
    console.log("Changing Img Is On");

    tureOn = true;

    changeImg();
  }

  function changeImg() {
    if (tureOn) {
      bgChanging = setInterval(() => {
        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgArray.length);

        // Change Background Image URL
        myLanding.style.backgroundImage =
          'url("imgs/' + imgArray[randomNumber] + '")';
      }, 1000);
    } else {
      clearInterval(bgChanging);
    }
  }
}
