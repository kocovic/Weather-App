"use strict";

var weatherData = {
  tempUnit: "C",
  windSpeedUnit: "m/s",
  days: [{
    day: "Mon",
    temp: 22,
    windDirection: "north-east",
    windSpeed: 10,
    type: "sunny"
  }, {
    day: "Tue",
    temp: 14,
    windDirection: "north-west",
    windSpeed: 14,
    type: "rainy"
  }, {
    day: "Wed",
    temp: 17,
    windDirection: "south-east",
    windSpeed: 20,
    type: "cloudy"
  }, {
    day: "Thu",
    temp: 17,
    windDirection: "south-east",
    windSpeed: 20,
    type: "cloudy"
  }, {
    day: "Fri",
    temp: 17,
    windDirection: "south-east",
    windSpeed: 20,
    type: "cloudy"
  }, {
    day: "Sat",
    temp: 17,
    windDirection: "south-east",
    windSpeed: 20,
    type: "cloudy"
  }, {
    day: "Sun",
    temp: 17,
    windDirection: "south-east",
    windSpeed: 20,
    type: "cloudy"
  }]
};
var days = document.getElementById("days"),
    singleDay = document.getElementById("singleDay"),
    html = " ".concat(weatherData.days.map(function (item) {
  return "\n            <div class=\"single-day\" onclick=\"changeDay('".concat(item.day, "')\">\n                <span id=\"day\">").concat(item.day, "</span>\n                <span>").concat(item.temp, "</span>\n            </div>\n        ");
}).join(""));
days.innerHTML = html;

window.changeDay = function (item) {
  var result = weatherData.days.filter(function (it) {
    return it.day === item;
  });
  singleDay.innerHTML = "".concat(result.map(function (item) {
    return "\n            <div class=\"single-day-res\">\n                <p id=\"day\" class=\"res-day\">".concat(item.day, "</p>\n                <p class=\"res-temp\">").concat(item.temp, " ").concat(weatherData.tempUnit, "</p>\n                <p class=\"").concat(item.windDirection, " res-direction\">").concat(item.windDirection, "</p>\n                <p class=\"res-speed\">").concat(item.windSpeed, " ").concat(weatherData.windSpeedUnit, "</p>\n                <p class=\"res-type\">").concat(item.type, "</p>\n            </div>\n        ");
  }).join(""));
};