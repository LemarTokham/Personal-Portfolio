import ProjectsItem from "./ProjectsItem"
import { projects } from "../portfolioData"

function projectMapper(proj: {name:string, description:string}){
    return (
        <ProjectsItem
        name={proj.name}
        description={proj.description}
        ></ProjectsItem>
    )
}

function ProjectsSection(){
    return (
        <>
        <h2>Projects</h2>
        {projects.map(projectMapper)}
        </>
    )
}

export default ProjectsSection