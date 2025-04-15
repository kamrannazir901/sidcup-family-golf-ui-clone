function mobilebtnShow() {
  const mobilebtn = document.querySelector(".mobilebtn");
  const mobileDiv = document.querySelector(".mobilebuttonDiv");

  let isVisible = false;

  mobilebtn.addEventListener("click", () => {
    if (!isVisible) {
      mobileDiv.style.display = "block";
      gsap.fromTo(
        ".mobilebuttonDiv",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    } else {
      gsap.to(".mobilebuttonDiv", {
        opacity: 0,
        y: 0,
        duration: 0.5,
        onComplete: () => {
          mobileDiv.style.display = "none";
        },
      });
    }
    isVisible = !isVisible;
  });
}

function openMobileMenu() {
  const menubtn = document.querySelector(".menubtn");
  const mobilemenu = document.querySelector(".mobilemenu");
  let isVisible = true;

  menubtn.addEventListener("click", (e) => {
    if (isVisible) {
      gsap.fromTo(
        mobilemenu,
        {
          display: "flex",
          opacity: 0,
        },
        {
          zIndex: "var(--z-index-mobile-nav)",
          opacity: 1,
          duration: 0.5,
        }
      );
      gsap.from(".mobilemenu a", {
        opacity: 0,
        y: -30,
        stagger: 0.2,
      });
    } else {
      gsap.to(mobilemenu, {
        opacity: 0,
        zIndex: -1,
        duration: 0.2,
      });
    }

    isVisible = !isVisible;
  });
}

function ScrollEffect() {
  gsap.to(".section1 nav", {
    backgroundColor: "#000",
    height: "120px",
    duration: 1,
    scrollTrigger: {
      trigger: ".section1 nav",
      scroller: "body",
      start: "top -20%",
      end: "top -10%",
      scrub: 1,
    },
  });

  gsap.to("main", {
    backgroundColor: "#000",
    duration: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: "main",
      start: "top -20%",
      end: "top -60%",
      scrub: 1,
    },
  });
}

function mouseCursor() {
  document.addEventListener("mousemove", (e) => {
    gsap.to("#cursor-box", {
      x: e.clientX - 250,
      y: e.clientY - 250,
      delay: 0.1,
    });
    gsap.to("#cursor", {
      x: e.clientX,
      y: e.clientY,
      delay: 0.1,
    });
  });

  // hover effect

  const Allanchors = document.querySelectorAll("nav a");
  Allanchors.forEach((a) => {
    a.addEventListener("mouseenter", () => {
      gsap.to("#cursor", {
        scale: 2.5,
        duration: 0.3,
        backgroundColor: "transparent",
        border: ".5px solid #fff",
      });
    });
    // mouse leave
    a.addEventListener("mouseleave", () => {
      gsap.to("#cursor", {
        scale: 1,
        duration: 0.3,
        backgroundColor: "var(--green)",
        border: "none",
      });
    });
  });
}

function quotessection() {
  const reviews = [
    "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.",
    "Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit here, cafe does some nice goodies too 👍🏽",
    "Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!",
    "Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️",
    "I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!",
    "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close.",
  ];

  const quotePara = document.getElementById("quotepara");
  let index = 0;

  quotePara.textContent = reviews[index]; // Set initial

  setInterval(() => {
    gsap.to(quotePara, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        index = (index + 1) % reviews.length;
        quotePara.textContent = reviews[index];

        gsap.fromTo(
          quotePara,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      },
    });
  }, 4000);
}

mobilebtnShow();
openMobileMenu();
ScrollEffect();
mouseCursor();
quotessection();

// about

gsap.from(".aboutus .firstimage,.aboutus .lastimage,.aboutus .aboutuscontent", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".aboutus",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: true,
  },
});

// cards

// gsap.from(".card", {
//   scale: 0.6,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".cards",
//     scroller: "body",
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 1,
//   },
// });

gsap.from("#quotelefticon", {
  y: -80,
  x: -80,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#quotelefticon",
    scroller: "body",
    start: "top 50%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.from("#quoterighticon", {
  y: 80,
  x: 80,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#quotelefticon",
    scroller: "body",
    start: "top 50%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.from(".section5 h2", {
  y: 80,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".section5 h2",
    scroller: "body",
    start: "top 100%",
    end: "top 90%",
    scrub: 1,
  },
});
