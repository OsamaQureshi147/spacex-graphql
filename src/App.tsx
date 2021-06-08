import {useCallback, useState} from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionInfo from './components/MissionInfo/index'

function App() {
  const [id, setId] = useState(42);
  const handleChangeId = useCallback(newID => {
    setId(newID);
  }, []);

  return (
    <div>
       <MissionContainer  />
       <MissionInfo />
    </div>
  );
}

export default App;
