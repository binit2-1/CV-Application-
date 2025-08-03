import React, { useState } from 'react';
import CollapseBox from './components/CollapseBox.jsx';
import InputDetails from './components/InputDetails.jsx';
import './App.css';
import ResumeCard from './components/ResumeCard.jsx';
import AddButton from './components/AddButton.jsx';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1 234 567 8901',
    address: '123 Main St, City, Country',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe'
  });

  const [education, setEducation] = useState([
    {
      institution: 'Example University',
      degree: 'B.Sc. in Computer Science',
      From: '2020',
      yearOfGraduation: '2025'
    }
  ]);

  const [experience, setExperience] = useState([
    {
      title: 'Software Engineer',
      company: 'ABC Corp',
      duration: 'Jan 2022 - Present',
      description: 'Developed scalable web applications and led a team of 5 engineers.'
    }
  ]);
  const [projects, setProjects] = useState([
    {
      name: 'Portfolio Website',
      description: 'A personal website to showcase my projects and skills.',
      techStack: 'React, CSS, Vite',
      sourceCode: 'https://github.com/yourusername/portfolio',
      liveDemo: 'https://yourusername.github.io/portfolio/'
    }
  ]);

  const [skills, setSkills] = useState([
    {
      category: 'Programming Languages',
      name: 'JavaScript, Python, C++'
    }
  ]);

  return (
    <div className='parent'>
      <ul className='div1'>
        <li className='PersonalDetails'>
          <CollapseBox
            title="Personal Information"
            content={
              <>
                <InputDetails
                  labelName='label-pd'
                  labelText='Full Name'
                  type='text'
                  placeholder='e.g. John Doe'
                  inputName='input-pd'
                  value={personalInfo.fullName}
                  onChange={e => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Email'
                  type='email'
                  placeholder='e.g. john.doe@example.com'
                  inputName='input-pd'
                  value={personalInfo.email}
                  onChange={e => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Phone Number'
                  type='tel'
                  placeholder='e.g. +1234567890'
                  inputName='input-pd'
                  value={personalInfo.phoneNumber}
                  onChange={e => setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Address'
                  type='text'
                  placeholder='e.g. 123 Main St, City, Country'
                  inputName='input-pd'
                  value={personalInfo.address}
                  onChange={e => setPersonalInfo({ ...personalInfo, address: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='LinkedIn'
                  type='url'
                  placeholder='e.g. https://www.linkedin.com/in/yourprofile'
                  inputName='input-pd'
                  value={personalInfo.linkedin}
                  onChange={e => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='GitHub'
                  type='url'
                  placeholder='e.g. https://www.github.com/yourprofile'
                  inputName='input-pd'
                  value={personalInfo.github}
                  onChange={e => setPersonalInfo({ ...personalInfo, github: e.target.value })}
                />
              </>
            }
          />
        </li>
        <li className='Education'>
          <CollapseBox
            title="Education"
            content={
              <>
              <ul>
                {education.map((edu, idx) => (
                  <li key={idx}>
                    <InputDetails
                      labelName='label-pd'
                      labelText='Institution'
                      type='text'
                      placeholder='e.g. University of Example'
                      inputName='input-pd'
                      value={edu.institution}
                      onChange={e => setEducation(prev => prev.map((item, i) => i === idx ? { ...item, institution: e.target.value } : item))}
                    />
                    <InputDetails
                      labelName='label-pd'
                      labelText='Degree'
                      type='text'
                      placeholder='e.g. Bachelor of Science'
                      inputName='input-pd'
                      value={edu.degree}
                      onChange={e => setEducation(prev => prev.map((item, i) => i === idx ? { ...item, degree: e.target.value } : item))}
                    />
                    <InputDetails
                      labelName='label-pd'
                      labelText='From'
                      type='text'
                      placeholder='e.g. 2020'
                      inputName='input-pd'
                      value={edu.From}
                      onChange={e => setEducation(prev => prev.map((item, i) => i === idx ? { ...item, From: e.target.value } : item))}
                    />
                    <InputDetails
                      labelName='label-pd'
                      labelText='Year of Graduation(or Expected)'
                      type='text'
                      placeholder='e.g. 2024'
                      inputName='input-pd'
                      value={edu.yearOfGraduation}
                      onChange={e => setEducation(prev => prev.map((item, i) => i === idx ? { ...item, yearOfGraduation: e.target.value } : item))}
                    />
                  </li>
                ))}
              </ul>
              <div className="add-btn-container">
                <AddButton buttonText="Education" onClick={() => setEducation([...education, { institution: '', degree: '', From: '', yearOfGraduation: '' }])} />
              </div>
              </>
            }
          />
        </li>
      
        <li className='Experience'>
          <CollapseBox
            title="Experience"
            content={
              <>
                <ul>
                  {experience.map((exp, idx) => (
                    <li key={idx}>
                      <InputDetails
                        labelName='label-pd'
                        labelText='Job Title'
                        type='text'
                        placeholder='e.g. Software Engineer'
                        inputName='input-pd'
                        value={exp.title}
                        onChange={e => setExperience(prev => prev.map((item, i) => i === idx ? { ...item, title: e.target.value } : item))}
                      />
                      <InputDetails
                        labelName='label-pd'
                        labelText='Company'
                        type='text'
                        placeholder='e.g. ABC Corp'
                        inputName='input-pd'
                        value={exp.company}
                        onChange={e => setExperience(prev => prev.map((item, i) => i === idx ? { ...item, company: e.target.value } : item))}
                      />
                      <InputDetails
                        labelName='label-pd'
                        labelText='Duration'
                        type='text'
                        placeholder='e.g. Jan 2020 - Present'
                        inputName='input-pd'
                        value={exp.duration}
                        onChange={e => setExperience(prev => prev.map((item, i) => i === idx ? { ...item, duration: e.target.value } : item))}
                      />
                      <InputDetails
                        labelName='label-pd'
                        labelText='Description'
                        type='text'
                        placeholder='e.g. Developed scalable web applications and led a team of 5 engineers.'
                        inputName='input-pd'
                        value={exp.description}
                        onChange={e => setExperience(prev => prev.map((item, i) => i === idx ? { ...item, description: e.target.value } : item))}
                      />
                    </li>
                  ))}
              </ul>
              
                <div className="add-btn-container">
                  <AddButton buttonText="Experience" onClick={() => setExperience([...experience, { title: '', company: '', duration: '', description: '' }])} />
                </div>
              </>
            }
          />
        </li>
        <li className='Projects'>
          <CollapseBox
            title="Projects"
            content={
              <>
                <ul>
                  {projects.map((proj, idx) => (
                    <li key={idx}>
                      <InputDetails
                        labelName='label-pd'
                        labelText='Project Name'
                        type='text'
                        placeholder='e.g. Portfolio Website'
                        inputName='input-pd'
                        value={proj.name}
                        onChange={e => setProjects(prev => prev.map((item, i) => i === idx ? { ...item, name: e.target.value } : item))}
                      />
                      <InputDetails
                        labelName='label-pd'
                        labelText='Description'
                        type='text'
                        placeholder='e.g. A personal portfolio website showcasing my work.'
                        inputName='input-pd'
                        value={proj.description}
                        onChange={e => setProjects(prev => prev.map((item, i) => i === idx ? { ...item, description: e.target.value } : item))}
                      />
                      <InputDetails
                        labelName='label-pd'
                        labelText='Tech stack'
                        type='text'
                        placeholder='e.g. React, Node.js, MongoDB'
                        inputName='input-pd'
                        value={proj.techStack}
                        onChange={e => setProjects(prev => prev.map((item, i) => i === idx ? { ...item, techStack: e.target.value } : item))}
                      />
                      <InputDetails
                        labelName='label-pd'
                        labelText='Source Code'
                        type='url'
                        placeholder='e.g. https://github.com/yourusername/yourproject'
                        inputName='input-pd'
                        value={proj.sourceCode}
                        onChange={e => setProjects(prev => prev.map((item, i) => i === idx ? { ...item, sourceCode: e.target.value } : item))}
                      />
                      <InputDetails
                        labelName='label-pd'
                        labelText='Live Demo'
                        type='url'
                        placeholder='e.g. https://yourusername.github.io/yourproject/'
                        inputName='input-pd'
                        value={proj.liveDemo}
                        onChange={e => setProjects(prev => prev.map((item, i) => i === idx ? { ...item, liveDemo: e.target.value } : item))}
                      />
                    </li>
                  ))}
                </ul>
                <div className="add-btn-container">
                  <AddButton buttonText="Project" onClick={() => setProjects([...projects, { name: '', description: '', techStack: '', sourceCode: '', liveDemo: '' }])} />
                </div>
              </>
            }
          />
        </li>
        <li className='Skills'>
          <CollapseBox
            title="Skills"
            content={
              <>
                <ul>
                  {skills.map((skill, idx) => (
                    <li key={idx}>
                      <InputDetails
                        labelName='label-pd'
                        labelText='Category'
                        type='text'
                        placeholder='e.g. Programming Languages, Frameworks, Tools, etc'
                        inputName='input-pd'
                        value={skill.category}
                        onChange={e => setSkills(prev => prev.map((item, i) => i === idx ? { ...item, category: e.target.value } : item))}
                      />
                      <InputDetails
                        labelName='label-pd'
                        labelText='Skill Name'
                        type='text'
                        placeholder='e.g. JavaScript, React, Node.js, MongoDB'
                        inputName='input-pd'
                        value={skill.name}
                        onChange={e => setSkills(prev => prev.map((item, i) => i === idx ? { ...item, name: e.target.value } : item))}
                      />
                    </li>
                  ))}
                </ul>
                <div className="add-btn-container">
                  <AddButton buttonText="Skills" onClick={() => setSkills([...skills, { category: '', name: '' }])} />
                </div>
              </>
            }
          />
        </li>
      </ul>
      <div className='div2'>
        <ResumeCard
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          projects={projects}
          skills={skills}
        />
      </div>
    </div>    
  );
}

export default App;