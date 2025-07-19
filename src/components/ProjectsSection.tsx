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
        <section className="bg-white p-8 my-8 mx-4 rounded-xl shadow-lg border-l-4 border-blue-500">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Projects</h2>
        {projects.map(projectMapper)}
        </section>
    )
}

export default ProjectsSection