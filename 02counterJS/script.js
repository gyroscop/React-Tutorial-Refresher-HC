let count = document.getElementById("counter");
let footercount = document.getElementById("footercounter");
let countincrButton = document.getElementById("countincr");
let countdecrButton = document.getElementById("countdecr");

let innerCounter = 0;

countincrButton.addEventListener("click", () => {
  innerCounter = innerCounter + 1;
  //   console.log(innerCounter);
  count.innerHTML = innerCounter;
  footercount.innerHTML = innerCounter;
});

countdecrButton.addEventListener("click", () => {
  innerCounter = innerCounter - 1;
  //   console.log(innerCounter);
  count.innerHTML = innerCounter;
  footercount.innerHTML = innerCounter;
});
