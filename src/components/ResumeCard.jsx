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
        <hr className='solid'/>
        <div className='education'>
            <h1>Education</h1>
            <p>{education.institution}</p>
            <p>{education.degree}</p>
            <p>{education.yearOfGraduation}</p>
        </div>
        <hr className='solid'/>
        <div className='accomplishments'>
            <h1>Accomplishments</h1>
            <p>{accomplishments.title}</p>
            <p>{accomplishments.description}</p>
        </div>
        <hr className='solid'/>
        <div className='projects'>
            <h1>Projects</h1>
            <p>{projects.name}</p>
            <p>{projects.description}</p>
            <p>{projects.techStack}</p>
        </div>
        <hr className='solid'/>
        <div className='skills'>
            <h1>Skills</h1>
            <p>{skills.category}</p>
            <p>{skills.name}</p>
        </div>
    </div>
  )
}

export default ResumeCard