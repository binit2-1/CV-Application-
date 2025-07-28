import React from 'react';
import PersonalDetails from './components/PersonalDetails.jsx';
import './App.css'

const App = () => {
  return (
     <div className="parent">
      <div className="div1"> <PersonalDetails /> </div>
      <div className="div2"> </div>
   </div>
  );
}

export default App;