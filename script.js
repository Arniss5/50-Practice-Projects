import projectsList from "./Src/projects.js";


const projects = document.querySelector('.projects')

projectsList.forEach(project => {
    const elementsToAdd = `<li><img src=${project.img} class="project--img"/><a href=${project.url} class="projects--link"><h2 class="project--title">${project.title}</h2></a></li>`
    projects.innerHTML += elementsToAdd

});