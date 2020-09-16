/**************************** First task *************************************/
function zero_first_format(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
function weather() {
  let clock = new Date();
  let month;
  let week;
  switch (clock.getMonth() + 1) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
  }
  switch (clock.getDay()) {
    case 0:
      week = "Sun";
      break;
    case 1:
      week = "Mon";
      break;
    case 2:
      week = "Tue";
      break;
    case 3:
      week = "Wed";
      break;
    case 4:
      week = "Thu";
      break;
    case 5:
      week = "Fri";
      break;
    case 6:
      week = "Sat";
      break;
  }
  let date = document.querySelector(".date");
  let refreshDate = document.querySelector(".refresh-date");
  let time = document.querySelector(".time");
  date.textContent =
    month + " " + clock.getDate() + ", " + clock.getFullYear() + " - " + week;
  time.textContent =
    zero_first_format(clock.getHours()) +
    " : " +
    zero_first_format(clock.getMinutes());
  refreshDate.textContent =
    month +
    " " +
    zero_first_format(clock.getDate()) +
    ", " +
    zero_first_format(clock.getHours()) +
    " : " +
    zero_first_format(clock.getMinutes()) +
    " : " +
    zero_first_format(clock.getSeconds());
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=kremenchug&units=metric&APPID=5d066958a60d315387d9492393935c19"
  )
    .then((response) => response.json())
    .then((data) => {
      let title = (document.querySelector(".weather__title").textContent =
        data.name);
      let humidity = document.querySelector(".humidity-value");
      let pressure = document.querySelector(".pressure-value");
      let wind = document.querySelector(".wind-value");
      let temperature = document.querySelector(".temperature-value");
      let feelsLike = document.querySelector(".feels-like-value");
      let clouds = document.querySelector(".clouds");
      let refreshIcon = document.querySelector(".image");
      let iconUrl = "https://openweathermap.org/img/w/";
      humidity.textContent = data.main.humidity;
      pressure.textContent = data.main.pressure;
      wind.textContent = data.wind.speed;
      temperature.textContent = Math.round(data.main.temp);
      feelsLike.textContent = Math.round(data.main.feels_like);
      clouds.textContent = data.weather[0].description;
      refreshIcon.setAttribute("src", iconUrl + data.weather[0].icon + ".png");
    });
}
weather();
let refreshBtn = document.querySelector(".refresh-icon");
refreshBtn.addEventListener("click", weather);
/**************************** Second task *************************************/
fetch("https://api.github.com/users/YujinNoread")
  .then((response) => response.json())
  .then((user) => {
    let img = document.querySelector(".user__avatar");
    let avatar = user.avatar_url;
    img.setAttribute("src", avatar);
  });
