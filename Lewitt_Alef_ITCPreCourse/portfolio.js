const GITHUB_URL = "https://github.com/Alef5750";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    console.log(data);
  });

// card animation upon clicking it
function fade() {
  const card = document.querySelector(".card");
  card.style.opacity = "0.5";
}

// POPMOTION PHYSICS
