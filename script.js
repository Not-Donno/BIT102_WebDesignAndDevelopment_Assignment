const collegesData = {
    Nepal: [
      { name: "Mid-Valley International College", description: "Leading technical and management college in Nepal.", priceRange: "$3000 - $5000", documents: ["Passport", "Academic Transcripts", "English Proficiency Certificate"], image: "https://www.collegeinfonepal.com/wp-content/uploads/2023/08/Mid-Valley-International-College-Photo-1.jpg" },
      { name: "Tribhuvan University", description: "Nepal's oldest university, located in Kirtipur.", priceRange: "$2000 - $4000", documents: ["Passport", "Certificates"], image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyKoGMS-WRHHtkwO6SIGoMuLvv5i2xqswc2hvleBX73OipWIa6NcmIW0qwwwBr_-3WM2eRheIF_PInLR7PDs4k3cZMV19Q4vxv1AJX3oHkXciL5YvOofnHe0bjcvMqD3mK3v_kBA1UlNy3/s1600/Tribhuvan+University.jpg" },
      { name: "Pokhara University", description: "Pokhara University's constituent colleges offer diverse programs, fostering academic excellence and innovative learning opportunities", priceRange: "$1000-2000", documents: ["Certificate", "+2 Results", "Letters"], image: 'https://www.b360nepal.com/uploads/posts/Pokhara-University-1732287662.jpg' },
      { name: "Purbanchal University", description: "The establishment of Purbanchal University in 1993 was visualized as an extraordinary endeavour by the Government of Nepal to create an academic centre", priceRange: "$1000-$2500", documents: ["Academic Transcropts", "certificates"], image: "https://www.puexam.edu.np/assets/img/aboutus/aboutpu.jpg" }
    ],
    Malaysia: [
      { name: "Help University", description: "Premier university located in Kuala Lumpur.", priceRange: "$5000 - $7000", documents: ["Passport", "Recommendation Letters", "IELTS Certificate"], image: "https://university.help.edu.my/wp-content/uploads/2023/12/HELP_Subang-Bestari.jpg" },
      { name: "University of Malaya", description: "The Universiti Malaya is a public research university located in Kuala Lumpur, Malaysia.", priceRange: "$6000 - $8000", documents: ["Passport", "Letters", "IELTS Certificate"], image: "https://theacademicinsights.com/wp-content/uploads/2020/07/imej_5ccfe917a8b765ccfef83b7420.jpg" },
    ],
    UK: [
      { name: "University of Oxford", description: "One of the world's top academic institutions.", priceRange: "$20,000 - $50,000", documents: ["Passport", "Academic Transcripts", "IELTS"], image: "https://c.files.bbci.co.uk/2c03/live/64d39070-8596-11ef-addc-5556603eb4c1.jpg" },
      { name: "University of Cambridge", description: "Known for its rich history and academic excellence.", priceRange: "$20,000 - $50,000", documents: ["Passport", "GRE", "Recommendations"], image: "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg" },
      { name: "Imperial College London", description: "A world-leading university specializing in science, engineering, and medicine.", priceRange: "$25,000 - $45,000", documents: ["Passport", "Academic Transcripts", "English Proficiency Certificate"], image: "https://i0.wp.com/oyaschool.com/wp-content/uploads/2019/01/Imperial-College-London_UK_background.jpg?fit=1200%2C661&ssl=1" },
      { name: "London School of Economics", description: "Renowned institution for social sciences, economics, and political science.", priceRange: "$30,000 - $50,000", documents: ["Passport", "Recommendation Letters", "Academic Transcripts"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbiwhaMBlcz7XDycf2kPdPjI1o6P2J6vIdA&s" }
    ],
    USA: [
      { name: "Harvard University", description: "Prestigious Ivy League university known for its world-class education.", priceRange: "$40,000 - $70,000", documents: ["Passport", "Academic Transcripts", "SAT/ACT Scores"], image: "https://blog.rmgoe.org/wp-content/uploads/2022/05/Harvard-University.webp" },
      { name: "Stanford University", description: "Leading research and innovation university located in California.", priceRange: "$50,000 - $75,000", documents: ["Passport", "Letters of Recommendation", "English Proficiency Certificate"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5ywShkB4J3bRYdMeaS-f2UJX1tRcdFn1ug&s" },
      { name: "Massachusetts Institute of Technology (MIT)", description: "World-renowned institution for science and technology.", priceRange: "$45,000 - $75,000", documents: ["Passport", "Academic Transcripts", "English Proficiency Certificate"], image: "https://cdn.britannica.com/17/100117-050-EA32F934/Massachusetts-Institute-of-Technology-Cambridge.jpg" }
    ],
    Australia: [
      { name: "University of Melbourne", description: "One of Australia's leading universities with a strong focus on research and innovation.", priceRange: "$30,000 - $50,000", documents: ["Passport", "Academic Transcripts", "IELTS"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwp9ZJGQhRGsYxAg8Io0VsR9grsRpXIZKEQ&s" },
      { name: "University of Sydney", description: "Renowned for its campus and academic excellence.", priceRange: "$35,000 - $55,000", documents: ["Passport", "Academic Transcripts", "English Proficiency Certificate"], image: "https://www.sydney.edu.au/content/dam/corporate/images/sydney-environment-institute/articles/august-2022/call-for-submissions/quad.jpg" },
      { name: "Australian National University (ANU)", description: "World-class university specializing in research and innovation.", priceRange: "$32,000 - $52,000", documents: ["Passport", "Recommendation Letters", "English Proficiency Certificate"], image: "https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/11/australian-national-university.jpeg" }
    ]
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
      imagePlaceholder.style = "width: 150px; height: 150px; object-fit: cover;";
  
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
  