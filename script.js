const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});
  const countryData = {
    Nepal: {
      img: "Img/nepal.jpg", // Replace with actual image path
      name: "Nepal",
      desc: "A beautiful Himalayan country.",
      price: "$500",
      rating: 4,
    },
    Malaysia: {
      img: "Img/malaysia.jpg", // Replace with actual image path
      name: "Malaysia",
      desc: "A tropical paradise in Southeast Asia.",
      price: "$700",
      rating: 5,
    },
    UK: {
      img: "Img/uk.jpg", // Replace with actual image path
      name: "United Kingdom",
      desc: "The land of history and culture.",
      price: "$1000",
      rating: 4.5,
    },
    USA: {
      img: "Img/usa.jpg", // Replace with actual image path
      name: "United States",
      desc: "Land of opportunities and innovation.",
      price: "$1200",
      rating: 4.8,
    },
    Australia: {
      img: "Img/australia.jpg", // Replace with actual image path
      name: "Australia",
      desc: "The island continent known for its beaches.",
      price: "$900",
      rating: 4.6,
    },
  };
  
  document.getElementById("countrySelect").addEventListener("change", () => {
    const selectedCountry = document.getElementById("countrySelect").value;
    if (countryData[selectedCountry]) {
      createCard(countryData[selectedCountry]);
    }
  });
  
  function createCard({ img, name, desc, price, rating }) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ""; // Clear previous cards
  
    const card = document.createElement("div");
    card.className = "card mb-4";
  
    const cardImg = document.createElement("img");
    cardImg.src = img;
    cardImg.alt = name;
    cardImg.className = "card-img-top";
  
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
  
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = name;
  
    const cardDesc = document.createElement("p");
    cardDesc.className = "card-text";
    cardDesc.textContent = desc;
  
    const cardPrice = document.createElement("p");
    cardPrice.className = "card-text";
    cardPrice.textContent = `Price: ${price}`;
  
    const cardRating = document.createElement("div");
    cardRating.className = "card-rating";
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.className = i <= Math.round(rating) ? "star-filled" : "star-empty";
      star.textContent = "★";
      cardRating.appendChild(star);
    }
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDesc);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardRating);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
  }
  