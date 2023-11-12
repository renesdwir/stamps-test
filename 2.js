import fetch from "node-fetch";
async function getJktWeather() {
  try {
    const response = await fetch(
      "https://openweathermap.org/data/2.5/onecall?lat=-6.2146&lon=106.8451&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
getJktWeather()
  .then((data) => {
    console.log("Weather Forecast:");
    data.daily.slice(0, 6).forEach((data) => {
      const date = new Date(data.dt * 1000);
      let dateString = date.toUTCString().split(" ");
      dateString.splice(4, 2);
      dateString = dateString.join(" ");
      console.log(dateString + ": " + data.temp.day.toString() + "°C");
    });
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
