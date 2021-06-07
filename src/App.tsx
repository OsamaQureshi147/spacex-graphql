import {useCallback, useState} from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionInfo from './components/MissionInfo/index'

function App() {
  
  return (
    <div>
       <MissionContainer  />
       <MissionInfo />
    </div>
  );
}

export default App;
