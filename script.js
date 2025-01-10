const collegesData = {
  Nepal: [
      { name: "Mid-Valley International College", description: "Leading technical and management college in Nepal." },
      { name: "Tribhuvan University", description: "Nepal's oldest university, located in Kirtipur." },
  ],
  Malaysia: [
      { name: "University of Malaya", description: "Premier university located in Kuala Lumpur." },
      { name: "University Putra Malaysia", description: "Renowned for agriculture and technology research." },
  ],
  UK: [
      { name: "University of Oxford", description: "One of the world's top academic institutions." },
      { name: "University of Cambridge", description: "Known for its rich history and academic excellence." },
  ],
};

const universityDetailsData = {
  "Mid-Valley International College": {
      affiliatedColleges: ["College A", "College B"],
      courses: [
          { name: "BBA", fee: "$5000/year" },
          { name: "Hospitality Management", fee: "$6000/year" },
      ],
  },
  "Tribhuvan University": {
      affiliatedColleges: ["Campus X", "Campus Y"],
      courses: [
          { name: "BA", fee: "$3000/year" },
          { name: "BSc", fee: "$4000/year" },
      ],
  },
  "University of Malaya": {
      affiliatedColleges: ["Faculty of Science", "Faculty of Arts"],
      courses: [
          { name: "MBA", fee: "$7000/year" },
          { name: "Engineering", fee: "$8000/year" },
      ],
  },
};

function displayColleges(colleges) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // Clear previous data
  colleges.forEach(({ name, description }) => {
      const card = document.createElement("div");
      card.className = "card mb-4";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.textContent = name;

      const cardDesc = document.createElement("p");
      cardDesc.className = "card-text";
      cardDesc.textContent = description;

      const detailsButton = document.createElement("button");
      detailsButton.className = "btn btn-primary mt-2";
      detailsButton.textContent = "View Details";
      detailsButton.addEventListener("click", () => showUniversityDetails(name));

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardDesc);
      cardBody.appendChild(detailsButton);
      card.appendChild(cardBody);
      cardContainer.appendChild(card);
  });
}

function showUniversityDetails(universityName) {
  const detailsSection = document.getElementById("universityDetails");
  const nameElement = document.getElementById("universityName");
  const descElement = document.getElementById("universityDescription");
  const collegesList = document.getElementById("affiliatedColleges");
  const coursesList = document.getElementById("coursesAndFees");

  const data = universityDetailsData[universityName];
  if (data) {
      nameElement.textContent = universityName;
      descElement.textContent = `Detailed information about ${universityName}.`;

      collegesList.innerHTML = data.affiliatedColleges
          .map(college => `<li>${college}</li>`)
          .join("");
      coursesList.innerHTML = data.courses
          .map(course => `<li>${course.name}: ${course.fee}</li>`)
          .join("");

      detailsSection.classList.remove("d-none");
  }
}

document.getElementById("countrySelect").addEventListener("change", () => {
  const selectedCountry = document.getElementById("countrySelect").value;
  if (collegesData[selectedCountry]) {
      displayColleges(collegesData[selectedCountry]);
      document.getElementById("universityDetails").classList.add("d-none");
  }
});

document.getElementById("proceedButton").addEventListener("click", () => {
  alert("Proceeding to the next step...");
});
