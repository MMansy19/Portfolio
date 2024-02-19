
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



