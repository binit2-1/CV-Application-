import React from 'react';
import PersonalDetails from './components/PersonalDetails.jsx';
import CollapseBox from './components/reusables/CollapseBox.jsx';
import './App.css'

const App = () => {
  return (
     <div className="parent">
      <div className="div1"> 
        <PersonalDetails />
        <CollapseBox title={<h1>Education</h1>} />
      </div>
      <div className="div2"> </div>
   </div>
  );
}

export default App;