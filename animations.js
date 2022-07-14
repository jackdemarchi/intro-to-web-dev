const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const animation = alice1.animate(aliceTumbling, aliceTiming);
animation.finished.then((_response) => {
  const animation2 = alice2.animate(aliceTumbling, aliceTiming);
  animation2.finished.then((_response) => {
    const animation3 = alice3.animate(aliceTumbling, aliceTiming);
  });
});
