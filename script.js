  let findButton = document.querySelector("#findButton");
  let id = document.querySelector("#showCoordinates");
  
  findButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat  = position.coords.latitude.toFixed(6);
      let long = position.coords.longitude.toFixed(6);
    id.innerHTML = `<p class="font-normal text-gray-700 dark:text-gray-400">
      Latitude: ${lat}<br>
      Longitude: ${long}
    </p>
    `;
    });
  });
