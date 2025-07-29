import React from 'react';
import CollapseBox from './components/CollapseBox.jsx';
import InputDetails from './components/InputDetails.jsx';
import './App.css'

const App = () => {
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
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Email'
                  type='email'
                  placeholder='e.g. john.doe@example.com'
                  inputName='input-pd'
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Phone Number'
                  type='tel'
                  placeholder='e.g. +1234567890'
                  inputName='input-pd'
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Address'
                  type='text'
                  placeholder='e.g. 123 Main St, City, Country'
                  inputName='input-pd'
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='LinkedIn'
                  type='url'
                  placeholder='e.g. https://www.linkedin.com/in/yourprofile'
                  inputName='input-pd'
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='GitHub'
                  type='url'
                  placeholder='e.g. https://www.github.com/yourprofile'
                  inputName='input-pd'
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
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Degree'
                  type='text'
                  placeholder='e.g. Bachelor of Science'
                  inputName='input-pd'
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Year of Graduation'
                  type='text'
                  placeholder='e.g. 2020'
                  inputName='input-pd'
                />
              </>
            }
          />
        </li>
        <li className='Accomplishments'>
          <CollapseBox
            title="Accomplishments"
            content={
              <>
                <InputDetails
                  labelName='label-pd'
                  labelText='AAccomplishment Title'
                  type='text'
                  placeholder='e.g. Best Developer Award'
                  inputName='input-pd'
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Description'
                  type='text'
                  placeholder='e.g. Awarded for outstanding performance in software development.'
                  inputName='input-pd'
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
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Description'
                  type='text'
                  placeholder='e.g. A personal portfolio website showcasing my work.'
                  inputName='input-pd'
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Tech stack'
                  type='text'
                  placeholder='e.g. React, Node.js, MongoDB'
                  inputName='input-pd'
                />
              </>
            }
          />
        </li>
        <li className='Skills'>
          <CollapseBox
            title ="Skills"
            content={
              <>
                <InputDetails
                  labelName='label-pd'
                  labelText='Category'
                  type='text'
                  placeholder='e.g. Programming Languages, Frameworks, Tools, etc'
                  inputName='input-pd'
                />
                <InputDetails
                  labelName='label-pd'
                  labelText='Skill Name'
                  type='text'
                  placeholder='e.g. JavaScript, React, Node.js, MongoDB'
                  inputName='input-pd'
                />
              </>
            }
          />
        </li>
      </ul>
      <div className='div2'>
      </div>
    </div>
  );
}

export default App;