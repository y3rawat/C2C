const iphone = document.querySelector(".iphone");
const widgets = document.querySelectorAll(".widgets");

gsap.set(iphone, { x: -750, rotation: 0 });
gsap.set(widgets, { opacity: 0, scale: 0 });

function iPhoneAnimation() {
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.to(iphone, { x: 0 })
    .to(iphone, { rotation: 0, scale: 0.9 })
    .to(iphone, { duration: 3, scale: 1 });
  return tl;
}

function widgetAnimation() {
  const tl = gsap.timeline();
  tl.to(widgets, { duration: 0, opacity: 1 });
  return tl;
}

const animations = [
  {
    selector: "#Company_recommendation",
    duration: 3,
    scale: 0.5,
    x: -400,
    y: 210,
    ease: Power4.easeOut
  },
  {
    selector: "#performance_mean",
    duration: 3,
    scale: 0.48,
    x: -340,
    y: -190,
    ease: Power2.easeOut
  },
  {
    selector: "#notifications",
    duration: 3,
    scale: 0.3,
    x: -540,
    y: 0,
    ease: Power4.easeOut
  },
  {
    selector: "#jobprep",
    duration: 3,
    scale: 0.07,
    x: 440,
    y: 140,
    ease: Power4.easeOut
  },
  {
    selector: "#MNC_recommendations",
    duration: 3,
    scale: 0.06,
    x: 340,
    y: -110,
    ease: Power2.easeOut
  },
  {
    selector: "#visiteprofile",
    duration: 3,
    scale: 0.1,
    x: -590,
    y: -220,
    ease: Power4.easeOut
    
  },
  {
    selector: "#mockInterview",
    duration: 3,
    scale: 0.1,
    x: 590,
    y: -160,
    ease: Power2.easeOut
  },

  {
    selector: "#wallet",
    duration: 3,
    scale: 0.6,
    x: -280,
    y: 100,
    ease: Power4.easeOut
  },
  {
    selector: "#apple-tv",
    duration: 3,
    scale: 0.6,
    x: 500,
    y: 300,
    ease: Power4.easeOut
  },
  {
    selector: "#Feedback",
    duration: 3,
    scale: 0.5,
    x: -630,
    y: -50,
    ease: Power2.easeOut
  },
  {
    selector: "#socials",
    duration: 3,
    scale: 0.6,
    x: 330,
    y: 120,
    ease: Power2.easeOut
  }
];
const startTime = 2;
const masterTimeline = gsap.timeline();
masterTimeline.add(iPhoneAnimation()).add(widgetAnimation(), startTime);

animations.forEach((animation, index) => {
  const { selector, duration, scale, x, y, ease } = animation;
  const element = document.querySelector(selector);
  masterTimeline.add(
    gsap.to(element, { duration, scale, x, y, ease }),
    startTime + (index % 3) / 2
  );
});

ScrollTrigger.create({
  animation: masterTimeline,
  trigger: ".animation",
  scrub: 1,
  pin: true
  // markers: true
});