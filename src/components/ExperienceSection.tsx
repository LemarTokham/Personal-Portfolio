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
        <section className="bg-white p-8 my-8 mx-4 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {experience.map(expMapper)}
            </div>
        </section>
    )
}

export default ExperienceSection