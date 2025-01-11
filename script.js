const collegesData = {
    Nepal: [
      { name: "Mid-Valley International College", description: "Leading technical and management college in Nepal.", priceRange: "$3000 - $5000", documents: ["Passport", "Academic Transcripts", "English Proficiency Certificate"], image: "https://www.collegeinfonepal.com/wp-content/uploads/2023/08/Mid-Valley-International-College-Photo-1.jpg" },
      { name: "Tribhuvan University", description: "Nepal's oldest university, located in Kirtipur.", priceRange: "$2000 - $4000", documents: ["Passport", "Certificates"], image: "Img/universities/tribhuvan.jpg" },
    ],
    Malaysia: [
      { name: "University of Malaya", description: "Premier university located in Kuala Lumpur.", priceRange: "$5000 - $7000", documents: ["Passport", "Recommendation Letters"], image: "Img/universities/malaya.jpg" },
      { name: "University Putra Malaysia", description: "Renowned for agriculture and technology research.", priceRange: "$6000 - $8000", documents: ["Passport", "Work Experience"], image: "Img/universities/putra.jpg" },
    ],
    UK: [
      { name: "University of Oxford", description: "One of the world's top academic institutions.", priceRange: "$20,000 - $50,000", documents: ["Passport", "Academic Transcripts", "IELTS"], image: "Img/universities/oxford.jpg" },
      { name: "University of Cambridge", description: "Known for its rich history and academic excellence.", priceRange: "$20,000 - $50,000", documents: ["Passport", "GRE", "Recommendations"], image: "Img/universities/cambridge.jpg" },
    ],
  };
  
  function displayColleges(colleges) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    colleges.forEach(({ name, description, priceRange, documents, image }) => {
      const card = document.createElement("div");
      card.className = "card mb-4 d-flex flex-row";
  
      const imagePlaceholder = document.createElement("img");
      imagePlaceholder.className = "col-4 p-3";
      imagePlaceholder.src = image || "Img/default-placeholder.jpg";
      imagePlaceholder.alt = `${name} Image`;
      imagePlaceholder.style = "width: 100%; height: auto; object-fit: cover;";
  
      const cardBody = document.createElement("div");
      cardBody.className = "card-body col-8";
  
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.textContent = name;
  
      const cardDesc = document.createElement("p");
      cardDesc.className = "card-text";
      cardDesc.textContent = description;
  
      const detailsButton = document.createElement("button");
      detailsButton.className = "btn btn-primary mt-2";
      detailsButton.textContent = "View Details";
      detailsButton.setAttribute("data-bs-toggle", "modal");
      detailsButton.setAttribute("data-bs-target", "#universityModal");
      detailsButton.addEventListener("click", () => showUniversityDetails(name, priceRange, documents, description));
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardDesc);
      cardBody.appendChild(detailsButton);
      card.appendChild(imagePlaceholder);
      card.appendChild(cardBody);
      cardContainer.appendChild(card);
    });
  }
  
  function showUniversityDetails(name, priceRange, documents, description) {
    document.getElementById("universityModalLabel").textContent = name;
    document.getElementById("priceRange").textContent = priceRange;
    document.getElementById("aboutUniversity").textContent = description;
    document.getElementById("documentsRequired").innerHTML = documents
      .map((doc) => `<li>${doc}</li>`)
      .join("");
  }
  
  document.getElementById("countrySelect").addEventListener("change", () => {
    const selectedCountry = document.getElementById("countrySelect").value;
    if (collegesData[selectedCountry]) {
      displayColleges(collegesData[selectedCountry]);
    }
  });
  