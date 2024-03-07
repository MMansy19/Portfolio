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
  {
    name: "C++",
    experience: "2021",
    stars: "5",
    type: "",
  },
  {
    name: "DSA",
    experience: "2021",
    stars: "5",
    type: "",
  },
  {
    name: "Prob. Solving",
    experience: "2021",
    stars: "5",
    type: "",
  },
  {
    name: "OOP",
    experience: "2021",
    stars: "5",
    type: "",
  },
  {
    name: "Python",
    experience: "2021",
    stars: "5",
    type: "backend",
  },
  {
    name: "Flask",
    experience: "2023",
    stars: "3",
    type: "backend",
  },
  {
    name: "PostgreSQL",
    experience: "2023",
    stars: "3",
    type: "backend",
  },
  {
    name: "Node.js",
    experience: "2023",
    stars: "3",
    type: "backend",
  },
  {
    name: "HTML",
    experience: "2021",
    stars: "5",
    type: "frontend",
  },
  {
    name: "CSS",
    experience: "2021",
    stars: "5",
    type: "frontend",
  },
  {
    name: "Animation",
    experience: "2022",
    stars: "4",
    type: "frontend",
  },
  {
    name: "SASS",
    experience: "2022",
    stars: "4",
    type: "frontend",
  },
  {
    name: "Tailwind CSS",
    experience: "2023",
    stars: "3",
    type: "frontend",
  },
    {
    name: "JavaScript",
    experience: "2022",
    stars: "4",
    type: "frontend",
  },
    {
    name: "TypeScript",
    experience: "2023",
    stars: "3",
    type: "frontend",
  },
  {
    name: "Res. Design",
    experience: "2022",
    stars: "5",
    type: "frontend",
  },
  {
    name: "React.js",
    experience: "2023",
    stars: "3",
    type: "frontend",
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
