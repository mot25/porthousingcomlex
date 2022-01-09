let mainImage = document.querySelector(".main-image");
let mainPath = document.querySelectorAll(".main-path");
let counrer = document.querySelector(".counrer");
let arrowUp = document.querySelector(".counrer-btn__up");
let arrowDown = document.querySelector(".counrer-btn__down");
mainPath.forEach((item) => {
    item.style.opacity = 0;
    if (item.dataset.floor == 2 ) {
      item.style.opacity = 1;
    }
  });
mainImage.addEventListener("mousemove", (e) => {
  if (e.target.dataset.floor == undefined) {
    return false;
  }
  //   console.dir(e.target.dataset.floor);
  mainPath.forEach((item) => {
    item.style.opacity = 0;
    if (+counrer.innerHTML == item.dataset.floor) {
      item.style.opacity = 1;
    }
    counrer.innerHTML.length === 1
      ? (counrer.innerHTML = "0" + counrer.innerHTML)
      : (counrer.innerHTML = counrer.innerHTML);
    setTimeout(() => {
      item.style.opacity = 0;
    }, 8000);
  });
  counrer.innerHTML = e.target.dataset.floor;
});
arrowUp.addEventListener("click", () => {
  if (+counrer.innerHTML == 18) {
    return false;
  }
  counrer.innerHTML = +counrer.innerHTML + 1;

  mainPath.forEach((item) => {
    item.style.opacity = 0;
    if (+counrer.innerHTML == item.dataset.floor) {
      item.style.opacity = 1;
    }
    counrer.innerHTML.length === 1
      ? (counrer.innerHTML = "0" + counrer.innerHTML)
      : (counrer.innerHTML = counrer.innerHTML);
    setTimeout(() => {
      item.style.opacity = 0;
    }, 7000);
  });
});
arrowDown.addEventListener("click", () => {
  if (+counrer.innerHTML == 02) {
    return false;
  }
  counrer.innerHTML = +counrer.innerHTML - 1;
  mainPath.forEach((item) => {
    item.style.opacity = 0;
    if (+counrer.innerHTML == item.dataset.floor) {
      item.style.opacity = 1;
    }
    counrer.innerHTML.length === 1
      ? (counrer.innerHTML = "0" + counrer.innerHTML)
      : (counrer.innerHTML = counrer.innerHTML);
    setTimeout(() => {
      item.style.opacity = 0;
    }, 7000);
  });
});
