console.log("Client side Javascript");

const WeatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message_item1");
const messageTwo = document.querySelector("#message_item2");

WeatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        console.log(data);
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          console.log(data);
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
