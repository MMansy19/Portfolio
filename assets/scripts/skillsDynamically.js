// Function to generate stars based on the given star count
const generateStars = (starCount) => {
  const starsArray = Array.from(
    { length: starCount },
    () => '<span class="fa fa-star"></span>'
  );
  return starsArray.join(" ");
};
// Add Skill Dynamically
const skillsArray = [
  // Frontend Skills
  //
  {
    name: "React.js",
    experience: "2023",
    stars: "4",
    type: "frontend",
  },
  {
    name: "Next.js",
    experience: "2023",
    stars: "3",
    type: "frontend",
  },
  {
    name: "JavaScript",
    experience: "2022",
    stars: "5",
    type: "frontend",
  },
  {
    name: "TypeScript",
    experience: "2023",
    stars: "4",
    type: "frontend",
  },
  {
    name: "Tailwind CSS",
    experience: "2023",
    stars: "5",
    type: "frontend",
  },
  {
    name: "SASS",
    experience: "2022",
    stars: "4",
    type: "frontend",
  },
  {
    name: "Figma",
    experience: "2023",
    stars: "5",
    type: "frontend",
  },
  {
    name: "Material UI",
    experience: "2023",
    stars: "5",
    type: "frontend",
  },

  {
    name: "UX/UI Design",
    experience: "2023",
    stars: "5",
    type: "frontend",
  },
  {
    name: "RESTful APIs",
    experience: "2023",
    stars: "3",
    type: "frontend",
  },

  // Backend Skills
  {
    name: "Python",
    experience: "2021",
    stars: "5",
    type: "backend",
  },
  {
    name: "Firebase",
    experience: "2023",
    stars: "3",
    type: "backend",
  },
  {
    name: "MongoDB",
    experience: "2023",
    stars: "3",
    type: "backend",
  },
  {
    name: "PostgreSQL",
    experience: "2022",
    stars: "3",
    type: "backend",
  },
  {
    name: "Node.js",
    experience: "2022",
    stars: "3",
    type: "backend",
  },
  // General Skills
  {
    name: "Git/GitHub",
    experience: "2021",
    stars: "5",
    type: "general",
  },
  {
    name: "Vite",
    experience: "2023",
    stars: "4",
    type: "general",
  },
  {
    name: "CI/CD",
    experience: "2023",
    stars: "3",
    type: "general",
  },

  // // Soft Skills
  {
    name: "Problem-solving",
    experience: "2022",
    stars: "4",
    type: "soft",
  },
  {
    name: "Teamwork",
    experience: "2023",
    stars: "4",
    type: "soft",
  },
  {
    name: "Leadership",
    experience: "2023",
    stars: "4",
    type: "soft",
  },
  {
    name: "Flexibility",
    experience: "2023",
    stars: "4",
    type: "soft",
  },
  {
    name: "Self-motivation",
    experience: "2023",
    stars: "4",
    type: "soft",
  },
  {
    name: "communication",
    experience: "2023",
    stars: "4",
    type: "soft",
  },
  {
    name: "Decision-making",
    experience: "2023",
    stars: "4",
    type: "soft",
  },
];

const skillsElement = document.querySelector("#skills");
const currentYear = new Date().getFullYear();

const generateListItem = (skillItem) => {
  const starsHtml = generateStars(parseInt(skillItem.stars));
  return `<li class="skills__item" data-type=${skillItem.type} data-name=${
    skillItem.name
  }>
    <h2 class="skills__title">${skillItem.name}</h2>
    <span class="skills__stars">${starsHtml}</span>
    <br/><span class="skills__years">${
      currentYear - skillItem.experience
    } years</span>
  </li>`;
};

const skillItemsString = skillsArray
  .map((skillItem) => generateListItem(skillItem))
  .join("");

const unOrderList = `<ul class="skills__list">${skillItemsString}</ul>`;

skillsElement.insertAdjacentHTML("beforeend", unOrderList);

//======================================
//----
// Highlight Clicked Item
const skillsItems = document.querySelectorAll(".skills__item");

skillsItems.forEach((item) => {
  item.addEventListener("click", () => {
    skillsItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("skill-active");
      }
    });

    item.classList.toggle("skill-active");
  });
});

// Add Filter Buttons
document.querySelectorAll(".skills__button").forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".skills__button--isActive")
      .classList.remove("skills__button--isActive");
    element.classList.add("skills__button--isActive");
    document.querySelector(
      ".skills__list"
    ).classList = `skills__list ${element.dataset.type}`;
  });
});
