// const createElem = ((element,className)=>{
//     const item = document.createElement(element);
//     item.classList.add(className);
//     return item;
// }) ;

// const img = createElem('img','projects__img');
// img.src = 'assets/images/personal.pic.png';
// img.setAttribute('width', '100%');

// const h3 = createElem('h3','h3__heading');
// h3.innerText='MANSY Portfolio';

// const p = createElem('p','projects__description');
// p.innerText = 'My name is Mahmoud Mansy, Biomedical Engineering Student at Cairo UniversityCommitted to achieving excellence in the technology industry, he strives for top-tier proficiency. Find me on Github, and Linkedin';

// const a = createElem('a',...['projects__links', 'say-hi-link']);
// a.innerText = 'This is The Website BROther';
// a.href = 'https://main--resultrendition.netlify.app/'

// const projectData =  createElem('div','projects__data');
// projectData.appendChild(h3);
// projectData.appendChild(p);
// projectData.appendChild(a);

// const newProject = createElem('div','project-one');
// newProject.appendChild(projectData)
// newProject.appendChild(img)



// const projectOne = document.querySelector('.project-one');
// // projectsList?.appendChild(newProject);
// // projectOne?.insertAdjacentElement('afterbegin',newProject)
// // projectOne?.insertAdjacentElement('afterend',newProject)
// // projectOne?.insertAdjacentElement('beforebegin',newProject)
// projectOne?.insertAdjacentElement('beforeend',newProject)
// // const clonedProject = projectsList.children[0].cloneNode(true);
// // projectsList?.appendChild(clonedProject);
// // projectsList?.appendChild(projectsList.children[1].cloneNode(true));
// // projectsList?.appendChild(projectsList.children[2].cloneNode(true));






const projects = document.querySelectorAll('.project-one,.project-two');
projects.forEach((projectClicked) =>{
    projectClicked.addEventListener('click', () =>{
        projects.forEach((anotherProject)=>{
            if (anotherProject != projectClicked){
                const item =anotherProject.querySelector('.projects__data')
                item.classList.remove('project-active');
            }
        });
        const item =projectClicked.querySelector('.projects__data')
        item.classList.toggle('project-active');
    });
});



