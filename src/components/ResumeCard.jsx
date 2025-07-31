import React from 'react'
import '../styles/ResumeCard.css';

const ResumeCard = ({
    personalInfo = {},
    education = {},
    accomplishments = {},
    projects = {},
    skills = {},
}) => {
  return (
    <div className='resume-card'>
        <div className='personal-info'>
            <h2 className='name'>{personalInfo.fullName}</h2>
            <p className='email'>{personalInfo.email}</p>
            <p className='phone'>{personalInfo.phoneNumber}</p>
            <p className='address'>{personalInfo.address}</p>
            <p className='linkedin'>{personalInfo.linkedin}</p>
            <p className='github'>{personalInfo.github}</p>
        </div>

        <div className='education'>
            <h1>Education</h1>
            <hr className='solid'/>
            <p>{education.institution}</p>
            <p>{education.degree}</p>
            <p>{education.yearOfGraduation}</p>
        </div>

        <div className='accomplishments'>
            <h1>Accomplishments</h1>
            <hr className='solid'/>
            <p>{accomplishments.title}</p>
            <p>{accomplishments.description}</p>
        </div>

        <div className='projects'>
            <h1>Projects</h1>
            <hr className='solid'/>
            <p>{projects.name}</p>
            <p>{projects.description}</p>
            <p>{projects.techStack}</p>
        </div>

        <div className='skills'>
            <h1>Skills</h1>
            <hr className='solid'/>
            <p>{skills.category}</p>
            <p>{skills.name}</p>
        </div>
    </div>
  )
}

export default ResumeCard