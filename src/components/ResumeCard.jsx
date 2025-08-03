import React from 'react'
import '../styles/ResumeCard.css';
import AddButton from './AddButton';

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
                {education.map((edu, idx) => (
                    <div key={idx} className='education-item'>
                        <div className='edu-left-column'>
                            <p><b>{edu.institution}</b></p>
                            <p>(<i>{edu.degree}</i>)</p>
                        </div>
                        <div className='edu-right-column'>
                            <p><i>{edu.From}</i> - <i>{edu.yearOfGraduation}</i></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='experience'>
            <h1 className='section-headings'><span className='letter-span'>E</span>XPERIENCE</h1>
            <hr className='solid'/>
            {Array.isArray(experience) && experience.map((exp, idx) => (
              <div className='experience-details' key={idx}>
                <div className='exp-left-column'>
                  <p><b>{exp.title}</b>, <i>{exp.company}</i></p>
                </div>
                <div className='exp-right-column'>
                  <p><i>{exp.duration}</i></p>
                </div>
                <p className='exp-description'>{exp.description}</p>
              </div>
            ))}
        </div>

        <div className='projects'>
            <h1 className='section-headings'><span className='letter-span'>P</span>ROJECTS</h1>
            <hr className='solid'/>
            {Array.isArray(projects) && projects.map((proj, idx) => (
              <div className='project-details' key={idx}>
                <div className='proj-left-column'>
                  <p><b>{proj.name}</b></p>
                  <p>(<i><b>Tech Stack:</b></i> <i>{proj.techStack}</i>)</p>
                </div>
                <div className='proj-right-column'>
                  <a href={proj.sourceCode} target='_blank' rel='noopener noreferrer'>Source Code</a>
                  <a href={proj.liveDemo} target='_blank' rel='noopener noreferrer'>Live Demo</a>
                </div>
                <p className='proj-description'>{proj.description}</p>
              </div>
            ))}
        </div>

        <div className='skills'>
            <h1 className='section-headings'><span>S</span>KILLS</h1>
            <hr className='solid'/>
            {Array.isArray(skills) && skills.map((skill, idx) => (
              <p key={idx}><b>{skill.category}</b>: <i>{skill.name}</i></p>
            ))}
        </div>
    </div>
  )
}

export default ResumeCard