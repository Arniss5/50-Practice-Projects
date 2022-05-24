import projectsList from "./Src/projects.js";


const projects = document.querySelector('.projects')

projectsList.forEach(project => {
    const elementsToAdd = `<li class="projects--project"><a href=${project.url} class="projects--link"><img src=${project.img} class="projects--img"/><h2 class="project--title">${project.title}</h2></a></li>`
    projects.innerHTML += elementsToAdd

});