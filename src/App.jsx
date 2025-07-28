import React from 'react';
import PersonalDetails from './components/PersonalDetails.jsx';
import CollapseBox from './components/reusables/CollapseBox.jsx';
import './App.css'

const App = () => {
  return (
     <div className="parent">
      <div className="div1"> 
        <PersonalDetails />
        <CollapseBox title={<h1>Education</h1>} 
        content = {<form>
          <label className='label-pd'>Institution:</label>
          <input type="text" placeholder='e.g. XYZ International' className='input-pd' />
          <label className='label-pd'>Degree:</label>
          <input type="text" placeholder='e.g. Bachelor of Science' className='input-pd' />
          <label className='label-pd'>Year of Graduation:</label>
          <input type="text" placeholder='e.g. 2020' className='input-pd' />
        </form>} 
        />
      </div>
      <div className="div2"> </div>
   </div>
  );
}

export default App;