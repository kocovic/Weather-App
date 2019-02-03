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
            <div onclick="changeDay('${item.day}')">
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
            <div>
                <span id="day">${item.day}</span>
                <span>${item.temp}</span>
                <span class="${item.windDirection}">${item.windDirection}</span>
                <span>${item.windSpeed}</span>
                <span>${item.type}</span>
            </div>
        `
    ).join("")}`;
};