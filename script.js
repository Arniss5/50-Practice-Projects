import projectsList from "./Src/projects.js";


const projects = document.querySelector('.projects')

projectsList.forEach(project => {
    const elementsToAdd =
     `<section class="project--card">
        <a href=${project.url} class="project--link">
            <img src=${project.img} class="project--img"/>
            <h2 class="project--title">${project.title}</h2>
            <p class="project--description">${project.description}</p>
        </a>
    </section>`
    projects.innerHTML += elementsToAdd

});

//li => section
// projects--project => project-card
// projects--img => project--img
// 