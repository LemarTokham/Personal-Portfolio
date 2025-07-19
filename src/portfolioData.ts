import type { ExperienceItemProps } from "./components/ExperienceItem"
import type { ProjectItemProp } from "./components/ProjectsItem"

export const experience: ExperienceItemProps[] = [ // The '[]' says we have an array all of type 'ExperienceItemProps'
    {
        company:"JPMorgan",
        role:"Software Engineer Intern",
        description:"Worked in Market Stress"
    },
    {
        company:"University of Liverpool",
        role:"Teaching Assistant",
        description:"Taught to over 60 first-year students in COMP111 and COMP108"
    }
]

export const projects: ProjectItemProp[] = [
    {
        name:"Store Item Finder",
        description:"Uses AI to be your personal store assistant"
    },
    {
        name:"Bus Tracker",
        description:"Tracking bus services in Liverpool"
    }
]
