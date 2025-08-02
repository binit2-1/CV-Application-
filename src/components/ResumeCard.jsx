import React from 'react'
import '../styles/ResumeCard.css';

const ResumeCard = ({
    personalInfo = {},
    education = {},
    experience = {},
    projects = {},
    skills = {},
}) => {
  return (
    <div className='resume-card'>
        <div className='personal-info'>
            <h2 className='name'>{personalInfo.fullName}</h2>
            <div className='header-details'>
                <div className='left-column'>
                        <p className='email'><span className='header-span'>Email:</span> {personalInfo.email}</p>
                        <p className='phone'><span className='header-span'>Phone:</span> {personalInfo.phoneNumber}</p>
                        <p className='address'><span className='header-span'>Address:</span> {personalInfo.address}</p>
                </div>
                <div className='right-column'>
                    <p className='linkedin'><span className='header-span'>LinkedIn:</span> {personalInfo.linkedin}</p>
                    <p className='github'><span className='header-span'>GitHub:</span> {personalInfo.github}</p>
                </div>
            </div>
        </div>

        <div className='education'>
            <h1 className='section-headings'><span className='letter-span'>E</span>DUCATION</h1>
            <hr className='solid'/>
            <div className='education-details'>
                <div className='edu-left-column'>
                    <p>{education.institution}</p>
                    <p>(<i>{education.degree}</i>)</p>
                </div>
                <div className='edu-right-column'>
                    <p><i>{education.From}</i> to <i>{education.yearOfGraduation}</i></p>
                </div>
            </div>
        </div>
        <div className='experience'>
            <h1 className='section-headings'><span className='letter-span'>E</span>XPERIENCE</h1>
            <hr className='solid'/>
            <p>{experience.title}</p>
            <p>{experience.company}</p>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
        </div>

        <div className='projects'>
            <h1 className='section-headings'><span className='letter-span'>P</span>ROJECTS</h1>
            <hr className='solid'/>
            <p>{projects.name}</p>
            <p>{projects.description}</p>
            <p>{projects.techStack}</p>
        </div>

        <div className='skills'>
            <h1 className='section-headings'><span>S</span>KILLS</h1>
            <hr className='solid'/>
            <p>{skills.category}</p>
            <p>{skills.name}</p>
        </div>
    </div>
  )
}

export default ResumeCard