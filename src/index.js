const weatherData = {
    tempUnit: "C",
    windSpeedUnit: "m/s",
    days: [
      {
        day: "Mon",
        temp: 22,
        windDirection: "north-east",
        windSpeed: 10,
        type: "sunny"
      },
      {
        day: "Tue",
        temp: 14,
        windDirection: "north-west",
        windSpeed: 14,
        type: "rainy"
      },
      {
        day: "Wed",
        temp: 17,
        windDirection: "south-east",
        windSpeed: 20,
        type: "cloudy"
      },
      {
        day: "Thu",
        temp: 17,
        windDirection: "south-east",
        windSpeed: 20,
        type: "cloudy"
      },
      {
        day: "Fri",
        temp: 17,
        windDirection: "south-east",
        windSpeed: 20,
        type: "cloudy"
      },
      {
        day: "Sat",
        temp: 17,
        windDirection: "south-east",
        windSpeed: 20,
        type: "cloudy"
      },
      {
        day: "Sun",
        temp: 17,
        windDirection: "south-east",
        windSpeed: 20,
        type: "cloudy"
      }
    ]
};
  
let days = document.getElementById("days"),
singleDay = document.getElementById("singleDay"),
html = ` ${weatherData.days.map(
    item => `
            <div class="single-day" onclick="changeDay('${item.day}')">
                <span id="day">${item.day}</span>
                <span>${item.temp}</span>
            </div>
        `
    ).join("")}`;

days.innerHTML = html;
  
window.changeDay = function(item) {
    const result = weatherData.days.filter(it => it.day === item);

    singleDay.innerHTML = `${result.map(
        item => `
            <div class="single-day-res">
                <p id="day" class="res-day">${item.day}</p>
                <p class="res-temp">${item.temp} ${weatherData.tempUnit}</p>
                <p class="${item.windDirection} res-direction">${item.windDirection}</p>
                <p class="res-speed">${item.windSpeed} ${weatherData.windSpeedUnit}</p>
                <p class="res-type">${item.type}</p>
            </div>
        `
    ).join("")}`;
};