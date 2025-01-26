document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://dog.ceo/api/breed/hound/images";
  const imageContainer = document.getElementById("dog-images");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        data.message.forEach((imageUrl) => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          imgElement.alt = "Hound dog";
          imageContainer.appendChild(imgElement);
        });
      } else {
        console.error("Failed to load images.");
      }
    })
    .catch((error) =>
      console.error("Error fetching data from Dog API:", error)
    );
});
