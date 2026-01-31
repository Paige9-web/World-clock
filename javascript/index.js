const citiesElement = document.querySelector("#cities");
const originalCitiesHTML = citiesElement.innerHTML;

let timer = null;
function updateTime() {
  let tokyoTime = moment().tz("Asia/Tokyo");
  let manilaTime = moment().tz("Asia/Manila");

  document.querySelector("#tokyo .date").innerHTML =
    tokyoTime.format("MMMM Do YYYY");

  document.querySelector("#tokyo .time").innerHTML =
    `${tokyoTime.format("h:mm:ss")} <small>${tokyoTime.format("A")}</small>`;

  document.querySelector("#manila .date").innerHTML =
    manilaTime.format("MMMM Do YYYY");

  document.querySelector("#manila .time").innerHTML =
    `${manilaTime.format("h:mm:ss")} <small>${manilaTime.format("A")}</small>`;
}

// Dropdown change
function updateCity(event) {
  clearInterval(timer);

  let cityTimeZone = event.target.value;
  if (cityTimeZone === "") {
    citiesElement.innerHTML = originalCitiesHTML;

    timer = setInterval(updateTime, 1000);
    updateTime();
    return;
  }

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  function updateSelectedCity() {
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.split("/")[1].replace("_", " ");

    document.querySelector("#cities").innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
      </div>
    </div>
  `;
  }

  updateSelectedCity();
  timer = setInterval(updateSelectedCity, 1000);
}
timer = setInterval(updateTime, 1000);
updateTime();

document.querySelector("#city").addEventListener("change", updateCity);
