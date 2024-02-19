import { observeElements } from './utilis.js';

// Resize Pic Pio
const bioPic = document.querySelector('.bio__pic');
bioPic.style.width = '26rem'

//=========================================
//---
// ObserveInterSections API 
const sectionElements = document.querySelectorAll('section');

observeElements(sectionElements);

//=========================================
//---
// Select all elements with the class 'project-section'
const projectSections = document.querySelectorAll('.project-one, .project-two');

// Call observeElements function passing the array of projectSections
observeElements(projectSections);