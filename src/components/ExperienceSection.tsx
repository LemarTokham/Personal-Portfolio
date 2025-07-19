import ExperienceItem from "./ExperienceItem"
import { experience } from "../portfolioData";



function expMapper(exp: { company: string; role: string; description: string }){
    return(
        
        <ExperienceItem
        company={exp.company}
        role={exp.role}
        description={exp.description}
        ></ExperienceItem>
    ) 
}

function ExperienceSection(){
    return (
        <>
        <h2>Experience</h2>
       {experience.map(expMapper)}

        </>
    )
}

export default ExperienceSection