function updateTime() {
  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  // manila
  let manilaElement = document.querySelector("#manila");
  let manilaDateElement = manilaElement.querySelector(".date");
  let manilaTimeElement = manilaElement.querySelector(".time");

  let manilaTime = moment().tz("Europe/Italy");

  manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
  manilaTimeElement.innerHTML = manilaTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

setInterval(updateTime, 1000);
updateTime();
