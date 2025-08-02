import React, { useState } from 'react';
import CollapseBox from './components/CollapseBox.jsx';
import InputDetails from './components/InputDetails.jsx';
import './App.css';
import ResumeCard from './components/ResumeCard.jsx';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1 234 567 8901',
    address: '123 Main St, City, Country',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe'
  });

  const [education, setEducation] = useState({
    institution: 'Example University',
    degree: 'B.Sc. in Computer Science',
    From: '2020',
    yearOfGraduation: '2025'
  });

  const [experience, setExperience] = useState({
    title: '',
    company: '',
    duration: ''
  });

  const [accomplishments, setAccomplishments] = useState({
    title: '',
    description: ''
  });

  const [projects, setProjects] = useState({
    name: 'Portfolio Website',
    description: 'A personal website to showcase my projects and skills.',
    techStack: 'React, CSS, Vite'
  });

  const [skills, setSkills] = useState({
    category: 'Programming Languages',
    name: 'JavaScript, Python, C++'
  });

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
                <InputDetails
                  labelName='label-pd'
                  labelText='Institution'
                  type='text'
                  placeholder='e.g. University of Example'
                  inputName='input-pd'
                  value={education.institution}
                  onChange={e => setEducation({ ...education, institution: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Degree'
                  type='text'
                  placeholder='e.g. Bachelor of Science'
                  inputName='input-pd'
                  value={education.degree}
                  onChange={e => setEducation({ ...education, degree: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='From'
                  type='text'
                  placeholder='e.g. 2020'
                  inputName='input-pd'
                  value={education.From}
                  onChange={e => setEducation({ ...education, From: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Year of Graduation(or Expected)'
                  type='text'
                  placeholder='e.g. 2024'
                  inputName='input-pd'
                  value={education.yearOfGraduation}
                  onChange={e => setEducation({ ...education, yearOfGraduation: e.target.value })}
                />
              </>
            }
          />
        </li>
        <li className='Experience'>
          <CollapseBox
            title="Experience"
            content={
              <>
                <InputDetails
                  labelName='label-pd'
                  labelText='Job Title'
                  type='text'
                  placeholder='e.g. Software Engineer'
                  inputName='input-pd'
                  value={experience.title}
                  onChange={e => setExperience({ ...experience, title: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Company'
                  type='text'
                  placeholder='e.g. ABC Corp'
                  inputName='input-pd'
                  value={experience.company}
                  onChange={e => setExperience({ ...experience, company: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Duration'
                  type='text'
                  placeholder='e.g. Jan 2020 - Present'
                  inputName='input-pd'
                  value={experience.duration}
                  onChange={e => setExperience({ ...experience, duration: e.target.value })}
                />
              </>
            }
          />
        </li>
        <li className='Projects'>
          <CollapseBox
            title="Projects"
            content={
              <>
                <InputDetails
                  labelName='label-pd'
                  labelText='Project Name'
                  type='text'
                  placeholder='e.g. Portfolio Website'
                  inputName='input-pd'
                  value={projects.name}
                  onChange={e => setProjects({ ...projects, name: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Description'
                  type='text'
                  placeholder='e.g. A personal portfolio website showcasing my work.'
                  inputName='input-pd'
                  value={projects.description}
                  onChange={e => setProjects({ ...projects, description: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Tech stack'
                  type='text'
                  placeholder='e.g. React, Node.js, MongoDB'
                  inputName='input-pd'
                  value={projects.techStack}
                  onChange={e => setProjects({ ...projects, techStack: e.target.value })}
                />
              </>
            }
          />
        </li>
        <li className='Skills'>
          <CollapseBox
            title="Skills"
            content={
              <>
                <InputDetails
                  labelName='label-pd'
                  labelText='Category'
                  type='text'
                  placeholder='e.g. Programming Languages, Frameworks, Tools, etc'
                  inputName='input-pd'
                  value={skills.category}
                  onChange={e => setSkills({ ...skills, category: e.target.value })}
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Skill Name'
                  type='text'
                  placeholder='e.g. JavaScript, React, Node.js, MongoDB'
                  inputName='input-pd'
                  value={skills.name}
                  onChange={e => setSkills({ ...skills, name: e.target.value })}
                />
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