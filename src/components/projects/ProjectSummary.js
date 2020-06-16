import React from 'react'


 const ProjectSummary = ({project}) => {
    return  (
        <div className="project-list section">
         
         <div className="card z-depth-0 project-summary">
             <span className="card-title"> {project.title}</span>
             <p>Posted by the Net Ninja</p>
             <p className="gre-text"> 3rd Septbember, 2am</p>
         </div>

        </div>
    )
}
export default ProjectSummary