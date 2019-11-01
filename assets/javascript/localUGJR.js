// localUGJR.js

//Need to add 3 and 5 day forecast buttons??  Good-to-have

const APIKey = "141d73dd5f654f4e6b3d0ec7fdd62269";

// Here we are building the URL we need to query the database
let queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "id=4930956&units=imperial&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
})
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $("#boston").append(response.name + " Weather Now");
        $("#temp").append("Temperature (F) " + response.main.temp);
        $("#wind").text("Wind Speed: " + response.wind.speed);
        $("#humid").text("Humidity: " + response.main.humidity);


        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
    });
