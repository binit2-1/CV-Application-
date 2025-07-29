import React from 'react';
import CollapseBox from './components/CollapseBox.jsx';
import InputDetails from './components/InputDetails.jsx';
import './App.css'

const App = () => {
  return (
     <ul>
      <li className='div1'>
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
     </ul>
  );
}

export default App;