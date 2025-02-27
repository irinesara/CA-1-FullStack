import React from 'react'
import {Route,Routes} from 'react-router-dom';
import TeamMemberCard from './components/TeamMemberCard';

 const App = () => {
  return (
    <Routes>
      <Route path='/TeamMemberCard' element={<TeamMemberCard/>}/>
    </Routes>
  )
}
export default App;
